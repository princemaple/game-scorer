import {Component} from 'angular2/core';

import {TeamComponent} from '../team/team';
import {BenchComponent} from '../bench/bench';

@Component({
  selector: 'scorer',
  templateUrl: 'app/components/scorer/scorer.html',
  directives: [TeamComponent, BenchComponent],
  host: {
    class: 'scorer'
  }
})
export class AppComponent {
}
