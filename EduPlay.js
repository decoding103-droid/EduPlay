

const texts = [
    "Search Subject",
    "Take a quick test",
    "Learn something new",
    "Start your quiz "
];

let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("searchBox").placeholder = texts[index];
}, 2000); // change every 2 sec