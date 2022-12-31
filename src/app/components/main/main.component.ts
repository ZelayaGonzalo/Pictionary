import { Component, OnInit } from '@angular/core';
import {  faCircleQuestion, faPlay, faRotate } from '@fortawesome/free-solid-svg-icons';
import { Card,data } from 'src/app/data/cards';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cards:Card[] = data
  currentCard:Card = <Card>{}

  resetIcon = faRotate
  playIcon = faPlay
  question = faCircleQuestion

  audio = new Audio()

  constructor() { }

  ngOnInit(): void {
    this.currentCard = get_random(this.cards)
  }

  onChangeCard():void{
    if(confirm('¿Cambiar carta?')===true)
    this.currentCard = get_random(this.cards)
  }

}

function get_random (list:Card[]) {
  return list[Math.floor((Math.random()*list.length))];
}
