import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  socket:any;
  serverMsg:any = "";
  ngOnInit(){
    //this.socket = io.connect("http://localhost:9192");
    //this.socket.on("serverMsg",data => {this.serverMsg += data})
  }

  sendMsg(msg:string){
    console.log(msg);
    // this.socket.emit("msg",msg);
  }

}
