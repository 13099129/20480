


function SetUp() {
    var rows = document.querySelectorAll("table tr");
    //alert(rows.length);
    for (let i = 0; i < rows.length; i++) {
        rows[i].setAttribute("draggable", "true");

        rows[i].addEventListener("drag", function (ev) {
            alert("drag");
            ev.dataTransfer.effectAllowed = "copy";
            ev.dataTransfer.setData("text/plain", ev.target.outerHTML);
        });
    }
}