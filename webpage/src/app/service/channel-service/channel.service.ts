import { Injectable } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  currentChannels: Object = {};

  constructor(private SocketService: SocketService) { }

  setChannels(channels: Object) {
    this.currentChannels = channels;
  }

  getChannels() {
    return this.currentChannels;
  }

}
