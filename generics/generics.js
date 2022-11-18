"use strict";
const superprinter = (a) => a[0];
const a = superprinter([1, 2, 3, 4]);
const b = superprinter([true, true, false]);
const c = superprinter(["hi", "hello", "bye"]);
const d = superprinter([1, 2, true, "hi"]);
