"use strict";

// Task

let task = "Press D (default) to show FS by it's default.\n";
task += "Tip: after pressing D button should be shown the default structure\n";
task += "Press S (sorting) to show FS by 'folders-first' prototype.\n";
task += "Press R (random) to mix the FS.\n";
task += "Tip: after pressing R button FS must be every time different.";

console.log(task);

let folders = {
  items: [
    {
      name: "abc",
      type: "folder",
    },
    {
      name: "homer.png",
      type: "file",
    },
    {
      name: "xyz",
      type: "folder",
    },
    {
      name: "ggg",
      type: "folder",
    },
    {
      name: "marge.png",
      type: "file",
    },
  ],
};

function showSplitter(string) {
  console.log(
    "----------------------------------------- " + (string ? string : "")
  );
}

// Solution

// if button "D" pressed, sort files by default
function sortByDefault() {
  showSplitter(`Pressed key: ${keyPressed}`);
  for (const item of folders.items) {
    console.log("[" + item.type + "]" + item.name);
  }
}

// if button "R" pressed, sort files randomly
function sortRandomly() {
  showSplitter(`Pressed key: ${keyPressed}`);

  let itemsCopy = folders.items.slice();

  while (itemsCopy.length !== 0) {
    const i = Math.floor(Math.random() * itemsCopy.length);
    const type = `[${itemsCopy[i].type}]`;
    const name = `${itemsCopy[i].name}`;
    // print item
    console.log(`${type}${name}`);
    // delete item from copy
    itemsCopy.splice(i, 1);
  }
}

// if button "S" pressed, sort by the algorithm:
// show folders first, then files
function sortByFolders() {
  showSplitter(`Pressed key: ${keyPressed}`);
  // print folders
  folders.items.forEach((item) => {
    if (item.type === "folder") console.log(`[${item.type}]${item.name}`);
  });
  // print files
  folders.items.forEach((item) => {
    if (item.type === "file") console.log(`[${item.type}]${item.name}`);
  });
}

let keyPressed;

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyD" && event.key == "d") {
    keyPressed = event.key.toUpperCase();
    sortByDefault();
  } else if (event.code == "KeyR" && event.key == "r") {
    keyPressed = event.key.toUpperCase();
    sortRandomly();
  } else if (event.code == "KeyS" && event.key == "s") {
    keyPressed = event.key.toUpperCase();
    sortByFolders();
  }
});
