import {Component, Inject, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) {
    this.getDataFromDouban();
  }

  ngOnInit() {
  }

  getDataFromDouban() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', 'application/json');
    let params = new URLSearchParams(); // get
    // params.set('id', '123');
    let options = new RequestOptions({headers: headers, search: params});
    this.http.get('http://api.douban.com/v2/movie/coming_soon', options).toPromise().then((resp) => {
      console.log(resp.json());
    }, (err) => {
      console.log(err);
    });
  }

  postDataToDouban() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({id: 123}); // post
    this.http.post('', body, options).toPromise().then((resp) => {
      console.log(resp.json());
    }, (err) => {
      console.log(err);
    });
  }

}
