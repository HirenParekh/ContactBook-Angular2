import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
/**
 * Created by Hiren on 04-12-2016.
 */
@Component({
  selector:'sign-up',
  templateUrl:'sign-up.component.html',
  styleUrls:['sign-up.component.css']
})
export class SignUpComponent{

  constructor(private router:Router){

  }

  onFormSubmit(value,valid){
    if(valid)
    {
      this.router.navigate(["contacts"]);
    }
  }
}
