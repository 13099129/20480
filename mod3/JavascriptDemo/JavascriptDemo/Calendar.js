



let divTags = document.all;
for (let i = 0; i < divTags.length; i++) {
    console.log(i + ": " + divTags[i].class)
    if (divTags[i].classList.contains("Calendar")) {
        divTags[i].innerHTML = createCalendar();
    }
}




function createCalendar() {
    let xdate = new Date();
    let fom = new Date(xdate.getFullYear(), xdate.getMonth(), 1);
    let eom = new Date(xdate.getFullYear(), xdate.getMonth() + 1, 0);
    let output = "<table>";
    let newRow = false;
    
    output += "<tr>";
//add blank cells if the first day isn't sunday


    for (let i = 0; i < eom.getDate(); i++) {
        if (newRow == true) {
            output += "<tr>";
            newRow = false;
        }
        let cur = new Date(fom.getFullYear(), fom.getMonth(), i + 1);
        output += `<td>${cur.getDate()}</td>`
        if (cur.getDay() == 6) {
            output += "</tr>";
            newRow = true;
        }
    }


    output += "</tr>";
    output += "</table>";
    return output;

}