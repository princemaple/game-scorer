import {Component, Input} from 'angular2/core';
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
  host: {
    '[style.backgroundColor]': 'color',
    '[style.flex]': '1'
  }
})
export class TeamComponent {
  colors = colors;
  color: string;
  players: Player[] = [];

  @Input() playerLimit: number;

  constructor() {
    ['a', 'b', 'c', 'd'].forEach(p => {
      this.addPlayer(new Player(p));
    });
  }

  get score() {
    return this.players.reduce((score, player) => score + player.score, 0);
  }

  pickColor(color:string) {
    this.color = color;
  }

  addPlayer(player:Player) {
    if (this.players.length >= this.playerLimit) {
      return console.error('too many players');
    }

    this.players.push(player);
  }

  swapPlayer(onCourtPlayer:Player, onBenchPlayer:Player) {
    let playerIndex = this.players.findIndex(p => p == onCourtPlayer);

    this.players = [
      ...this.players.slice(0, playerIndex),
      onBenchPlayer,
      ...this.players.slice(playerIndex + 1)
    ];
  }
}
