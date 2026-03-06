var Arr = [
    {
    Dp :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMt_jJAwCe2s-O3Yf8t4sVzQcxGubuAHtAg&s",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDIUQBsVluh_eHIwPpIRRsU29UCXjxY5avA&s" },{
    Dp :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFREUxqSD6V6bl1zZrDP6JJxT_jmWzBPE7g&s",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XWr40_BkUdvbaImdbQJXvcI3XnXlHCzwKQ&s" },
    {
    Dp :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLOUAfX-leKS6MSSRc_emdO4hCRE5wt80og&s",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLOSGxUnxqdVK_01h3kPaSzlvjX9d_79ENg&s" }, {
    Dp :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqEfCH0AZkdswsFxt9FdQALN5jtEIruFr7Q&s",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7pQQF4ev7lkYNQ59K5pucrLqCK3DSHZiOw&s" }
]
var clutter = ""
let storyian = document.querySelector("#storyian")
Arr.forEach(function(elem,indx){
    clutter += `<div class="story">
                <img id = "${indx}" src="${elem.Dp}"alt=""> 
                </div>`
})
document.querySelector("#storyian").innerHTML = clutter
storyian.addEventListener("click",function (dets) {
document.querySelector("#full-screen").style.display = "block"
document.querySelector("#full-screen").style.backgroundImage = `url(${Arr[dets.target.id].story})`
    
setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
},3000)
})
