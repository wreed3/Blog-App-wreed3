import { useState, useEffect } from "react";

const blogEntries = [
  { key: 1, title: "title1", entryText: "entry text 1" },
  { key: 2, title: "title2", entryText: "entry text 2" },
  { key: 3, title: "title3", entryText: "entry text 3" },
  { key: 4, title: "title4", entryText: "entry text 4" },
  { key: 5, title: "title5", entryText: "entry text 5" },
  { key: 6, title: "title6", entryText: "entry text 6" },
];
const URL = "http://";

async function Data() {
  const res = await fetch(URL);
  const json = await res.json();

  return json;
}

function returnBlogEntries() {
  const [data, setData] = useState("");

  useEffect(() => {
    data.then(setData);
  }, []);

  return blogEntries;
}
