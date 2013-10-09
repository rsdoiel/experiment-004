/**
 * storage.js - a simple wrapper round browser storage options.
 * @author R. S. Doiel, <rsdoiel@gmail.com>
 * copyright (c) 2013 all rights reserved
 * Released under the BSD 2-clause license
 * See: http://opensource.org/licenses/BSD-2-Clause
 */
/*jslint browser: true, indent: 4 */
(function (global) {
    "use strict";
    function keys() {
        throw "storage.keys() not implemented";
    }

    function stored(key) {
        throw "storage.stored(" + key + ") not implemented.";
    }

    function save(key, value) {
        throw "storage.save(" + key + "," +
            JSON.stringify(value, null, 2) +
            ") not implemented.";
    }

    function remove(key) {
        throw "storage.remove(" + key + ") not implemented.";
    }

    function find(filter) {
        throw "storage.find(" + JSON.stringify(filter, null, 2) +
            ") not implemented.";
    }

    // Export as storage object.
    global.storage = {
        keys: keys,
        stored: stored,
        save: save,
        remove: remove,
        find: find
    };
}(this));
