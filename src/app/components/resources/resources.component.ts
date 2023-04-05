import { Component, OnInit } from '@angular/core';
import { IResources } from 'src/app/models/interface';
import { ResourcesService } from 'src/app/service/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  resources: IResources[];

  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.getResources();
  }

  getResources() {
    this.resourcesService.getResources().subscribe((res) => {
      this.resources = res.data;
    });
  }
}
