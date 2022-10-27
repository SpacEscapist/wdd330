// ASSIGNMENT - TABLE OF CONTENTS
// Place new Assignment name into "label" and assignment URL into "url"
const listArray = [
  {
    label: "Week 01",
    url: "week-01",
  },
  {
    label: "Week 02",
    url: "week-02",
  },
  {
    label: "Week 03",
    url: "week-03",
  },
  {
    label: "Week 04",
    url: "week-04",
  },
  {
    label: "Week 05",
    url: "week-05",
  },
  {
    label: "Week 06",
    url: "week-06",
  },
  {
    label: "Week 07",
    url: "week-07",
  },
];

listArray.forEach((listItem) => {
  const label = listItem.label;
  const url = listItem.url;

  let ol = document.getElementById("text-insert");

  ol.innerHTML += `<li><a href=${url}>${label}</a></li>`;
});

// FOOTER - LAST MODIFIED DATE
const d = new Date();
document.querySelector("#year").innerHTML = d.getFullYear();
document.querySelector("#currentDate").innerHTML = document.lastModified;
