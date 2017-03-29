import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:any;
  state:string='';
  constructor(public af:AngularFire,private router: Router) {
    this.af.auth.subscribe(auth=>{
      if(auth){
        this.name=auth;
      }
    });
  }
  logout(){
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
