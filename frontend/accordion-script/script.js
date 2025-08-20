let acc = document.getElementsByClassName("questionButton");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;

    // Close all panels first
    let allPanels = document.getElementsByClassName("panel");
    for (let j = 0; j < allPanels.length; j++) {
      if (allPanels[j] !== panel) {
        allPanels[j].style.maxHeight = null;
        allPanels[j].style.border = "none";
      }
    }
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;  // collapse
      panel.style.border = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // expand
      panel.style.border = "2px solid black";
    }
  });
}
