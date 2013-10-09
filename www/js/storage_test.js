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
        var storage = global.storage;

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
        if (typeof storage.saved === 'function') {
            print(test_storage, "OK, storage.saved() found");
        } else {
            print(test_storage, "ERROR: storage.saved() missing");
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
    }

    storageTests();
    print(test_storage, "ERROR: storage Tests Not implemented.");
}(this));
