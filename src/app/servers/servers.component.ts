import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = "Test Server";
  username = "";
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  hideInfo = true;
  buttonClicks = [];
  counter = 1;

  constructor () {
    setTimeout (() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer () {
    this.serverCreationStatus = `Server ${this.serverName} was created.`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName (event: Event) {
    this.serverName= (<HTMLInputElement>event.target).value;
  }
  onUpdateUserName (event: Event) {
    this.username= (<HTMLInputElement>event.target).value;
  }
  onDisplayBtnClick () {
    this.hideInfo=!this.hideInfo;
    this.buttonClicks.push(this.counter);
    this.counter++;

  };
}
