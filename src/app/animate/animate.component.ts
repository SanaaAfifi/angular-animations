import { Component, OnInit , Input} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations : [trigger ('rotate', [
    state('state1' , style({ 
      backgroundColor:'green',
      transform: 'scale(1)' })),
      state('state2' , style({ 
       transform : 'rotate(-75deg)',
        'transition-timing-function':'ease-in-out',
        'transition-duration': '0.6'}
        )),
        transition('*=>state1',animate('300ms')),
        transition('*=>state2' ,animate('3000ms ease-in-out'))
  ])]
})
export class AnimateComponent implements OnInit {

  @Input () currentState;
  constructor() { }

  ngOnInit() {
  }

}
