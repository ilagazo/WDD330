var menuArray = [
    {label: "Week01 Notes", url:"/Week01/index.html"},
    {label: "Week02 Notes", url:"/Week02/index.html"}
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