import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/core/service/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent implements OnInit {
  packagesArray: any[] = [];

  constructor(private packageService: PackagesService) {}

  ngOnInit(): void {
    this.getAllPackages();
  }

  getAllPackages() {
    this.packageService.getAllPackages().subscribe((data: any) => {
      console.log('===data', data);

      this.packagesArray = data.data;
    });
  }
}
