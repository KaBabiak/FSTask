import { Component, ElementRef, OnInit } from '@angular/core';
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

  constructor(private api: ApiService, private elementRef: ElementRef) {}

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

  searchDescription(): void {
    this.viewedData = this.response;
    const input = this.elementRef.nativeElement.querySelector('#search');

    let searched: Data[] = [];
    for (let i = 0; i < this.response.length; i++) {
      if (
        this.response[i].description
          .toLowerCase()
          .includes(input.value.toLowerCase())
      ) {
        searched.push(this.viewedData[i]);
      }
    }
    this.viewedData = searched;
  }
}
