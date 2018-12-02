const movieSplash = (movie) => {
    let result = ``
    result += (
        `<div class="container"><ul>
    <li>${title}</li>
    <li>${director}</li>
    <li>${year}</li>
    <li><img src="${poster}"</img></li>
    <li>${rating}</li>
    </ul>
    </div>`
    )
    return result
}

const movieBlurb = (array) => {
    let result = ``
    for (ele of array) {
        result +=
            `<tr data-id="${ele.id}">
            <td>${ele.title}</td>
            <td>${ele.director}</td>
            <td>${ele.year}</td>
            <td>${ele.rating}</td>
            <td><a class="button is-dark update">Edit</a></td>
            <td><a class="button is-dark remove">Delete</a></td>
            </tr>`
            

    }
    return result
}


module.exports = { movieSplash, movieBlurb }

