import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  show: boolean = false;
  count: any = [];

  onShowDetail() {
    this.show = !this.show;
    this.count.push(new Date());
  }
}
