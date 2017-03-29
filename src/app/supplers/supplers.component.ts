import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-supplers',
  templateUrl: './supplers.component.html',
  styleUrls: ['./supplers.component.css']
})
export class SupplersComponent implements OnInit {

  supplers:FirebaseListObservable<any>;

  constructor(public af:AngularFire) {
    this.supplers = af.database.list('/Supplers',{
      query:{
        limitToFirst: 100
      }
    });
  }
  ngOnInit() {
  }

}
