import { Component, OnInit } from '@angular/core';
import { usersList } from '../../users-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  mesDataUser = usersList;
  constructor() { }

  ngOnInit(): void {
  }

}
