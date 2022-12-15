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
    {
        label: "Week 08",
        url: "week-08",
    },
    {
        label: "Week 09",
        url: "week-09",
    },
    {
        label: "Week 10",
        url: "week-10",
    },
    {
        label: "Week 14 (Final Project)",
        url: "week-14-final",
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
