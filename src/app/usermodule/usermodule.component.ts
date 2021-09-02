import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-usermodule',
  templateUrl: './usermodule.component.html',
  styleUrls: ['./usermodule.component.css']
})
export class UsermoduleComponent implements OnInit {
  board!: string;
  errorMessage!: string;



  content!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
