System.register(['angular2/platform/browser', './components/scorer/scorer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, scorer_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (scorer_1_1) {
                scorer_1 = scorer_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(scorer_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map