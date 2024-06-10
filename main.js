const changeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");

// changeThemeBtn.addEventListener("click", () => {
//     // body.classList.toggle("light");
//     if(body.classList.contains("light")){
//         body.classList.remove("light");
//         body.classList.add("dark");
//     }else{
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     if(changeThemeBtn.classList.contains("light")){
//         changeThemeBtn.classList.remove("light");
//         changeThemeBtn.classList.add("dark");
//     }else{
//         changeThemeBtn.classList.add("light");
//         changeThemeBtn.classList.remove("dark");
//     }
// })

changeThemeBtn.addEventListener("click", () => {
body.setAttribute("data-theme", body.getAttribute("data-theme") === "light" ? "dark" : "light") 
})