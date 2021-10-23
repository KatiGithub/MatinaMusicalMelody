import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpressService } from 'src/app/service/express.service';

class Mood {
  constructor(public value: string) {}
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private express: ExpressService
  ) { }

  mood_formcontrol = new FormControl();
  moods = []
  

  ngOnInit(): void {
    this.express.getMoods().then((value: []) => {
      value.forEach((value) => {
        this.moods.push({value: value});
      })

      console.log(this.moods);
    })
  }

  submitMood(){
    let mood = this.mood_formcontrol.value;
    // let channelID;
    // console.log(mood);
    // // this.express.check()
    // //   .then((value)=> {
    // //     console.log(value);
    // //   })
    // //   .catch((err) => 
    // //   console.log(err))
    // //   ;
    // this.express.getChannelByMood(mood)
    //   .then((value) => {
    //     console.log(value);
    //     channelID = value.json().results;
    //   })
    //   .catch((err) => {
    //     console.log('error here!!!');
    //     console.log(err);
    //   });
    // console.log(channelID);
    // // this.router.navigate(['channel/' + channelID]);

    this.router.navigate(['player/' + mood])
  }
}