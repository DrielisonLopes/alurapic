import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AluraPic';

  photos = [
    {
      url:'https://yt3.ggpht.com/xqhIoXspeX7eqouJvNHl1xqpv9213Pl26ENZbuouXxO2RlDadjsveNXfgnj8GTUk7thFYUkVRg=s900-c-k-c0x00ffffff-no-rj',
      description:'logo'
    },
    {
      url:'https://www.alura.com.br/assets/img/alura-share.1647533642.png',
      description:'logo frase'
    }
  ];

}