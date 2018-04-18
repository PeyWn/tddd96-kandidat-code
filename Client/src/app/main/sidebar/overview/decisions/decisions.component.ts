import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactory, ComponentFactoryResolver, OnInit } from '@angular/core';
import { GetPatientsService} from '../../../get-patients.service';
import {InfoheaderComponent} from '../../planning/infoheader/infoheader.component';
import {Patient} from '../../planning/infoheader/Patient';

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrls: ['./decisions.component.css']
})

export class DecisionsComponent implements OnInit {
  decisionList = this.gpService.patients;
  processList:Patient[];
  setPatient(newPatient) {
    this.gpService.currentPatient = newPatient;
  }
  getPatient() {
    return this.gpService.currentPatient;
  }
  createComponent(newPatient) {
    const factory: ComponentFactory<InfoheaderComponent> = this.resolver.resolveComponentFactory(InfoheaderComponent);
    const componentRef: ComponentRef<InfoheaderComponent> = this.container.createComponent(factory);
    componentRef.instance.patient = newPatient;
  }
  createComponents() {
    this.container.clear();
    for (let i = 0; i < this.processList.length; i++) {
      this.createComponent(this.processList[i]);
    }
  }

  viewAll() {
    this.processList = this.decisionList;
    this.createComponents();
  }


  filterPatients($event) {
    let templist = []
    for (let i = 0; i < this.processList.length;i++ ) {
      if (this.processList[i].Bradskandegrad  == $event) {
        templist.push(this.processList[i]);
      }
    }
    this.processList = templist;
    this.createComponents();
  }


  iteratePatients($event) {
    this.processList = [];
    $event = $event.toLowerCase();
    if ($event) {
      for (let i = 0; i < this.decisionList.length; i++) {
        if (this.decisionList[i].Namn.toLowerCase() === $event) {
          this.processList.push(this.decisionList[i]);
        }
      }
      for (let i = 0; i < this.decisionList.length; i++) {
        if (this.decisionList[i].Personnummer === Number($event)) {
          this.processList.push(this.decisionList[i]);
        }
      }
      for (let i = 0; i < this.decisionList.length; i++) {
        if (this.decisionList[i].ICD10.toLowerCase() === $event) {
          this.processList.push(this.decisionList[i]);
        }
      }
      for (let i = 0; i < this.decisionList.length; i++) {
        if (this.decisionList[i].Operationstyp.toLowerCase() === $event) {
          this.processList.push(this.decisionList[i]);
        }
      }
      this.createComponents();
    }

    else{
      this.viewAll();
    }
  }



  sortByTime() {
    this.quickSort(this.processList);
    this.createComponents();
  }


  sortByTimeReverse() {
    this.quickSort(this.processList);
    this.processList = this.processList.reverse();
    this.createComponents();
  }

  partition(array: Array<Patient>, left: number = 0, right: number = array.length - 1) {
    const pivot = array[Math.floor((right + left) / 2)].Tid;
    let i = left;
    let j = right;

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

  quickSort(array:Array<Patient>, left: number = 0, right: number = array.length - 1) {
    let index;

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



  @ViewChild('infoh', { read: ViewContainerRef }) container;
  constructor(private gpService: GetPatientsService, private resolver: ComponentFactoryResolver) {
    this.processList = this.decisionList;
  }

  ngOnInit() {
    this.viewAll();
  }

}
