import {Component, Input} from 'angular2/core';

import {PlayerComponent} from '../player/player';
import {BenchComponent} from '../bench/bench';

import {Player} from '../../services/player';
import {Score} from '../../services/score';

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
  selector: 'team',
  templateUrl: 'app/components/team/team.html',
  directives: [PlayerComponent],
  host: {
    class: 'team',
    '[style.backgroundColor]': 'color',
    '[style.flex]': '1'
  }
})
export class TeamComponent {
  colors = colors;
  color: string;
  players: Set<Player> = new Set<Player>();
  scores: Score[] = [];

  @Input() playerLimit: number;
  @Input() bench: BenchComponent;

  get score() {
    return this.scores.reduce((points, score) => points + score.points, 0);
  }

  pickColor(color:string) {
    this.color = color;
  }

  addPlayer(player:Player) : Boolean {
    if (this.players.size >= this.playerLimit) {
      return false;
    }

    this.players.add(player);
    return true;
  }

  removePlayer(player:Player) : Boolean {
    if (this.players.has(player)) {
      this.bench.players.push(player);
      this.players.delete(player);
      return true;
    }
    return false;
  }

  addScore(score: Score) {
    this.scores.push(score);
  }
}
