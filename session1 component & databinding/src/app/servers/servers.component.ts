import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serverName = "Test Server"
  disable = false

  ChangeServerName(){
    this.serverName ="Name CHanged";
    this.disable = true;
  }

}
