let close = document.getElementById('close')
let nav = document.getElementById('nav')
let open = document.getElementById('open')

close.addEventListener("click", function (e) {
    nav.className = "nav"
})

open.addEventListener("click", function (e) {
    nav.className = "nav_close"
})