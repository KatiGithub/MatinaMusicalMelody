import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    console.log("back button");
  }

  changeMood(){
    console.log("changemood button");
  }

  nextChannel(){
    console.log("nextchannel button");
  }

}
