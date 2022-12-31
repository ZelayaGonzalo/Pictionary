import { Component } from '@angular/core';
import { faDice, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Player, Team } from 'src/app/data/cards';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})


export class BoardComponent {



  addIcon = faPlus
  showScores = false
  playIcon = faPlay
  diceIcon = faDice


  players:Player[] = []
  membersPerGroup=2
  targetGoal = 10
  teams:Team[] =[]
  selectedTeam:Team = <Team>{}

  isAddingPlayer = false
  showRandomCard = false
  showTeamEditWindow = false

  constructor(){}

  showAddWindow():void{
    this.isAddingPlayer = true
  }
  closeAddWindow():void{
    this.isAddingPlayer = false
  }

  addPlayer(newPlayer:Player){
    this.players.push(newPlayer)
    this.closeAddWindow()
  }
  startPlaying(){
    this.showScores = true
  }
  createTeams(){
    this.teams = []
    let currentTeam = 0
    let copyArray = [...this.players]
    let newTeam= new Team(currentTeam,'Equipo '+currentTeam,[])
    while(copyArray.length > 0){
      let select = randomIntFromInterval(0,copyArray.length -1)
      console.log(select)
      if(newTeam.members.length < this.membersPerGroup){
        newTeam.members.push(copyArray[select])
        console.log(newTeam)
      }
      else{
        this.teams.push(newTeam)
        currentTeam += 1
        newTeam = new Team(currentTeam,'Equipo '+currentTeam,[])
        newTeam.members.push(copyArray[select])
      }
      if(copyArray.length === 1){
        this.teams.push(newTeam)
      }
      copyArray.splice(select,1)
    }
  }
  showRandomCardWindow(){
    this.showRandomCard = true
  }
  hideRandomCard(){
    this.showRandomCard = false
  }

  editTeam(team:Team){
    this.showTeamEditWindow = true
    this.selectedTeam = team
  }
  closeTeamEdit(teamEdited:Team){
    this.teams[teamEdited.id] = teamEdited
    console.log(teamEdited)
    console.log(this.teams[teamEdited.id])
    this.showTeamEditWindow = false
  }

}

function randomIntFromInterval(min:number, max:number):number { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

