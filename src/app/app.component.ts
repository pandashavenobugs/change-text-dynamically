import { Component } from '@angular/core';
//https://stackoverflow.com/questions/49280975/angular-how-to-apply-ngstyle-conditions/49281178
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'text-properties-test';
  x = 20;
  system = {
    'background-color': 'red',
    'font-weight': 'bold',
    'font-size': '50px',
    'text-align': 'center',
    'width': '80px',
    'height': '100px',
  };
}
