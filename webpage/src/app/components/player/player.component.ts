import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChannelService } from 'src/app/service/channel-service/channel.service';
import { SocketService } from 'src/app/service/socket-service/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSliderChange } from '@angular/material/slider';
import { EventEmitter } from '@angular/core';

interface currentsong {
  title: string,
  artist: string
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  isWorking = '';
  mood = '';
  url = 'for now';

  @Output('change') matsliderchange: EventEmitter<MatSliderChange> = new EventEmitter<MatSliderChange>();
  

  @ViewChild('audioplayer') audioelement: ElementRef<HTMLAudioElement>;

  constructor(
    private ChannelService: ChannelService,
    private SocketService: SocketService,
    private route: ActivatedRoute,
    private router: Router
    ) { 

      this.SocketService.getMessage('songUpdate').subscribe((value: string) => {
        console.log(value)
        this.ChannelService.setChannels(value);
        console.log(this.ChannelService.getChannels());
        this.route.params.subscribe((value) => {
          console.log("test");
          this.mood = value.mood;
          console.log(this.mood);
          let channel_token = this.ChannelService.getChannels()[this.mood];
          this.url = `http://localhost:8001/live/${channel_token}/index.mpd`;
          console.log(this.url);
        })
      });

      this.matsliderchange.subscribe((value: MatSliderChange) => {
        this.audioelement.nativeElement.volume = value.value;
      })
    }

  ngOnInit(): void {
    this.SocketService.sendMessage('getSong', '');
  }

  toggleSong() {
    let playing = !this.audioelement.nativeElement.muted;
    if(playing) {
      this.audioelement.nativeElement.muted = true;
    } else {
      this.audioelement.nativeElement.play();
      this.audioelement.nativeElement.muted = false;
    }
    console.log(!playing);
  }

}
