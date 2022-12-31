import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from 'src/app/data/cards';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  @Output() player:EventEmitter<Player> = new EventEmitter<Player>
  @Output() cancel:EventEmitter<boolean> = new EventEmitter<boolean>

  icons = ['icon1.jpg','icon2.jpg','icon3.jpg','icon_mario.webp','yoshi.webp','luigi.webp','wario.webp','waluigi.webp','bowser.webp','toad.webp','toadette.webp','toad_green.webp','toad_yellow.webp']
  iconSelected:String = 'icon1.jpg'
  name:String ='Gonzalo'

  selectImage(icon:String){
    this.iconSelected = icon
  }
  onSave(){
    this.player.emit(new Player(this.name,this.iconSelected))
  }
  onCancel(){
    this.cancel.emit()
  }

}
