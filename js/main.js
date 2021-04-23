var menuArray = [
    {label: "Week01 Notes", url:"../WDD330/Week01/index01.html"},
    {label: "Week02 Notes", url:"../WDD330/Week02/index02.html"}
]

function dynamicTableLoader() {
    var display = "";
    var i;
    // FOR loop to loop through array and display the content in a <li> tag
    for (i in menuArray) {
        display += "<li><a href=\"" + menuArray[i].url + "\">" + menuArray[i].label + "</a></li>";
    }
        document.getElementById("arrayLink").innerHTML = display;
}