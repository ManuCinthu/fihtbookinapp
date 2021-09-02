import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service'

@Component({
  selector: 'app-adminmodule',
  templateUrl: './adminmodule.component.html',
  styleUrls: ['./adminmodule.component.css']
})
export class AdminmoduleComponent implements OnInit {
  board!: string;
  errorMessage!: string;

 

  content!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
