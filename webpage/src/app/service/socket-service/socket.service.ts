import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
    
  }

  sendMessage(event: string, message: string) {
    this.socket.emit(event, message);
  }

  getMessage(event: string) {
    return this.socket.fromEvent(event);
  }

}
