"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
    }
}
const stringStorage = new LocalStorage();
stringStorage.get("key");
stringStorage.set("hello", "tmdwo");
const booleanstorage = new LocalStorage();
booleanstorage.get("ke");
booleanstorage.set("hello", true);
