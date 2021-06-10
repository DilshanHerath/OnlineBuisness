import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from 'ngx-alerts';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();

    }, 1000);
  }


  category(clothesType: any) {

    if (clothesType === 'dress') {
      this.alertService.success('dress');
      this.router.navigate(['/dress']);
    }
    if (clothesType === 'tops') {
      this.alertService.success('tops');
      this.router.navigate(['/tops']);
    }
    if (clothesType === 'tshirts') {
      this.alertService.success('tshirts');
      this.router.navigate(['/tshirts']);
    }
    if (clothesType === 'office') {
      this.alertService.success('office');
      this.router.navigate(['/office']);
    }


  }

  login() {
    this.router.navigateByUrl('/login');
  }

  dress() {
    this.router.navigate(['/dress']);
  }

  office() {
    this.router.navigate(['/office']);
  }

  tshirt() {
    this.router.navigate(['/tshirts']);
  }
}
