angular.module('app', ['ngAnimate', 'ngMaterial'])
.value('colors', [
  'red',
  'green',
  'blue',
  'orange',
  'pink',
  'purple',
  'cyan',
  'yellow'
])
.component('scorer', {
  template: require('html!./scorer.html'),
  controller(colors) {
    this.colors = colors;
    this.leftColor = colors[0];
    this.rightColor = colors[1];

    this.picking = '<';

    this.pick = (color) => {
      if (this.picking == '<') {
        this.leftColor = color;
        this.picking = '>';
      } else if (this.picking == '>') {
        this.rightColor = color;
        this.picking = null;
      }
    };
  }
})
.component('score', {
  bindings: {
    points: '@',
    color: '<'
  },
  template: require('html!./score.html'),
  controller() {
    this.score = parseInt(this.score, 10) || 0;

    this.up = (points) => {
      this.score += points;
    };

    this.down = (points) => {
      this.score -= points;
      if (this.score < 0) { this.score = 0; }
    };
  }
});
