import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ENDPOINT = 'https://apiai.medarose.ir/';

  constructor(private httpClient: HttpClient) {
  }

  generateHeader = () => {
    const authHead = {};
    let header = null;
    header = new HttpHeaders(authHead);
    header.append('Content-Type', 'multipart/form-data');
    header.append('Accept', 'application/json');
    return header;
  };

  sendRequest(method = 'POST',
              url = '/',
              body = {},
              ...args: any[]): Observable<any> {

    let headers = this.generateHeader();
    let sendUrl = this.ENDPOINT + url;
    let fullResponse = false;

    args.map(arg => {
      if (arg.headers) {
        headers = arg.headers;
      }

      if (arg.fullResponse) {
        fullResponse = true;
      }

      if (arg.dontConcatEndpoint) {
        sendUrl = url;
      }
    });

    const res$ = this.httpClient.request(method, sendUrl, {
      body,
      headers,
      observe: 'response',
      withCredentials: false
    }).pipe(
      map(res => args.find(arg => arg.completeResponse) ? res : res.body),
      shareReplay()
    );
    res$.subscribe(
      res => {
      },
      err => {
      });
    return res$;
  }
}
