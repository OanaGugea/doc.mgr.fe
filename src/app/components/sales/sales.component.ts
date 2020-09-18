import { Component, OnInit, ViewChild } from "@angular/core";
import { IClientsListItem, Representative, Customer } from 'src/app/contracts/clients-list-item.model';
import { CustomerService } from './customer.service';
import { TableColumn } from 'src/app/common/ocean-table/ocean-table.component';
import { MenuItem } from 'primeng/api';
import { alertsData, clientsData, observationsData } from './sales.mockup';
import { observable } from 'rxjs';
export interface Car {
  vin;
  year;
  brand;
  color;
}

export interface Note {
  title: string;
  textContent: string;
}

@Component({
  selector: "sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.css"],
})

export class SalesComponent implements OnInit {

  public clients = clientsData;
  public alerts = alertsData;
  public observations = observationsData;

  public columns: TableColumn[] = [
    { field: 'name', header: 'Name' },
    { field: 'status', header: 'Status' },
    { field: 'tasks', header: 'Sarcini' },
  ];

  items: MenuItem[];
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

  }
}
