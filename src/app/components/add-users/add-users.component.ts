import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {User} from 'src/app/models/user';
import { AppServices } from 'src/app/services/common.service';

interface Roles{
    name: string,
    code: string
}
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
    roles: Roles[];
    selectedRole: Roles;
    items: SelectItem[];
    item: string;
    public firstname:string='';
    public lastname:string='';
    public username:string='';
    public password:string='';
    public email:string='';
    public role:string='';
    public user:any;
  constructor(private service: AppServices) { 
    this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }
        this.roles = [
          {name: 'Administrator', code: 'NY'},
          {name: 'User-vanzari', code: 'RM'},
          {name: 'User-colectari', code: 'LDN'},
          {name: 'Client', code: 'IST'}
      ];
  }

  ngOnInit(): void {
    this.user=new User('','','','','','');
  }
  public save() {
    console.log('FirstName:'+this.user.firstname);
    console.log('LastName:'+this.user.lastname);
    console.log('UserName:'+this.user.username);
    console.log('Email:'+this.user.email);
    console.log('Password:'+this.user.password);
    console.log('Role:'+this.user.role);
    
  }

}
