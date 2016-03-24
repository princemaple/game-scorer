import {Component, Input} from 'angular2/core';

import {TeamComponent} from '../team/team';

import {Player} from '../../services/player';

@Component({
  selector: 'bench',
  templateUrl: 'app/components/bench/bench.html',
  host: {
    class: 'bench',
    '[class.open]': 'isOpen'
  }
})
export class BenchComponent {
  players: Player[] = [];
  newPlayerName: string;

  isOpen = true;

  @Input() leftTeam: TeamComponent;
  @Input() rightTeam: TeamComponent;

  toggle(newPlayerInput) {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      newPlayerInput.focus();
    }
  }

  assign(team: TeamComponent, player) {
    if (team.addPlayer(player)) {
      this.players = this.players.filter(p => p != player);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.newPlayerName) { return; }

    this.addPlayer(this.newPlayerName);
    this.newPlayerName = '';
  }

  addPlayer(name: string) {
    this.players.push(new Player(name));
  }
}
