import { Component } from '@angular/core';
import { faDice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.scss']
})
export class FastComponent {

  diceIcon = faDice
  showRandomCard = false


  showRandomCardWindow(){
    this.showRandomCard = true
  }
  hideRandomCard(){
    this.showRandomCard = false
  }

}
