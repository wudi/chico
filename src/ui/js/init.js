    // Remove the no-js classname from html tag
    ch.util.classList(html).remove('no-js');

    // Expose private $ (jQuery) into ch.$
    ch.$ = window.$;

    ch.util.Event.createCustom(ch.onlayoutchange);