import {Component, Input} from 'angular2/core';

import {TeamComponent} from '../team/team';

import {Player} from '../../services/player';
import {Score} from '../../services/score';

@Component({
  selector: 'team-stats',
  templateUrl: 'app/components/stats/team-stats.html',
  host: {
    class: 'team-stats'
  }
})
class TeamStatsComponent {
  @Input() scores: Score[];

  get scoreByPlayers() {
    let scoreByPlayerMap = this.scores.reduce((dict, score) => {
      let playerName = score.player.name;

      if (!dict[playerName]) {
        dict[playerName] = 0;
      }

      dict[playerName] += score.points;

      return dict;
    }, {});

    let scoreByPlayers = []

    for (let player in scoreByPlayerMap) {
      scoreByPlayers.push({ player: player, score: scoreByPlayerMap[player] });
    }

    return scoreByPlayers;
  }
}

@Component({
  selector: 'stats',
  templateUrl: 'app/components/stats/stats.html',
  directives: [TeamStatsComponent],
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

  get scoreHistory() {
    let leftColor = this.leftTeam.color;
    let rightColor = this.rightTeam.color;

    let leftScores = this.leftTeam.scores.map(s => {
      s.color = leftColor;
      s.side = 'left';
      return s;
    });

    let rightScores = this.rightTeam.scores.map(s => {
      s.color = rightColor;
      s.side = 'right';
      return s;
    });

    return leftScores.concat(rightScores).sort(
      (s1, s2) => s1.when < s2.when ? -1 : 1
    );
  }
}
