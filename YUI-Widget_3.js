/**
 * Documentation URLS: http://developer.yahoo.com/yui/3/widget/#creatingwidgets
 *                     http://developer.yahoo.com/yui/3/widget/assets/mywidget.js.txt
 */


YUI.add("widgetName", function(Y) {

    var variable = "variable value";

    function WidgetName(config) {
        WidgetName.superclass.constructor.apply(this, arguments);
    }

    WidgetName.NAME = "widgetName";

    WidgetName.ATTRS = {
        attrA : {
            value: "A"
        }
    };

    WidgetName.MYNODE_TEMPLATE = "<div id={mynodeid}></div>";

    Y.extend(WidgetName, Y.Widget, {

        initializer: function() {
             this.publish("myEvent", {
                defaultFn: this._defMyEventFn,
                bubbles:false
             });
        },

        destructor : function() {

        },

        renderUI : function() {

        },

        bindUI : function() {

        },

        syncUI : function() {

        },

        _privateFunction : function() {

        }
    });

    Y.namespace("MyApp").WidgetName = WidgetName;

}, "3.1.0", {requires:["widget", "substitute"]});

