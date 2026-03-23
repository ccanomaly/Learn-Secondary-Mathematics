const collapsibles = document.getElementsByClassName("collapse");
const horizCollapsibles = document.getElementsByClassName("hamburger");
let i = collapsibles.length;

for (i=0; i<collapsibles.length;i++){
    collapsibles[i].addEventListener("click", (event) =>{
        let content = document.querySelector (".solution");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })   
}

for (i=0; i<collapsibles.length;i++){
    horizCollapsibles[i].addEventListener("click", (event) =>{
        let content = document.querySelector(".table-contents");
        let nonContent = document.querySelector(".non-toc");
        if (content.style.maxWidth) {
            content.style.maxWidth = null;
            nonContent.style.opacity = 1;
        } else {
            content.style.maxWidth = content.scrollWidth + "px";
            nonContent.style.opacity = .5;
            
        }
    })   
}


function getGrandParentElement (node) {
    return node.parentElement.parentElement;
}
