import {Component, Input} from 'angular2/core';

import {TeamComponent} from '../team/team';

@Component({
  selector: 'stats',
  templateUrl: 'app/components/stats/stats.html',
  host: {
    class: 'stats',
    '[class.open]': 'isOpen'
  }
})
export class StatsComponent {
  isOpen = false;

  @Input() leftTeam: TeamComponent;
  @Input() rightTeam: TeamComponent;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
