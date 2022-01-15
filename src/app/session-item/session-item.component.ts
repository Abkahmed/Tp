import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  //name='formation Web';
  alignement='right';
  couleur='red';
  @Input() session!: any;
  @Output() !participantChange = new EventEmitter<any>();

  inscrire() {
    console.log('Nouvelle Inscription..');
    this.session.name='L3AAASBA';
    this.session.participants= +this.session.participants +1;
    console.log(this.session.participants + ' Participants');
    this.participantChange.emit({
      value: this.session.participants
    });
    if(this.session.participants >= 20) {
      this.session.isCompleted= true;
    }
  }



  constructor() { }

  ngOnInit(): void {
  }
  
}
