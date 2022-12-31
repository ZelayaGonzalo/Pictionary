import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/data/cards';
import { faBox, faDog, faPeopleGroup, faPersonRunning, faPlay, faRotate, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  boxIcon = faBox
  dogIcon = faDog
  runIcon = faPersonRunning
  warningIcon = faTriangleExclamation
  groupIcon = faPeopleGroup


  @Input() card:Card =<Card>{}

  constructor() { }

  ngOnInit(): void {
  }

}
