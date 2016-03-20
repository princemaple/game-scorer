import {Component} from 'angular2/core';
import {TeamComponent} from '../team/team';

@Component({
  selector: 'scorer',
  templateUrl: 'app/components/scorer/scorer.html',
  directives: [TeamComponent]
})
export class AppComponent {
}
