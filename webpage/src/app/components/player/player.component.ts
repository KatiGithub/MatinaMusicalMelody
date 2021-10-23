import { Component, OnInit, ViewChild } from '@angular/core';
import { ChannelService } from 'src/app/service/channel-service/channel.service';
import { SocketService } from 'src/app/service/socket-service/socket.service';
import { ActivatedRoute } from '@angular/router';

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
  url = '';

  // @ViewChild('audioplayer') audioelement: HTMLMediaElement;

  constructor(
    private ChannelService: ChannelService,
    private SocketService: SocketService,
    private route: ActivatedRoute
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
      })
    }

  ngOnInit(): void {
    this.SocketService.sendMessage('getSong', '');
  }

}
