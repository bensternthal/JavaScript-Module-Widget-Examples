/**
 * Documentation URLS: BOOK - Javascript Patterns 2010, Page 97-99 
 */


/* Namespace Pattern */
var NAMESPACE = (function(namespace) {
    return carrier;
}( NAMESPACE || {} ));


NAMESPACE.module = (function() {
    var variable = 'variable value',

    publicFunction = function() {

    },

    _privateFunction = function() {

    };

    return {
        publicFunction: publicFunction
    };

}());

