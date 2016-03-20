System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Score;
    return {
        setters:[],
        execute: function() {
            Score = (function () {
                function Score(points, when) {
                    this.points = points;
                    this.when = when;
                }
                return Score;
            }());
            exports_1("Score", Score);
        }
    }
});
//# sourceMappingURL=score.js.map