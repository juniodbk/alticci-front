import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 0;
  response: number = 0;
  errorMsg: string = "";

  constructor(private http: HttpClient) { }

  callws(value: string) {
    this.http.get<number>(`http://localhost:8080/alticci/${value}`)
      .subscribe({
        next: (x: number) =>{
          this.response = x;
          this.errorMsg = "";
        },
        error: (err: any) => this.errorMsg = err.error,
        complete: () => {},
      });
  }
}
