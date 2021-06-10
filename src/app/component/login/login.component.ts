import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {AlertService} from 'ngx-alerts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();

    }, 1000);
  }

  Login() {
    this.alertService.success('Successfully Login');
    this.router.navigate(['/home']);
  }

  signUp() {
    this.router.navigate(['/signUp']);
  }


}
