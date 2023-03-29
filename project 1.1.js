const cancelBtn=document.querySelector(".cancel-menu-btn")
cancelBtn.addEventListener("click",()=>{
    cancelBtn.style.display="none"
})
 const heart =document.getElementById("heart");
window.addEventListener("DOMContentLoaded",()=>{
   
    const  likeUnlikePost=function(){
        heart.classList.contains("like")?heart.classList.remove("like")&&heart.classList.add("unlike"):heart.classList.add("like")&&heart.classList.remove("unlike");
        
    }
    heart.addEventListener("click",()=>{likeUnlikePost()})
}) 
