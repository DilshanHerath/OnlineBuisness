import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineBusiness';

  locationIs: any;

  constructor(private activatedRouter: ActivatedRoute, public router: Router, private location: Location) {
    // @ts-ignore
    // console.log(this.location._platformLocation.location.pathname.split('/')[1]);
    // // @ts-ignore
    this.locationIs = router.url;
    console.log(router.url);
    // @ts-ignore
    console.log(this.location._platformLocation.location.pathname);
    console.log(this.location);

  }
}


