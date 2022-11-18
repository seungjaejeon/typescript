"use strict";
const superprint = (arr) => {
    arr.forEach(i => console.log(i));
};
superprint([1, 2, 3, 4]);
superprint([true, true, false]);
superprint(["hi", "hello", "bye"]);
superprint([1, 2, true, "hi"]);
