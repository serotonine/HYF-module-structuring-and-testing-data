// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the directories part of the filePath variable.
// Create a variable to store the extension part of the variable.

/* Funny ! */
const dir = filePath.slice(0, lastSlashIndex + 1);
const lastPointIndex = filePath.lastIndexOf(".");
const ext = filePath.slice(lastPointIndex + 1);
/* Check */
console.log("The directories part of the filePath is : " + dir);
console.log("The extension part of the variable is : " + ext);

// https://www.google.com/search?q=slice+mdn
