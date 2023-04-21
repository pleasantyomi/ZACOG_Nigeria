function toggleAccordion(accordionNum) {
    var panel = document.querySelector("#accordion:nth-of-type(" + accordionNum + ") #panel");
    var accordion = document.querySelector("#accordion:nth-of-type(" + accordionNum + ")");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      accordion.classList.remove("active");
    } else {
      panel.style.display = "block";
      accordion.classList.add("active");
    }
  }
  