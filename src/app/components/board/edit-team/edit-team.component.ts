import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/data/cards';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit{
  @Output() teamOutput:EventEmitter<Team> = new EventEmitter<Team>
  @Output() cancel:EventEmitter<boolean> = new EventEmitter<boolean>
  @Input() editTeam:Team = <Team>{}

  COLORS = ['#6B0F1A','#1E3888','#DDA448','#4C6663','#F24C00','#2a2e32']
  name:String = ''

  ngOnInit(): void {
    this.name = this.editTeam.name
  }

  selectColor(color:String){
    this.editTeam.color = color
  }
  onSave(){
    this.editTeam.name = this.name
    this.teamOutput.emit(this.editTeam)
  }
  onCancel(){
    this.cancel.emit()
  }


}
