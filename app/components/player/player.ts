import {Component, Input} from 'angular2/core';

import {Player} from '../../services/player';

@Component({
  selector: 'player',
  templateUrl: 'app/components/player/player.html',
  host: {
    class: 'player'
  }
})
export class PlayerComponent {
  @Input() player: Player;
}
