import {Component, Input} from 'angular2/core';

@Component({
  selector: 'team',
  templateUrl: 'app/components/team/team.html'
})
export class TeamComponent {
  @Input() color: string;
  score = 0;

  ngOnInit() {
    alert(this.color);
  }
}
