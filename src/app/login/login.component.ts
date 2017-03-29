import { Component, OnInit,HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  state:string = '';
  error:any;

  constructor(public af:AngularFire,private router:Router) {
    this.af.auth.subscribe(auth=>{
      if(auth){
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  onSubmit(formData){
    if(formData.valid){
      this.af.auth.login({
        email:formData.value.email,
        password:formData.value.password
      },
      {
        provider:AuthProviders.Password,
        method:AuthMethods.Password
      }).then(
        (success)=>{
          this.router.navigate(['/dashboard']);
        }
      ).catch(
        (err)=>{
          this.error=err;
        }
      )
    }
  }

  ngOnInit() {
  }

}
