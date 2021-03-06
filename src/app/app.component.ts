import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AluraPic';

  photos: Object[] = [];
  constructor(http: HttpClient) {
    
    // const observable = http.get('http://localhost:3000/flavio/photos');
    // observable.subscribe();
    // refatorando para:
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photos = photos,
        err => console.log(err.message)
        );
  }

}