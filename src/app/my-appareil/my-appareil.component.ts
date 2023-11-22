import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-appareil',
  templateUrl: './my-appareil.component.html',
  styleUrls: ['./my-appareil.component.css']
})
export class MyAppareilComponent {
  @Input()
name:string =''

@Input()
status:string=''//etient
getstatus(){
  return this.status;
}
}
