//select movie poster original image
let moviePoster = document.querySelector(".movie-poster");

//select model window
let modal = document.querySelector("#myModal");

//selct closeBtn
let closeBtn=document.querySelector(".closeBtn");

//image
let modalImage = document.querySelector(".movie-poster-modal");

moviePoster.addEventListener("click", ()=> {
    console.log("image");
    modal.style.display = "block";
    modalImage.src=moviePoster.src
});

closeBtn.addEventListener("click", ()=> {
    modal.style.display = "none";
});

window.addEventListener("click", (event)=>{
    if(event.target === modal){
    modal.style.display = "none"};
});