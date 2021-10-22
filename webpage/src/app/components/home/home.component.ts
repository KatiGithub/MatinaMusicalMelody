import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  mood_formcontrol = new FormControl();

  ngOnInit(): void {
  }

  submitMood(){
    let mood = this.mood_formcontrol.value;
    
  }
}
