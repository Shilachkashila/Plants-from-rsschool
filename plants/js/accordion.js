const details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
    const det = event.target.parentNode.children;
    for(i=0;i<det.length;i++) {
      if (det[i].tagName != "DETAILS" || 
         !det[i].hasAttribute('open') || 
         event.target == det[i]) {
         continue;
      }
      det[i].removeAttribute("open");
    }
}