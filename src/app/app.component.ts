import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isAuth:boolean=false
appareilList=[
  {name:'machine alaver', statut:'Eteindre' },
  {name:'Tv', statut:'Allumer' },
  {name:'pc', statut:'Eteindre' },
  {name:'Climatiseur', statut:'Allumer' }

]
constructor(){
  setTimeout(()=>{
    this.isAuth=!this.isAuth;
  },4000);
  
}
onAllumer(){
  console.log("Bouton Allumer tout clicked!!!")
}
}
