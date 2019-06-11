import { Component, OnInit } from '@angular/core';
import { Box } from './boxes.model';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  boxes: Box[];

  constructor(private serviceService: ServiceService ) {}

  ngOnInit() {
     this.boxes = this.serviceService.getAllBoxes();
  }
}
