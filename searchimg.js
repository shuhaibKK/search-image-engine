
const accessKey = "oPOwBLZNzQbLgvg0gAKG1K45X1ewAXPKPqdcawe1Gas";

const searchform=document.querySelector("#Searchform");
const searchinput= document.querySelector("#searchbox");
// const searchbutton= document.querySelector("#button");
const showmorebtn = document.querySelector("#showbtn");
const searchResult = document.querySelector("#searchresult");

let keyword= "";
let page = 1;

async function searchImages() {
    keyword= searchinput.value ;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

   const results = data.results;

   results.map((result)=>{
    const image = document.createElement("img");
    image.src= result.cover_photo.urls.small;

    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";

    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
   })
   showmorebtn.style.display = "block"
}

searchform.addEventListener("click",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
})