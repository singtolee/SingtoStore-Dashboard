import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cates: FirebaseListObservable<any>;
  supplers: FirebaseListObservable<any>;
  //images urls list
  private urls = [];
  //selected category and suppler
  private selectedCate:string;
  private selectedSuppler:string;

  constructor(public af: AngularFire) {
    this.cates = af.database.list('/ProductCategory',{
      query: {
        limitToFirst: 100
      }
    });
    this.supplers = af.database.list('/Supplers',{
      query: {
        limitToFirst: 100
      }
    });

  }

  uploadPrd(){
    this.urls.push("ABC");
  }

  ngOnInit() {
  }

}
