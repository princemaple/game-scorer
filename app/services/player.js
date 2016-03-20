System.register(['./score'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var score_1;
    var Player;
    return {
        setters:[
            function (score_1_1) {
                score_1 = score_1_1;
            }],
        execute: function() {
            Player = (function () {
                function Player(name) {
                    this.name = name;
                    this.scores = [];
                }
                Player.prototype.addScore = function (points) {
                    this.scores.push(new score_1.Score(points, new Date()));
                };
                Object.defineProperty(Player.prototype, "score", {
                    get: function () {
                        return this.scores.reduce(function (points, score) { return points + score.points; }, 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                return Player;
            }());
            exports_1("Player", Player);
        }
    }
});
//# sourceMappingURL=player.js.map