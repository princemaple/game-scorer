import {Component} from 'angular2/core';
import {TeamComponent} from '../team/team';

let colors = [
  'red',
  'green',
  'blue',
  'orange',
  'pink',
  'purple',
  'cyan',
  'yellow'
];

@Component({
  selector: 'scorer',
  templateUrl: 'app/components/scorer/scorer.html',
  directives: [TeamComponent]
})
export class AppComponent {
  leftColor = colors[0];
  rightColor = colors[1];
  colors = colors;
  picking = true;

  pick(team, color) {
    team.color = color;
  }
}
