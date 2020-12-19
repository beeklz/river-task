"use strict";

// --*-- Task (FS sorting) --*--
console.log(
  "Press D (default) to show FS by it's default.\n"
  + "Tip: pressing D button must show the default structure\n"
  + "Press S (sorting) to show FS by 'folders-first' prototype.\n"
  + "Press R (random) to mix the FS.\n"
  + "Tip: result of pressing R button must be every time different."
);

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

// --*-- Solution --*--

// Sort files by default by pressing D
function sortByDefault() {
  showSplitter(`Pressed key: ${keyPressed}`);
  for (const item of folders.items) {
    console.log("[" + item.type + "]" + item.name);
  }
}

// Sort files randomly by pressing R
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

// Sort files by folder-first by pressing S
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

let keyPressed; // record pressed button

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
