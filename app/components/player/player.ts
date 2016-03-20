import {Component, Input, Output, HostListener, EventEmitter} from 'angular2/core';

import {TeamComponent} from '../team/team';

import {Player} from '../../services/player';
import {Score} from '../../services/score';

@Component({
  selector: 'player',
  templateUrl: 'app/components/player/player.html',
  host: {
    class: 'player'
  }
})
export class PlayerComponent {
  action = false;

  @Input() player: Player;

  @Output() rest = new EventEmitter();
  @Output() score = new EventEmitter();

  @HostListener('click') toggle() {
    this.action = !this.action;
  }

  addScore(points) {
    let score = new Score(this.player, points);
    this.player.scores.push(score);
    this.score.emit(score);
  }

  goRest() {
    this.rest.emit({});
  }
}
