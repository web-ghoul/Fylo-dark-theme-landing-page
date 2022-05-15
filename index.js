let btn = document.querySelector('section.get form button')
let span = document.querySelector('section.get form span')
btn.addEventListener('click', function(e) {
    e.preventDefault()
    if (span.style.opacity == '0') {
        span.style.opacity = '1'
    } else {
        span.style.opacity = '0'
    }
})