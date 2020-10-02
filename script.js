const superHeroes =
    [
        {
            "name": "Batman",
            "publisher": "DC Comics",
            "alter_ego": "Bruce Wayne",
            "first_appearance": "Detective Comics #27",
            "weight": "210"
        },
        {
            "name": "Superman",
            "publisher": "DC Comics",
            "alter_ego": "Kal-El",
            "first_appearance": "Action Comics #1",
            "weight": "220"
        },
        {
            "name": "Flash",
            "publisher": "DC Comics",
            "alter_ego": "Jay Garrick",
            "first_appearance": "Flash Comics #1",
            "weight": "195"
        },
        {
            "name": "Green Lantern",
            "publisher": "DC Comics",
            "alter_ego": "Alan Scott",
            "first_appearance": "All-American Comics #16",
            "weight": "186"
        },
        {
            "name": "Green Arrow",
            "publisher": "DC Comics",
            "alter_ego": "Oliver Queen",
            "first_appearance": "All-American Comics #16",
            "weight": "195"
        },
        {
            "name": "Wonder Woman",
            "publisher": "DC Comics",
            "alter_ego": "Princess Diana",
            "first_appearance": "The Incredible Hulk #180",
            "weight": "165"
        },
        {
            "name": "Blue Beetle",
            "publisher": "DC Comics",
            "alter_ego": "Dan Garret",
            "first_appearance": "Mystery Men Comics #1",
            "weight": "145"
        },
        {
            "name": "Spider Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Peter Parker",
            "first_appearance": "Amazing Fantasy #15",
            "weight": "167"
        },
        {
            "name": "Captain America",
            "publisher": "Marvel Comics",
            "alter_ego": "Steve Rogers",
            "first_appearance": "Captain America Comics #1",
            "weight": "220"
        },
        {
            "name": "Iron Man",
            "publisher": "Marvel Comics",
            "alter_ego": "Tony Stark",
            "first_appearance": "Tales of Suspense #39",
            "weight": "250"
        },
        {
            "name": "Thor",
            "publisher": "Marvel Comics",
            "alter_ego": "Thor Odinson",
            "first_appearance": "Journey into Myster #83",
            "weight": "200"
        },
        {
            "name": "Hulk",
            "publisher": "Marvel Comics",
            "alter_ego": "Bruce Banner",
            "first_appearance": "The Incredible Hulk #1",
            "weight": "1400"
        },
        {
            "name": "Wolverine",
            "publisher": "Marvel Comics",
            "alter_ego": "James Howlett",
            "first_appearance": "The Incredible Hulk #180",
            "weight": "200"
        },
        {
            "name": "Daredevil",
            "publisher": "Marvel Comics",
            "alter_ego": "Matthew Michael Murdock",
            "first_appearance": "Daredevil #1",
            "weight": "200"
        },
        {
            "name": "Silver Surfer",
            "publisher": "Marvel Comics",
            "alter_ego": "Norrin Radd",
            "first_appearance": "The Fantastic Four #48",
            "weight": "unknown"
        }
    ]

// 1    
// const superHeroNames = (array) => superHeroes.map(object => object.name);
// console.log(superHeroNames());

//  2
// const lightWeights = (array) => superHeroes.filter(object => object.weight < 190)
//     .map(object => object = object.name);
// console.log(lightWeights())


// 3
// const weights200pounds = (array) => superHeroes.filter(object => object.weight === '200')
//     .map(object => object.name);


// console.log(weights200pounds())



// 4
// const firstAppearance = (array) => superHeroes.map(object => object.first_appearance)
// console.log(firstAppearance())

//5
// const getPublisherDCComics = (array) => superHeroes.filter(object => object.publisher == "DC Comics")
//     .map(object => object.name);
// console.log(getPublisherDCComics());

// const getPublisherMarvelComics = (array) => superHeroes.filter(object => object.publisher == "Marvel Comics")
//     .map(object => object.name);
// console.log(getPublisherMarvelComics());

// 6
// const addWeightSuperHeroesDCComics = (array) => superHeroes.filter(object => object.publisher == 'DC Comics')
//     .map(object = object => object.weight)
//     .reduce((accumulator, currentValue) => (parseInt(accumulator) + parseInt(currentValue)))
// console.log(addWeightSuperHeroesDCComics())

// 7
// const addWeightSuperHeroesMarvelComics = (array) => superHeroes.filter(object => object.publisher == 'Marvel Comics')
//     .filter(object = object => object.weight != 'unknown')
//     .map(object = object => object.weight)
//     .reduce((accumulator, currentValue) => (parseInt(accumulator) + parseInt(currentValue)))

// console.log(addWeightSuperHeroesMarvelComics())

// 8 
// Onderstaande uitwerkingen zijn uiteraard te makkelijk
// const heaviestSuperHero = (array) => superHeroes.filter(object => object.weight > 500);
// console.log(heaviestSuperHero())

// const heaviestSuperHero = superHeroes.filter(object => object = object.weight > 500);
// console.log(heaviestSuperHero)

const heavySuperHero = superHeroes
    .filter(object => object.weight != 'unknown')
    .map(object => object = parseInt(object.weight))
    .reduce(function (a, b) { return Math.max(a, b) });

// console.log(heaviestSuperHero)

const heaviestSuperHero = superHeroes
    .filter(object => object = object.weight == heavySuperHero)
    .map(object => object = object.name)

console.log(heaviestSuperHero)

