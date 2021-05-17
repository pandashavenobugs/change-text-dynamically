import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berat-test',
  templateUrl: './berat-test.component.html',
  styleUrls: ['./berat-test.component.scss'],
})
export class BeratTestComponent implements OnInit {
  text: string = 'aaaa';
  color: string = 'rgb(2,18,48,0.84)';
  fontSize: number;
  fontWeight: number;
  backgroundColor: string = 'white';
  width: number;
  height: number;
  system: any;

  constructor() {}

  ngOnInit(): void {
    this.system = {
      'background-color': this.backgroundColor,
      color: this.color,
      'font-weight': 'bold',
      'font-size': this.fontSize,
      'text-align': 'center',
      width: this.width,
      height: this.height,
    };
  }
  changeTheCss() {
    this.system = {
      'background-color': this.backgroundColor,
      color: this.color,
      'font-weight': 'bold',
      'font-size': this.fontSize + 'px',
      'text-align': 'center',
      width: this.width + 'px',
      height: this.height + 'px',
    };
  }
}
