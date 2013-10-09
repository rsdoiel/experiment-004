/**
 * storage_test.js - test the storage.js module.
 */
/*jslint browser: true, indent: 4 */
(function (global) {
    "use strict";
    var test_storage = document.getElementById("storage-test-results");

    function print(elem, msg) {
        elem.textContent += msg + "\n";
    }

    function storageTests() {
        var storage = global.storage,
            keys,
            i = 0,
            l = 0;

        print(test_storage, "Starting storage tests");
        if (typeof storage === "object") {
            print(test_storage, "OK, storage object found");
        } else {
            print(test_storage, "ERROR: storage object missing");
            return;
        }
        if (typeof storage.keys === 'function') {
            print(test_storage, "OK, storage.keys() found");
        } else {
            print(test_storage, "ERROR: storage.keys() missing");
            return;
        }
        if (typeof storage.stored === 'function') {
            print(test_storage, "OK, storage.stored() found");
        } else {
            print(test_storage, "ERROR: storage.stored() missing");
            return;
        }
        if (typeof storage.save === 'function') {
            print(test_storage, "OK, storage.save() found");
        } else {
            print(test_storage, "ERROR: storage.save() missing");
            return;
        }
        if (typeof storage.remove === 'function') {
            print(test_storage, "OK, storage.remove() found");
        } else {
            print(test_storage, "ERROR: storage.remove() missing");
            return;
        }
        if (typeof storage.find === 'function') {
            print(test_storage, "OK, storage.find() found");
        } else {
            print(test_storage, "ERROR: storage.find() missing");
            return;
        }

        keys = storage.keys();
        if (Array.isArray(keys) === true) {
            print(test_storage, "OK, storage.keys() returns an array object.");
        } else {
            print(test_storage,
                  "ERROR: storage.keys() returned " + typeof keys);
            return;
        }
        for (i = 0, l = keys.length; i < l; i += 1) {
            if (typeof keys[i] !== "string") {
                print(test_storage, "ERROR: keys[" + i + "] should be string" +
                      JSON.stringify(keys, null, 2));
                return;
            }
        }
    }

    storageTests();
}(this));
