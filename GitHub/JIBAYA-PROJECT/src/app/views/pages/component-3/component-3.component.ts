import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from './demo-adapter';

@Component({
  selector: 'app-component-3',
  templateUrl: './component-3.component.html',
  styleUrls: ['./component-3.component.css']
})
export class Component3Component implements OnInit {
  title = 'app';

  public adapter: ChatAdapter = new DemoAdapter();

  //public adapter: ChatAdapter = new DemoAdapterPagedHistory();

  public messageSeen(event: any)
  {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
