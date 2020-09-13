import { Component, OnInit } from '@angular/core';
import { IClientsListItem } from 'src/app/contracts/clients-list-item.model';
import { TableColumn } from 'src/app/common/ocean-table/ocean-table.component';
import { MenuItem } from 'primeng/api';

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
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})

export class SalesComponent implements OnInit {
  public clients: IClientsListItem[] = [
    { name: 'Client 1', status: 'active' },
    { name: 'Client 2', status: 'active' },
    { name: 'Client 3', status: 'active' },
    { name: 'Client 4', status: 'active' },
    { name: 'Client 5', status: 'potential' },
    { name: 'Client 6', status: 'active' },
    { name: 'Client 14', status: 'potential' },

  ];

  public columns: TableColumn[] = [
    { field: 'name', header: 'Name' },
    { field: 'status', header: 'Status' },
  ];

  public alerts: Note[] = [
    { title: '2020-09-29', textContent: 'Important TO-DO Meeting #1' },
    { title: '2020-09-31', textContent: 'Important TO-DO Meeting #2' },
    { title: '2020-09-21', textContent: 'Important TO-DO Meeting #3' },
    { title: '2020-10-51', textContent: 'Important TO-DO Meeting #4' },
    { title: '2020-09-29', textContent: 'Important TO-DO Meeting #5' },
    { title: '2020-09-31', textContent: 'Important TO-DO Meeting #6' },
    { title: '2020-09-21', textContent: 'Important TO-DO Meeting #7' },
    { title: '2020-10-51', textContent: 'Important TO-DO Meeting #8 ' },
  ];

  public observations: Note[] = [
    { title: '2020-09-29', textContent: 'Important Test Observation #1' },
    { title: '2020-09-31', textContent: 'Important test obs Observation #2' },
    { title: '2020-09-21', textContent: 'Important test obs Observation #3' },
    { title: '2020-10-51', textContent: 'Important test obs Observation #4' },
    { title: '2020-09-29', textContent: 'Important test obs Observation #5' },
    { title: '2020-09-31', textContent: 'Important test obs Observation #6' },
    { title: '2020-09-21', textContent: 'Important test obs Observation #7' },
    { title: '2020-10-51', textContent: 'Important test obs Observation #8 ' },
  ];
  public tasks: Note[] = [
    { title: '2020-09-29', textContent: 'Important test obs Meeting #1' },
    { title: '2020-09-31', textContent: 'Important test obs Meeting #2' },
    { title: '2020-09-21', textContent: 'Important test obs Meeting #3' },
    { title: '2020-10-51', textContent: 'Important test obs Meeting #4' },
    { title: '2020-09-29', textContent: 'Important test obs Meeting #5' },
    { title: '2020-09-31', textContent: 'Important test obs Meeting #6' },
    { title: '2020-09-21', textContent: 'Important test obs Meeting #7' },
    { title: '2020-10-51', textContent: 'Important test obs Meeting #8 ' },
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
