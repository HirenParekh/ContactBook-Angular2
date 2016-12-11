import {Component, OnInit} from "@angular/core";
import {Contact} from "../../models/contact.model";
import {ContactService} from "../../services/contact.service";
import {Router, ActivatedRoute} from "@angular/router";
/**
 * Created by Hiren on 11-12-2016.
 */

@Component({
  selector:'add-contact',
  templateUrl:'./add-contact.component.html',
  styleUrls:['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  contact:Contact;
  countryCityObj:any;
  countryNames:string[] = [];
  cityNames:string[] = [];
  isEditMode:boolean;
  constructor(private contactService:ContactService,private router:Router,private activatedRoute:ActivatedRoute){
    this.contactService.getCountries()
      .subscribe(
        response => {
          this.countryCityObj = response;
          for(let country in this.countryCityObj)
          {
            if(country)
              this.countryNames.push(country);
          }
        },
        error => {
          //error
        },
        () => {
          //Complete
        }
      );
    this.contact = {
      uniqueId:new Date().getTime().toString(),
      fName: "",
      mName: "",
      lName: "",
      email: "",
      mobile: "",
      gender:0,
      dob:null,
      anniversary:null,
      address:{
        address1:"",
        address2:"",
        city:"",
        state:"",
        country:"",
        pincode:""
      }
    }
  }
  onCountrySelected(country:string){
    this.cityNames = this.countryCityObj[country];
  }

  onFormSubmit(value,valid){
    if(valid)
    {
      if(this.isEditMode)
      {
        this.contactService.updateContact(this.contact);
      }else{
        this.contactService.addContact(this.contact);
      }
      this.router.navigate(['contacts']);
    }
  }
  ngOnInit() {
   this.activatedRoute.params.subscribe(
     params =>
     {
       let id:string = params['id'];
       if(id)
       {
         this.contact = this.contactService.getContactById(params['id']);
         this.isEditMode = true;
       }
     });
  }
}
