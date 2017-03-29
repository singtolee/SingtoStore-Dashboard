import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  addresses:FirebaseListObservable<any>;
  newAddress:string='';
  constructor(public af:AngularFire) {
    this.addresses = af.database.list('/OfficeBuildings',{
      query:{
        limitToFirst: 100
      }
    });
  }

  saveNewAddress(){
    this.addresses.push(this.newAddress);
    this.newAddress = '';
  }

  ngOnInit() {
  }

}
