import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { TimeTable } from '../timetable.model';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  today= new Date();
  user:User;
  timetable:TimeTable[];

  constructor(private _auth: AuthService, private _server: ServerService) { }

  ngOnInit() {
    // console.log(this._auth.getUserId());
    this._server.fetchTimeTable(this._auth.getUserId()).subscribe(
      res => {
        this.timetable=res['timeTable'];
        console.log(this.timetable);
        
      },
      err => console.log(err)
    )
  }

}
