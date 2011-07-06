/**
 * Copyright (c) 2011 DevPatch (http://www.devpatch.com)
 * Licensed under the GPL license
 *
 * Date: 7/6/11
 * Time: 10:30 AM
 *
 * Documentation URLS: http://dojotoolkit.org/reference-guide/quickstart/writingWidgets.html
 *                     http://dojotoolkit.org/documentation/tutorials/1.6/understanding_widget/
 *                     http://dojotoolkit.org/documentation/tutorials/1.6/templated/
 *                     
 *
 */

dojo.provide('ui.widgetName');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

dojo.declare('ui.widgetName', [dijit._Widget, dijit._Templated], {
    variable: 'variable value',

    templateString: dojo.cache('ui.widgetName', 'templates/a-template.html'),
    baseClass: 'widgetName',

    postCreate: function(){

    },

    publicFunction: function() {

    },

    _privateFunction: function() {

    }
});
