import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactory, ComponentFactoryResolver, OnInit } from '@angular/core';
import { GetPatientsService} from '../../../get-patients.service';
import {InfoheaderComponent} from '../../planning/infoheader/infoheader.component';

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrls: ['./decisions.component.css']
})
export class DecisionsComponent implements OnInit {
  decisionList = this.gpService.patients;
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
  createComponents(){
    this.container.clear();
    for (let i = 0; i < this.decisionList.length; i++) {
      this.createComponent(this.decisionList[i]);
    }
  }

  @ViewChild('infoh', { read: ViewContainerRef }) container;
  constructor(private gpService: GetPatientsService, private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.createComponents();
  }

}
