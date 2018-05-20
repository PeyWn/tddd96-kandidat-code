import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactory, ComponentFactoryResolver, OnInit } from '@angular/core';
import { GetPatientsService} from '../../../get-patients.service';
import {InfoheaderComponent} from '../../planning/infoheader/infoheader.component';
import {Patient} from '../../planning/infoheader/Patient';
import {GetCalendarFiltersService} from '../../../get-calendar-filters.service';

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrls: ['./decisions.component.css']
})

export class DecisionsComponent implements OnInit {
  akutFilter: boolean;
  elektivFilter: boolean;
  bokadFilter: boolean;
  prebokadFilter: boolean;
  latestSearch: string;
  decisionList: Array<Patient>;
  processList: Patient[];
  durationFilter: number;
  proceduresFilter: string[];
  @ViewChild('infoh', { read: ViewContainerRef }) container;

  setPatient(newPatient: Patient) {
    this.gpService.currentPatient = newPatient;
  }

  getPatient(): Patient {
    return this.gpService.currentPatient;
  }

  createComponent(newPatient: Patient): void {
    const factory: ComponentFactory<InfoheaderComponent> = this.resolver.resolveComponentFactory(InfoheaderComponent);
    const componentRef: ComponentRef<InfoheaderComponent> = this.container.createComponent(factory);
    componentRef.instance.patient = newPatient;
  }

  createComponents(): void {
    this.container.clear();
    for (let i = 0; i < this.processList.length; i++) {
      this.createComponent(this.processList[i]);
    }
  }

  viewAll(): void {
    this.latestSearch = undefined;
    this.processList = this.decisionList;
    this.createComponents();
  }



  recieveFilters($event) {
    switch ($event[0]) {
      case 'AKUT': {this.akutFilter = $event[1]; break; }
      case 'Elektiv': {this.elektivFilter = $event[1]; break; }
      case 'bokad': {this.bokadFilter = $event[1]; break; }
      case 'prebokad': {this.prebokadFilter = $event[1]; break; }
      default: break;
    }
  }

  applyAkutFilter(filterObject: Patient): boolean {
    if (this.akutFilter) {
      return filterObject.Bradskandegrad;
    }
    return true;
  }


  applyElektivFilter(filterObject: Patient): boolean {
    if (this.elektivFilter) {
      return !filterObject.Bradskandegrad;
    }
    return true;
  }


  applyBokadFilter(filterObject: Patient): boolean {
    if (this.bokadFilter) {
      return filterObject.booking !== null;
    }
    return true;
  }


  applyPrebokadFilter(filterObject: Patient): boolean {
    if (this.prebokadFilter) {
      return filterObject.booking === null;
    }
    return true;
  }

  applyKvaFilter(filterObject: Patient): boolean {
    if (this.proceduresFilter.length > 0){
      return this.proceduresFilter.includes(filterObject.procedures[0].kvåCode);
    }
    return true;
  }


  applyFilters(filterObject: Patient): boolean {
    return (this.applyElektivFilter(filterObject)
      && this.applyAkutFilter(filterObject)
      && this.applyPrebokadFilter(filterObject)
      && this.applyBokadFilter(filterObject)
      && this.applyKvaFilter(filterObject));
  }

  strMatches(str1: string, str2: string): boolean {
    return str1.indexOf(str2) !== -1 || str2.indexOf(str1) !== -1;
  }

  iteratePatients(searchTerm: string): void {
    this.processList = [];
    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      outerloop:
      for (let i = 0; i < this.decisionList.length; i++) {
        let decision: Patient = this.decisionList[i];
        if (!this.applyFilters(decision)) {
          continue;
        }
        for (let j = 0; j < decision.procedures.length; ++j) {
          if (this.strMatches(decision.procedures[j].description.toLowerCase(), searchTerm) ||
              this.strMatches(decision.procedures[j].kvåCode.toLowerCase(), searchTerm) || (
                decision.procedures[j].DecisionProcedure.side !== null &&
                this.strMatches(decision.procedures[j].DecisionProcedure.side.toLowerCase(), searchTerm)
              )) {
            this.processList.push(decision);
            continue outerloop;
          }
        }
        if (this.strMatches(decision.Bradskandegrad === true ? 'akut' : 'elektiv', searchTerm) ||
            this.strMatches(decision.ICD10.toLowerCase(), searchTerm) ||
            this.strMatches(decision.Namn.toLowerCase(), searchTerm) ||
            this.strMatches(decision.Personnummer, searchTerm)) {
          this.processList.push(decision);
        }
      }
      this.createComponents();
    } else {
      this.viewAll();
    }
  }

  filterPatients() {
    this.processList = [];
      for (let i = 0; i < this.decisionList.length; i++) {
        if (this.applyFilters(this.decisionList[i])) {
          this.processList.push(this.decisionList[i]);
        }
      }
      this.createComponents();
    }

  searchList(searchTerm: string): void {
    this.latestSearch = searchTerm;
    this.iteratePatients(this.latestSearch);
  }


  filterList($event) {
    this.recieveFilters($event);
    if (!this.latestSearch) {
      this.filterPatients();
    } else {
      this.iteratePatients(this.latestSearch);
    }
  }

  sortByTime(): void {
    this.quickSort(this.processList);
    this.createComponents();
  }


  sortByTimeReverse(): void {
    this.quickSort(this.processList);
    this.processList = this.processList.reverse();
    this.createComponents();
  }

  partition(array: Array<Patient>, left: number = 0, right: number = array.length - 1): number {
    const pivot = array[Math.floor((right + left) / 2)].Tid;
    let i: number = left;
    let j: number = right;

    while (i <= j) {
      while (array[i].Tid < pivot) {
        i++;
      }
      while (array[j].Tid > pivot) {
        j--;
      }
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }
    return i;
  }

  quickSort(array: Array<Patient>, left: number = 0, right: number = array.length - 1): Array<Patient> {
    let index: number;

    if (array.length > 1) {
      index = this.partition(array, left, right);

      if (left < index - 1) {
        this.quickSort(array, left, index - 1);
      }
      if (index < right) {
        this.quickSort(array, index, right);
      }
    }
    return array;
  }

  constructor(private gpService: GetPatientsService,
              private resolver: ComponentFactoryResolver,
              private gcfService: GetCalendarFiltersService) {
    this.decisionList = this.gpService.patients;
    this.processList = this.decisionList;

    this.durationFilter = this.gcfService.duration;
    this.proceduresFilter = this.gcfService.procedures;

    this.gpService.fetchedPatient.subscribe(() => {
      this.viewAll();
    });

    this.gcfService.filtersUpdated.subscribe(() => {
      this.filterPatients();
    })
  }

  ngOnInit() {
    this.viewAll();
  }

}

