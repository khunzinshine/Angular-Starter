import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverCreationStatus: string = 'No Server is Created!';
  serverName: string = 'Init Server';

  constructor() { 
    setTimeout(() => {
        this.allowAddServer = true;
    }, 2000)
   }

   onAddServer () {
    this.serverCreationStatus = 'New Server is Created!'
   }

   onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
   }

  ngOnInit(): void {
  }

}
