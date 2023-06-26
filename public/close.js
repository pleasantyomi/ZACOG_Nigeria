function close() {
    let x = document.getElementById("hidden1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
