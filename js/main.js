const links = [
    {label: "Week1 notes",url:"../WDD330/Week01/index.html"}
]

function arrayLinkReader() {
    var display;

    for (i in links) {
        display = "<li><a href=\"" + links[i].url + "\">" + links[i].label + "</a></li>";
    }
    document.getElementsById("arrayLink").innerHTML = display;
}