/**
 * Documentation URLS: http://groups.google.com/group/requirejs/browse_thread/thread/30b54c08a6d41c33/d40e73e3ea8cb54d
 *                     http://requirejs.org/docs/jquery.html
 *                     http://wiki.jqueryui.com/w/page/12138135/Widget-factory
 */


define("ui.myWidget", ["jquery","jquery-ui-1.8.7.custom.min", "otherDependency"], function ($, otherDependency) {

    $.widget("ui.widgetName", {
        options: {

        },

        _create: function() {

        },

        _setOption: function(key, value) {
            switch( key ) {
                case "clear":
                    break;
            }

            $.Widget.prototype._setOption.apply(this,arguments)
        },

        destroy: function() {
            $.Widget.prototype.destroy.apply(this, arguments);
        },

        publicFunction: function() {

        },

        _privateFunction: function() {

        }
    });
    
});