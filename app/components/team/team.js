System.register(['angular2/core', '../../services/player'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, player_1;
    var colors, TeamComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            }],
        execute: function() {
            colors = [
                'red',
                'green',
                'blue',
                'orange',
                'pink',
                'purple',
                'cyan',
                'yellow'
            ];
            TeamComponent = (function () {
                function TeamComponent() {
                    var _this = this;
                    this.colors = colors;
                    this.players = [];
                    ['a', 'b', 'c', 'd'].forEach(function (p) {
                        _this.addPlayer(new player_1.Player(p));
                    });
                }
                Object.defineProperty(TeamComponent.prototype, "score", {
                    get: function () {
                        return this.players.reduce(function (score, player) { return score + player.score; }, 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                TeamComponent.prototype.pickColor = function (color) {
                    this.color = color;
                };
                TeamComponent.prototype.addPlayer = function (player) {
                    if (this.players.length >= this.playerLimit) {
                        return console.error('too many players');
                    }
                    this.players.push(player);
                };
                TeamComponent.prototype.swapPlayer = function (onCourtPlayer, onBenchPlayer) {
                    var playerIndex = this.players.findIndex(function (p) { return p == onCourtPlayer; });
                    this.players = this.players.slice(0, playerIndex).concat([
                        onBenchPlayer
                    ], this.players.slice(playerIndex + 1));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TeamComponent.prototype, "playerLimit", void 0);
                TeamComponent = __decorate([
                    core_1.Component({
                        selector: 'team',
                        templateUrl: 'app/components/team/team.html',
                        host: {
                            '[style.backgroundColor]': 'color',
                            '[style.flex]': '1'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], TeamComponent);
                return TeamComponent;
            }());
            exports_1("TeamComponent", TeamComponent);
        }
    }
});
//# sourceMappingURL=team.js.map