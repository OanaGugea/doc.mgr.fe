import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginServices {
  private subject = new Subject<any>();
  private serverUrl = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) { }

  sendAuthenticationMessage(email: string, pass: string) {
    if (email === 'admin' && pass === 'adminadmin') {
      this.subject.next();
    }
    // this.sendGetRequest(email, pass);
  }

  getAuthenticatedState(): Observable<any> {
    return this.subject.asObservable();
  }

  private sendGetRequest(email: string, pass: string): void {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(email + ':' + pass),
        'Content-Type': 'application/json',
      }),
    };

    this.http.get(this.serverUrl, httpOptions).subscribe(
      (data) => {
        console.log('Success:', data);
        this.subject.next();
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
