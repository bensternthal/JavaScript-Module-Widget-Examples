/**
 * Copyright (c) 2011 DevPatch (http://www.devpatch.com)
 * Licensed under the GPL license
 *
 * Date: 7/6/11
 * Time: 9:59 AM
 *
 * Documentation URL: http://wiki.jqueryui.com/w/page/12138135/Widget-factory
 *
 */


(function($) {

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
    
})(jQuery);