import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../tab3/service.service';
import { Box } from '../tab3/boxes.model';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.page.html',
  styleUrls: ['./box-details.page.scss'],
})
export class BoxDetailsPage implements OnInit {
  loadedBox: Box;

  constructor(private activatedRoute: ActivatedRoute, private servceService: ServiceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('boxId')) {
        // redirect
        return;
      }
      const boxId = paramMap.get('boxId');
      this.loadedBox = this.servceService.getBox(boxId);
    });
  }

}
