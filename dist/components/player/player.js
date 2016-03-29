System.register(['angular2/core', '../../services/player', '../../services/score'], function(exports_1, context_1) {
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
    var core_1, player_1, score_1;
    var PlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            },
            function (score_1_1) {
                score_1 = score_1_1;
            }],
        execute: function() {
            PlayerComponent = (function () {
                function PlayerComponent() {
                    this.action = false;
                    this.rest = new core_1.EventEmitter();
                    this.score = new core_1.EventEmitter();
                }
                PlayerComponent.prototype.toggle = function () {
                    this.action = !this.action;
                };
                PlayerComponent.prototype.addScore = function (points) {
                    var score = new score_1.Score(this.player, points);
                    this.player.scores.push(score);
                    this.score.emit(score);
                };
                PlayerComponent.prototype.goRest = function () {
                    this.rest.emit({});
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', player_1.Player)
                ], PlayerComponent.prototype, "player", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PlayerComponent.prototype, "rest", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PlayerComponent.prototype, "score", void 0);
                __decorate([
                    core_1.HostListener('click'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], PlayerComponent.prototype, "toggle", null);
                PlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'player',
                        templateUrl: 'app/components/player/player.html',
                        host: {
                            class: 'player'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayerComponent);
                return PlayerComponent;
            }());
            exports_1("PlayerComponent", PlayerComponent);
        }
    }
});
//# sourceMappingURL=player.js.map