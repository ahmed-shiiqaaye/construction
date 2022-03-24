// header
let menu = document.getElementById('bars')
let times = document.getElementById('times')
let links = document.getElementById('links')

menu.onclick = () =>{
    links.classList.toggle('active')
}
times.onclick = () =>{
    links.classList.remove('active')
}