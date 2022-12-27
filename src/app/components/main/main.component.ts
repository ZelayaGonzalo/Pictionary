import { Component, OnInit } from '@angular/core';
import { Card,data } from 'src/app/data/cards';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cards:Card[] = data
  currentCard:Card = <Card>{}

  constructor() { }

  ngOnInit(): void {
    console.log(data)
    this.currentCard = this.cards[0]
  }

}
