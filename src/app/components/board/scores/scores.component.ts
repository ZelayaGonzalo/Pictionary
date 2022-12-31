import { Component, Input, OnInit } from '@angular/core';
import { faCircleCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/data/cards';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit{
  @Input() teams:Team[] = []

  plusIcon = faPlus
  minusIcon = faMinus
  checkIcon = faCircleCheck

  ngOnInit(){

  }

  addPoint(teamIndex:number):void{
    this.teams[teamIndex].score += 1
    console.log(this.teams[teamIndex])
  }
  removePoint(teamIndex:number):void{
    if(this.teams[teamIndex].score > 0){
      this.teams[teamIndex].score -= 1
    }
    console.log(this.teams[teamIndex])
  }

  convertToArray(i:number){
    return Array.from(Array(i).keys())
  }
}
