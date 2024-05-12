const searchForm=document.getElementById('search-form');
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("images");
const showMoreBtn=document.getElementById("show-more-btn")

let accessKey="qDRtNeXkqSYVhuApmp7ZvnZnc2Q1IFfjBn4hQIgaWNI";
let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;
    console.log(results);
    results.map((result)=>{
        const image=document.createElement("img");
        image .src=result.urls.full;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";

}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showMoreBtn.addEventListener('click',()=>{
    page++;
    searchImages();
})
