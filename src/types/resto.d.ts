type Review = {
    rating: number,
    image: string,
    text: string,
    name: string
}

type Resto = {
    name: string,
    price: number,
    "is-open": number,
    category: string,
    reviews: Review[]
}

export { Review, Resto }