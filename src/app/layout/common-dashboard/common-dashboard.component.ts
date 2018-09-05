import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-common-dashboard',
  templateUrl: './common-dashboard.component.html',
  styleUrls: ['./common-dashboard.component.css']
})
export class CommonDashboardComponent implements OnInit {

  userData: any;
  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    this.userData = this._storageService.getUserData();
  }
}
