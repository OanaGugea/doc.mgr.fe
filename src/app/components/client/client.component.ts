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
    isWorkingAgreement:false,
    signingDateWorkAgreement:'',
    agreementNumber:'',
    agreementPeriod:''
  }

  public clientDetailsStateLabels={

  }

  public clientDetailsState={
    companyName:'Adobe, Inc',
    registerCode:'RRMAEWAWEWA213',
    fiscalCode:'43124313143',
    telephoneNo:'800-250-23154',
    fax:'0250 234 210',
    headquarter:'Mountain View, CA 92810',
    bankAccount:'SVCPA0000121312',
    bank:'Bank of America',
    importantNotes:'Prioritar',
    website:'www.adobe.com',
  }

  public editModeProjectStage = false;
  public editModeClientDetails = false;
  public timeScales:SelectItem[]=[
    {label: 'weeks' , value: 'weeks'},
    {label: 'months' , value: 'months'},
    {label: 'years' , value: 'years'},
  ];


  public isAcordDeLucru:boolean = true;
  public isAdministrare:boolean = false;
  public selectedItem:SelectItem={label: 'weeks' , value: 'weeks'};
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

  constructor() { }

  ngOnInit(): void {

  }

  public onEditClientDetails(){
    console.warn(this.clientDetailsState);
    this.editModeClientDetails = true;
  }

  public onSaveClientDetails(){
    this.editModeClientDetails = false;
  }

  public onCancelEditClientDetails(){  
    this.editModeClientDetails = false;
  }


  public onSelectTimeRange(event){
    console.error('Client Component',event);
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
