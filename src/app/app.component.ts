import { Component, OnInit } from '@angular/core';
import { DesktopCapturer } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'electrontestdemo';

  public ipc: DesktopCapturer
  constructor() {
    if ((<any>window).require) {
       try {
         this.ipc = (<any>window).require('electron').desktopCapturer;
       } catch (e) {
         throw e;
       }
     } else {
     console.warn('App not running inside Electron!');
     }
  }

  ngOnInit() {
    this.ipc.getSources(
      { types: ["screen"] },
      (error, sources) => {
        if (error) throw error;
        console.log("Source : " + sources + " " + sources.length);
        console.log("Name : " + sources[0].name + " " + sources[0].id);
        // if (sources.length <= 1) {
        //   console.log("only one" + sources.length);
        //   this.status = SecreenActivityStatus.oneScreen;
        // } else {
        //   this.status = SecreenActivityStatus.manyScreen;

        for (let i = 0; i < sources.length; ++i) {
          console.log("Name : " + sources[i].name + " " + sources[i].id);
        }

        // }
      }
    );
  }

  checkScreens(){
    this.ipc.getSources(
      { types: ["screen"] },
      (error, sources) => {
        if (error) throw error;
        console.log("Source : " + sources + " " + sources.length);
        console.log("Name : " + sources[0].name + " " + sources[0].id);
        // if (sources.length <= 1) {
        //   console.log("only one" + sources.length);
        //   this.status = SecreenActivityStatus.oneScreen;
        // } else {
        //   this.status = SecreenActivityStatus.manyScreen;

        for (let i = 0; i < sources.length; ++i) {
          console.log("Name : " + sources[i].name + " " + sources[i].id);
        }

        // }
      }
    );
  }
}


