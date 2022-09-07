import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService],
})
export class AppComponent implements OnInit {
  title = 'FSCode';

  response: Data[] = [];
  viewedData: Data[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchResponse();
  }

  fetchResponse(): void {
    this.api
      .getResponse()
      .then((value) => {
        this.response = value.data;
        this.viewedData = this.response;
      })
      .catch((err) => {
        throw err;
      });
  }
}
