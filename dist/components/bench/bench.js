System.register(['angular2/core', '../team/team', '../../services/player'], function(exports_1, context_1) {
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
    var core_1, team_1, player_1;
    var BenchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            }],
        execute: function() {
            BenchComponent = (function () {
                function BenchComponent() {
                    this.players = [];
                    this.isOpen = true;
                }
                BenchComponent.prototype.toggle = function (newPlayerInput) {
                    this.isOpen = !this.isOpen;
                    if (this.isOpen) {
                        newPlayerInput.focus();
                    }
                };
                BenchComponent.prototype.assign = function (team, player) {
                    if (team.addPlayer(player)) {
                        this.players = this.players.filter(function (p) { return p != player; });
                    }
                };
                BenchComponent.prototype.handleSubmit = function (event) {
                    event.preventDefault();
                    if (!this.newPlayerName) {
                        return;
                    }
                    this.addPlayer(this.newPlayerName);
                    this.newPlayerName = '';
                };
                BenchComponent.prototype.addPlayer = function (name) {
                    this.players.push(new player_1.Player(name));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', team_1.TeamComponent)
                ], BenchComponent.prototype, "leftTeam", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', team_1.TeamComponent)
                ], BenchComponent.prototype, "rightTeam", void 0);
                BenchComponent = __decorate([
                    core_1.Component({
                        selector: 'bench',
                        templateUrl: 'app/components/bench/bench.html',
                        host: {
                            class: 'bench',
                            '[class.open]': 'isOpen'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], BenchComponent);
                return BenchComponent;
            }());
            exports_1("BenchComponent", BenchComponent);
        }
    }
});
//# sourceMappingURL=bench.js.map