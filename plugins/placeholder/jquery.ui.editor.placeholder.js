/**
 * @fileOverview Placeholder text component
 * @author David Neilson david@panmedia.co.nz
 * @author Michael Robinson mike@panmedia.co.nz
 */

$.ui.editor.registerPlugin('placeholder', /** @lends $.editor.plugin.placeholder.prototype */ {
    
    /**
     * @see $.ui.editor.defaultPlugin#init
     */
    init: function(editor, options) {
        var plugin = this;
        
        /**
        * Plugin option defaults
        * @type {Object}
        */
        options = $.extend({}, {
            /**
             * Content to insert into an editable element if said element is empty on initialisation
             * @default Placeholder content
             * @type {String}
             */
            content: 'Placeholder content',

            /**
             * Tag to wrap content
             * @default p
             * @type {String}
             */
            contentTag: 'p',
            
            /**
             * Select content on insertion
             * @default true
             * @type {Boolean} False to prevent automatic selection of inserted placeholder
             */
            selectContent: true
        }, options);

        /**
         * Show the click to edit message
         */
        this.show = function() {
            if (!editor.getElement().html()) {
                
                var content = $(document.createElement(options.contentTag)).html(options.content);
                editor.getElement().html(content);

                if (options.selectContent) {
                    editor.selectInner(content);
                }
            }
        };

        editor.bind('show', plugin.show);
    }
});