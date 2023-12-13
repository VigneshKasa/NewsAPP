
    async function news(){

    let response= await fetch(" https://newsapi.org/v2/top-headlines?country=in&apiKey=65569989f8f448ce8cd938e8ee685e53")
    let info=await response.json();
    console.log(info)
    displayNews(info.articles)
    navitemcolordefault()
    document.getElementById("recommended").style.color="#f9b17a"
    document.getElementById("head").innerHTML="TOP HEADLINES - INDIA"


}
news();

function navitemcolordefault(){
document.getElementById("recommended").style.color="#a9a29c"
document.getElementById("worlds").style.color="#a9a29c"
document.getElementById("entertainment").style.color="#a9a29c"
document.getElementById("sports").style.color="#a9a29c"
document.getElementById("technology").style.color="#a9a29c"
}

function displayNews(arr){
    let mainHtml=''
    
    for(let i=0;i<arr.length;i++){
        if(arr[i].urlToImage){
    mainHtml+=`<div class="box" id="box">
                <a href=${arr[i].url}>
                <div class="image " id="image"><img src="${arr[i].urlToImage}" height="250px" width="450px"
                style="border-radius:5px;"></div>
    <div class="content">
    <div class="title" id="title"><b>${arr[i].title}</b></div>
                <div id="publishdate">
                   ${new Date(arr[i].publishedAt).toLocaleDateString()}
                </div>
        <div class="news" id="news">${arr[i].description}</div>
    </div>

</a>
</div>`
}
    }
document.getElementById('mainbox').innerHTML=mainHtml
}
    async function worldnews(){
        let response= await fetch(" https://newsapi.org/v2/everything?q=latest&apiKey=65569989f8f448ce8cd938e8ee685e53")
        let info=await response.json();
        console.log(info)
        displayNews(info.articles)
        navitemcolordefault()
        document.getElementById("worlds").style.color="#f9b17a"
        document.getElementById("head").innerHTML="World's News"
    }

    async function entertainmentnews(){
        let response= await fetch(" https://newsapi.org/v2/everything?q=movies&apiKey=65569989f8f448ce8cd938e8ee685e53")
        let info=await response.json();
        console.log(info)
        displayNews(info.articles)
        navitemcolordefault()
        document.getElementById("entertainment").style.color="#f9b17a"
        document.getElementById("head").innerHTML="Entertainment "

    }

    async function sportsnews(){
        let response= await fetch(" https://newsapi.org/v2/everything?q=sports&apiKey=65569989f8f448ce8cd938e8ee685e53")
        let info=await response.json();
        console.log(info)
        displayNews(info.articles)
        navitemcolordefault()
        document.getElementById("sports").style.color="#f9b17a"
        document.getElementById("head").innerHTML="Sports News"


    }

    async function technologynews(){
        let response= await fetch(" https://newsapi.org/v2/everything?q=technology&apiKey=65569989f8f448ce8cd938e8ee685e53")
        let info=await response.json();
        console.log(info)
        displayNews(info.articles)
        navitemcolordefault()
        document.getElementById("technology").style.color="#f9b17a"
        document.getElementById("head").innerHTML="Technology News"


    }
    async function searchquery(){
        const search=document.querySelector("input").value
        let response= await fetch(" https://newsapi.org/v2/everything?q="+search+"&apiKey=65569989f8f448ce8cd938e8ee685e53")
        let info=await response.json();
        console.log(info)
        displayNews(info.articles)
        document.getElementById("head").innerHTML='News about "'+search+'"'

    }

// author
// : 
// "Ross Johnson"
// content
// : 
// "Christmas movies have been a tradition for decades, but the days when we had to watch George Bailey try to jump off of a bridge year after year are well past us. Holiday movies are an industry in and… [+13510 chars]"
// description
// : 
// "Christmas movies have been a tradition for decades, but the days when we had to watch George Bailey try to jump off of a bridge year after year are well past us. Holiday movies are an industry in and of themselves, with dozens, if not hundreds of new seasonal…"
// publishedAt
// : 
// "2023-11-08T15:30:00Z"
// source
// : 
// {id: null, name: 'Lifehacker.com'}
// title
// : 
// "25 Modern Christmas Classics You Can Stream Right Now"
// url
// : 
// "https://lifehacker.com/modern-christmas-classics-you-can-stream-right-now-1850996662"
// urlToImage
// : 
// "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9b96ef13e8f459