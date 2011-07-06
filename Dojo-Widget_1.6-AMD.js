/**
 *  Documentation URLS: http://dojotoolkit.org/features/1.6/async-modules
 *
 */


/* not sure about the duplicate widget name definitions (one for define and one for declare seems odd, need to test) */
define("ui/widgetName", ["dojo", "dijit", "dijit/_Widget", "dijit/_Templated"], function(dojo, dijit) {

dojo.declare('ui.widgetName', null, {
    variable: 'variable value',

    templateString: dojo.cache('ui.widgetName', 'templates/a-template.html'),
    baseClass: 'widgetName',

    constructor: function() {

    },

    postCreate: function(){

    },

    publicFunction: function() {

    },

    _privateFunction: function() {

    }
});

return ui.widgetName;
});

