const axios = require('axios')
const render = require('./render.js')
const newForm = document.querySelector('.new-form')
const editForm= document.querySelector('.edit-form')
const blurbArea = document.querySelector('.blurb-area')
let currentId



const addEventListeners = () => {
    const removeArray = document.querySelectorAll('.remove')
    const editArray = document.querySelectorAll('.update')

    for (ele of removeArray) {
        ele.addEventListener('click', (e) => {

            console.log("delete event listener triggered")
            console.log(e.target)

            axios.delete(`http://localhost:3000/movies/${e.target.getAttribute("data-id")}`)
                .then((data) => {
                    let result = data.data.result
                    blurbArea.innerHTML = render.movieBlurb(result)

                    display()

                })
        })
    }

    for (ele of editArray) {
        ele.addEventListener('click', (e) => {
            console.log('edit event listener triggered')
            window.location = `edit.html?id=${e.target.getAttribute('data-id')}`
            splashArea.innerHTML = render.movieSplash(e.target.data)

        })
    }

}

const display = () => {
    axios.get('http://localhost:3000/movies')
        .then((data) => {
            let movieArray = data.data.result
            blurbArea.innerHTML = render.movieBlurb(movieArray)

            addEventListeners()

        })
}

display()

newForm.addEventListener('submit', (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/movies', body)
    .then((response) => {
       console.log(response)
        window.location = `show.html?id=${response.data.id}`
        splashArea.innerHTML = render.movieSplash(response.data)
        
    })

})

editForm.addEventListener('submit', (e) => {
    e.preventDefault()
    currentId = e.target.data.id
    axios.put(`http://localhost:3000/movies/${currentId}}`)
    
})

