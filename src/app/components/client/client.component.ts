import { Component, OnInit } from '@angular/core';
import { AccordionContent } from 'src/app/common/ocean-accordion/ocean-accordion.component';
import { SelectItem } from 'primeng/api';

export interface ClientDetails{
  companyName:string;
  registerCode:string;
  fiscalCode:string;
  telephoneNo:string;
  fax:string;
  headquarter:string;
  bankAccount:string;
  bank:string;
  importantNotes:string;
  website:string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public projectStageState={
    projectStage:'Activ',
    contractNumber:'',
    signingDate:'',
    isAdministrated:false,
  }

  public editModeProjectStage = false;
  public timeScales:SelectItem[]=[
    {label: 'weeks' , value: 'weeks'},
    {label: 'months' , value: 'months'},
    {label: 'years' , value: 'years'},
  ];
  public isAcordDeLucru:boolean = true;
  public isAdministrare:boolean = false;
  public selectedTime:SelectItem={label: 'Item 1' , value: 'Item 1'};
  public contactPersons:AccordionContent[]=[
    {header:'John Doe',content:{telefon:"21312",email:'ceva@ceva.com'}},
    {header:'John Doe',content:{telefon:"21312",email:'ceva@ceva.com'}},
    {header:'John Doe',content:{telefon:"21312",email:'ceva@ceva.com'}},
    {header:'John Doe',content:{telefon:"21312",email:'ceva@ceva.com'}},
    {header:'John Doe',content:{telefon:"21312",email:'ceva@ceva.com'}},
  ]

  selectedState: any = null;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  cities1: any[] = [];
  
  cities2: any[] = [];
  
  city1:any = null;

  city2:any = null;
  constructor() { }

  ngOnInit(): void {

  }
  public onSelectTimeRange(event){
    console.error('Client',event);
  }
  public onEditProjectStageStatus(){
    console.error(this.projectStageState);
    this.editModeProjectStage = true;
  }

  public onSaveProjectStageStatus(){
    this.editModeProjectStage = false;
  }

  public onCancelNewProjectState(){
    this.editModeProjectStage = false;
  }
}
