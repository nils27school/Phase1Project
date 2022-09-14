// fetch("http://localhost:3000/character")
// .then(res => console.log(res))

// console.log(NemisisData)

//DOM render functions
function renderOneCharacter(character) {
    //build character
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
<img src="${character.imageUrl}">
<div class="content">
    <h4>${character.name}</h4>
    <h5>${character.game}</h5
    <p>
    $<span class="vote-count">${character.votes}</span> Votes
    <p>
    <p>${character.description}</p>
    </div>
    <div class="buttons">
    <button> Vote </button>
    </div>
`
    // console.log(card)
    //add character card to DOM
    document.querySelector('#character-list').appendChild(card)
}

function getAllCharacters(){
    fetch('http://localhost:3000/character')
        .then(res => res.json())
        .then(character.data => character.forEach(character => renderOneCharacter(character))
        console.log('before fetch returns')
}
// initial render
//get data and render our character to the DOM
function initialize(){
    getAllCharacters()
    console.log('after get all characters')
    // character.forEach(character => renderOneCharacter(character))
}

initialize()