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
  APIURL = 'http://localhost:3000'
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
}
