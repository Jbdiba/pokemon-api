
// // example-1:

// import fetch from "node-fetch";

// const fetchPokemon = async (id) => {
//     try {
//         const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         const data = await rest.json();
//         return data
//     } catch (err) {
//         console.log(err)
//     }
// }

// fetchPokemon("mew").then((data) => {
//     console.log(data.name, data.types[0].type.name)

// })


// // example-2 (passing the id diectly):

// import fetch from "node-fetch";

// const fetchPokemon = async (id) => {
//     try {
//         const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/14`)
//         const data = await rest.json();
//         return data
//     } catch (err) {
//         console.log(err)
//     }
// }

// fetchPokemon().then((data) => {
//     console.log(data.name, data.types[0].type.name)

// })


// example-3:

import fetch from "node-fetch";

const fetchDogs = async (breed) => {
    try {
        const rest = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const data = await rest.json();
        return data
    } catch (err) {
        console.log(err)
    }
}

fetchDogs("hound").then((data) => {
    console.log(data) 

})