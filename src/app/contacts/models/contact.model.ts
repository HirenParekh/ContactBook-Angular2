import {Address} from "./address.model";
/**
 * Created by Hiren on 11-12-2016.
 */

export class Contact{

  uniqueId:string;
  fName:string;
  mName?:string;
  lName:string;
  email?:string;
  mobile?:string;
  dob?:Date;
  gender:number;
  anniversary?:Date;
  address?:Address;
}
