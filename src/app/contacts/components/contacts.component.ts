import {ContactService} from "../services/contact.service";
import {Contact} from "../models/contact.model";
import {Component} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by Hiren on 11-12-2016.
 */

@Component({
  selector:'contacts',
  templateUrl:'./contacts.component.html',
  styleUrls:['./contacts.component.css']
})
export class ContactsComponent{
  contacts:Contact[];
  constructor(private contactService:ContactService,private router:Router){
    this.contacts =  this.contactService.getContacts();
  }

  onEditClick(contact:Contact){
    //this.router.navigate(['edit',contact.uniqueId]);
  }

  onDeleteClick(contact:Contact){
    let sure = confirm("Are you sure you want to delete this contact?");
    if(sure)
      this.contactService.removeContact(contact);
  }

}
