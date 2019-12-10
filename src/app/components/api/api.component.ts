import { MagicApiService } from './../../services/magic-api.service';
import { Component, OnInit, HostBinding  } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  cards: any = [];
  constructor(private magicApiService: MagicApiService) { }
  
  ngOnInit() {
    this.getCards();
  }
  getCards(){
    this.magicApiService.getCards().subscribe(
      res => {
        this.cards = res;
      },
      err => console.error(err)
    );
  }
}
