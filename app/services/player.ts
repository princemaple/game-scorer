import {Score} from './score';

export class Player {
  scores: Score[] = [];

  constructor(public name:string) {}

  addScore(points:number) {
    this.scores.push(new Score(points, new Date()));
  }

  get score() {
    return this.scores.reduce((points, score) => points + score.points, 0);
  }
}
