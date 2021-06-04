var menuArray = [
    {label: "Week 01 Notes", url:"../WDD330/Week01/index01.html"},
    {label: "Week 02 Notes", url:"../WDD330/Week02/index02.html"},
    {label: "Week 03 Notes", url:"../WDD330/Week03/index03.html"},
    {label: "Week 04 Notes", url:"../WDD330/Week04/index04.html"},
    {label: "Week 05 Notes", url:"../WDD330/Week05/index05.html"},
    {label: "Week 07 Notes", url:"../WDD330/Week07/index07.html"}
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