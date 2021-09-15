console.log("its working")
let theme = localStorage.getItem('theme') // hämtar temat/key

if (theme == null) { // om ett värde är satt i teman så sparas den
    setTheme('light')
} else {
    setTheme(theme)
}


let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option click:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) { // om användaren trycker på färgen så ändras den till den css som den är angiven till
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode) // sätter temat

}