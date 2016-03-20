import {Component} from 'angular2/core';

import {TeamComponent} from '../team/team';
import {BenchComponent} from '../bench/bench';
import {StatsComponent} from '../stats/stats';

@Component({
  selector: 'scorer',
  templateUrl: 'app/components/scorer/scorer.html',
  directives: [TeamComponent, BenchComponent, StatsComponent],
  host: {
    class: 'scorer'
  }
})
export class AppComponent {
}
