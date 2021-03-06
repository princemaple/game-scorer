System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Player;
    return {
        setters:[],
        execute: function() {
            Player = (function () {
                function Player(name) {
                    this.name = name;
                    this.scores = [];
                }
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