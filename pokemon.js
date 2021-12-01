
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

// // example-4:

// import fetch from "node-fetch";

// const fetchBird = async (id) => {
//     try {
//         const res = await fetch (`https://audubon-api.herokuapp.com/api/birds/${id}`)
//         const data = await res.json();
//         const bird = {
//             "name":data.name,
//         }
//         return (data)       
//     } catch (err) {
//         console.log(err)

//     }
// }

// fetchBird("5f8ef8386b1fb90004bde060").then((data) => {
//     console.log(data)
// })