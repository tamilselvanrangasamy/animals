import Info from "../components/Info"
import Main from "./Main"

const animals = [
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Leopard",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Dog",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Elephant",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Tiger",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Lion",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Cat",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    }
]
const birds = [
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Peacock",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Parrot",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Dove",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Tiger",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Lion",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        title: "Cat",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    }
]
function Products() {
    return (
        <div>
            <Info title="Animals" colors="secondary" />
            <Main zoo={animals} />
            <Info title="Birds" colors="warning" />
            <Main zoo={birds} />
            <Info title="Insects" colors="success" />
            <Main zoo={birds} />

            {/* {
                animals.map((e) => (
                    <Info title="A" colors="error"></Info>
                ))
            } */}
        </div>
    )
}

export default Products