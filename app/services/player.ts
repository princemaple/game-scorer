import {Score} from './score';

export class Player {
  scores: Score[] = [];

  constructor(public name:string) {}

  get score() {
    return this.scores.reduce((points, score) => points + score.points, 0);
  }
}
