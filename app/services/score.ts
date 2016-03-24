import {Player} from './player';

export class Score {
  when: Date;
  color: string;
  side: string;

  constructor(
    public player: Player,
    public points: number
  ) {
    this.when = new Date();
  }
}
