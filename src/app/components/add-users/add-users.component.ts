import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { User } from 'src/app/models/user';
import { AppServices } from 'src/app/services/common.service';

interface Roles {
  name: string;
  code: string;
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
  public user: User;

  constructor(private service: AppServices) {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.roles = [
      { name: 'Administrator', code: 'NY' },
      { name: 'User-vanzari', code: 'RM' },
      { name: 'User-colectari', code: 'LDN' },
      { name: 'Client', code: 'IST' }
    ];
  }

  ngOnInit(): void {
    this.user = new User('', '', '', '', '');
  }
  public save() {
    // to be implemented
    console.warn(this.user);
  }
}
