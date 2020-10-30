import { Component, EventEmitter, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public users : Users;

  public infoUsers

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {

    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  
  }

  getInfoUsers(data) {

    this.infoUsers = data
  
  }





}
