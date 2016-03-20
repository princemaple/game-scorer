import {Component, Input} from 'angular2/core';

import {PlayerComponent} from '../player/player';

import {Player} from '../../services/player';

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
  players: Set<Player>;

  constructor() {
    this.players = new Set<Player>();
  }

  @Input() playerLimit: number;

  get score() {
    return Array.from(this.players.values()).reduce(
      (score, player) => score + player.score,
      0
    );
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
      this.players.delete(player);
      return true;
    }
    return false;
  }
}
