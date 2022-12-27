export class Card{
  person:String
  object:String
  action:String
  hard:String
  everyone:String
  constructor(person:String,object:String,action:String,hard:String,everyone:String){
    this.person = person
    this.object = object
    this.action = action
    this.hard = hard
    this.everyone = everyone
  }
}

export const data:Card[]=[
  new Card("Venado","Cinta Metrica","Abollar","Muchacho","Estampilla"),
  new Card("Montevideo","Juego de damas","Transportar","Tormenta","Registrar")
]
