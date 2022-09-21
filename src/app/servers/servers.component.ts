import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverCreationStatus: string = 'No Server is Created!';

  constructor() { 
    setTimeout(() => {
        this.allowAddServer = true;
    }, 2000)
   }

   onAddServer () {
    this.serverCreationStatus = 'New Server is Created!'
   }

  ngOnInit(): void {
  }

}
