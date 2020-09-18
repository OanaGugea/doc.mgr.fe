import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocean-tabs',
  templateUrl: './ocean-tabs.component.html',
  styleUrls: ['./ocean-tabs.component.css']
})
export class OceanTabsComponent implements OnInit {
  @Input() title:string;
  @Input() textContent:string;
  constructor() { }

  ngOnInit(): void {
  }

}
