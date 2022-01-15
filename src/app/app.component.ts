import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    section {
    width: 100%;
    background-color: #32435b;
    }
    h1{
    Color : #ffffff;
    }`,
    `.description{
    Font-style: italic ;
    Color : #ffffff;
    }
    `
  ]
})
export class AppComponent {
 title = 'training-app';
 nbpart: number =0;
 firstSession={
   id:1,
   name:'FormationWeb',
   track:'MEAN Stack',
   date: new Date('aaaaaaaa'),
   duree: 3,
   local:'lborj',
   participants: 0
 };
 nbrParticipantsChange(event: any)
 {
   this.nbpart= event.value;
 }
}
