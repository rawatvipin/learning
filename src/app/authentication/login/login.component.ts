import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../../shared/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  isSubmiarStatet: boolean = false;
  constructor(private _fb: FormBuilder,
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _storageService: StorageService) { }
  loginForm: FormGroup;
  arState: any = [];
  selectedGender: any;
  arGender: any = [];
  selectedState: any;
  ngOnInit() {
    this.arGender.push({ value: 'M', text: 'Male' }, { value: 'F', text: 'Femal' });
    this.arState.push({ id: 1, name: 'Delhi' });
    this.arState.push({ id: 2, name: 'UP' });
    this.arState.push({ id: 3, name: 'UK' });
    if (this._router.url === '/logout') {
      this._storageService.clearUserData();
      this._router.navigate(['login']);
    } else if (this._storageService.isLoggedIn()) {
      if (this._storageService.isAdmin()) {
        this._router.navigate(['/admin/dashboard']);
      } else {
        this._router.navigate(['/user/dashboard']);
      }
    }

    this.loginForm = this._fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  setState(id) {
    this.selectedState = { id: id };
  }
  changeGender(data) {

  }
  login(data) {
    if (this.loginForm.valid) {
      let returnUrl = this._activateRoute.snapshot.queryParams['returnUrl'] || '';

      if (data.email === 'admin' && data.password === 'admin') {

        if (!returnUrl) {
          returnUrl = 'admin/dashboard';
        }

        this._router.navigateByUrl(returnUrl);
        this._storageService.setUserData(data);
      } else if (data.email === 'rawat' && data.password === 'rawat') {
        if (!returnUrl) {
          returnUrl = 'user/dashboard';
        }

        this._router.navigateByUrl(returnUrl);
        this._storageService.setUserData(data);

      } else {
        alert('Invalid credentials.!');
      }
    }
  }

  logout() {
    this._storageService.clearUserData();
  }
}
