import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// @NgModule({
//   imports: [
//     HttpClient,
//     HttpClientModule,
//   ]
// })

@Injectable({
  providedIn: 'root'
})
export class ExpressService {
  APIURL = 'http://e130-183-88-56-193.ngrok.io'
  constructor(
    private http: HttpClient,
  ) { }

  getChannelByMood(mood: string): Promise<any> {
    console.log("I'm feeling: " + mood);
    return this.http.get(this.APIURL + '/track/channels/' + mood).toPromise();
  }

  check(): Promise<any> {
    return this.http.get(this.APIURL).toPromise();
  }

  getMoods(): Promise<any> {
    return this.http.get(this.APIURL + '/channels').toPromise();
  }
}
