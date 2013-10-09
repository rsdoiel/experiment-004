/**
 * storage.js - a simple wrapper round browser storage options.
 * @author R. S. Doiel, <rsdoiel@gmail.com>
 * copyright (c) 2013 all rights reserved
 * Released under the BSD 2-clause license
 * See: http://opensource.org/licenses/BSD-2-Clause
 */
/*jslint browser: true, indent: 4 */
/*global console */
(function (global) {
    "use strict";
    function keys() {
        console.error("keys() not implemented.");
        return false;
    }

    function stored(key) {
        console.error("storage.stored(" + key +
            ") not implemented.");
        return false;
    }

    function save(key, value) {
        console.error("storage.save(" + key + "," +
            JSON.stringify(value, null, 2) +
            ") not implemented.");
        return false;
    }

    function remove(key) {
        console.error("storage.remove(" + key +
            ") not implemented.");
        return false;
    }

    function find(filter) {
        console.error("storage.find(" +
            JSON.stringify(filter, null, 2) +
            ") not implemented.");
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
