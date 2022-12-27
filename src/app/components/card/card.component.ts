import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/data/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card:Card =<Card>{}

  constructor() { }

  ngOnInit(): void {
  }

}
