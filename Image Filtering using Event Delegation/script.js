const tabs=document.querySelector(".tabs");
const gallery=document.querySelectorAll(".images");
console.log(gallery.length);

tabs.addEventListener("click",(event)=>{
    console.log(event.target.dataset.category);
    filterSearch(event.target.dataset.category);
});

const filterSearch=(value)=>{
    gallery.forEach((currElem)=>{
        if(currElem.dataset.category===value){
            currElem.style.display="block";
        }
        else if(value==='all'){
            currElem.style.display="block";
        }
        else{
            currElem.style.display="none";
        }
    })
}