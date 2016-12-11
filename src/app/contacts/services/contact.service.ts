/**
 * Created by Hiren on 11-12-2016.
 */

import {Injectable} from "@angular/core";
import {Contact} from "../models/contact.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Address} from "../models/address.model";
@Injectable()
export class ContactService {

  contacts:Contact[];

  selectedContact:Contact;

  constructor(private http:Http) {
    this.contacts = [
      {
        uniqueId: "001",
        fName: "Hiren",
        mName: "N",
        lName: "Parekh",
        email: "hiren@parekh.com",
        mobile: "9712046538",
        gender: 1,
        dob: new Date("6 Feb 1993"),
        anniversary: null,
        address: new Address()
      },
      {
        uniqueId: "002",
        fName: "Swapnil",
        mName: "V",
        lName: "Parekh",
        email: "swapnil@parekh.com",
        mobile: "9865321470",
        gender: 1,
        dob: new Date("25 Jan 1993"),
        anniversary: null,
        address: new Address()
      },
      {
        uniqueId: "003",
        fName: "Pathik",
        mName: "M",
        lName: "Chaudhry",
        email: "pathik@Chaudhry.com",
        mobile: "9913015285",
        gender: 1,
        dob: new Date("22 Nov 1992"),
        anniversary: null,
        address: new Address()
      }];
  }

  getContacts():Contact[] {
    return this.contacts;
  }

  addContact(contact:Contact) {
    console.log(contact);
    this.contacts.push(contact);
  }

  updateContact(contact:Contact){
    for(let i =0 ;i<this.contacts.length;i++){
      if(contact.uniqueId == this.contacts[i].uniqueId){
        this.contacts.splice(i,1,contact);
        return;
      }
    }
  }

  getContactById(id:string):Contact {
    let searchContact:Contact;
    this.contacts.forEach(contact => {
      if (contact.uniqueId == id) {
        searchContact = contact;
        return;
      }
    });
    return searchContact;
  }

  removeContact(contact:Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

  getCountries():Observable<any> {
    return this.http.get("/assets/countriesToCities.json")
      .map((response:Response) => response.json())
  }
}
