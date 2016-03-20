System.register(['angular2/core', '../team/team'], function(exports_1, context_1) {
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
    var core_1, team_1;
    var StatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            }],
        execute: function() {
            StatsComponent = (function () {
                function StatsComponent() {
                    this.isOpen = false;
                }
                StatsComponent.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', team_1.TeamComponent)
                ], StatsComponent.prototype, "leftTeam", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', team_1.TeamComponent)
                ], StatsComponent.prototype, "rightTeam", void 0);
                StatsComponent = __decorate([
                    core_1.Component({
                        selector: 'stats',
                        templateUrl: 'app/components/stats/stats.html',
                        host: {
                            class: 'stats',
                            '[class.open]': 'isOpen'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], StatsComponent);
                return StatsComponent;
            }());
            exports_1("StatsComponent", StatsComponent);
        }
    }
});
//# sourceMappingURL=stats.js.map