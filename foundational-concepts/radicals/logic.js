const collapsibles = document.getElementsByClassName("collapse");
let i = collapsibles.length;

for (i=0; i<collapsibles.length;i++){
    collapsibles[i].addEventListener("click", (event) =>{
        let content = event.currentTarget.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })   
}
