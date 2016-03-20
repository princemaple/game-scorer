import {Player} from './player';

export class Score {
  when: Date;

  constructor(
    public player: Player,
    public points: number
  ) {
    this.when = new Date();
  }
}
