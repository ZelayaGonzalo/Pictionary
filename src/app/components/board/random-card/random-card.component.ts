import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBox, faDog, faPersonRunning, faTriangleExclamation, faPeopleGroup, faRunning, faPlay, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DiceFace } from 'src/app/data/cards';
import { interval } from 'rxjs';

const FACES= [
  {name:'Lugar/Animal',color:'#1E3888',icon:faDog},
  {name:'Objeto',color:'#DDA448',icon:faBox},
  {name:'Acción',color:'##F24C00',icon:faRunning},
  {name:'Dificil',color:'#4C6663',icon:faTriangleExclamation},
  {name:'Todos Juegan',color:'#6B0F1A',icon:faPeopleGroup},

]

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.scss']
})
export class RandomCardComponent implements OnInit{

  @Output() close:EventEmitter<boolean> = new EventEmitter

  playIcon = faPlay
  closeIcon = faXmark

  currentFace:DiceFace = FACES[0]

  interval:any
  counter:any

  countDownStarted:boolean = false
  currentTime:number = 60

  ngOnInit(){
    this.start()
    setTimeout(
      ()=>{this.stop()}
     ,2000
    )
  }

  start() {
    this.interval = setInterval(() =>
    {this.currentFace = FACES[randomIntFromInterval(0, 4)]
    }, 100);
  }
   stop() {
    clearInterval(this.interval);
  }

  startCountdown(){
    this.countDownStarted = true
    this.counter = setInterval(()=>{
      this.currentTime =this.currentTime -1
      if (this.currentTime <= 0){
        clearInterval(this.counter);
        //counter ended, do something here
        return;
        }
    }, 1000)
  }

  onCloseWindow(){
    this.close.emit()
  }
}

function randomIntFromInterval(min:number, max:number) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
