const products = [
  {
    name: "margarita",
    price: 45,
    ingredients: ["tomato paste", "mozarrella cheese"],
    id: "pizza-1",
    image: "margarita",
    imageUrl: "localhost:3001/images/margarita.jpg",
  },
  {
    name: "stagioni",
    price: 45,
    ingredients: [
      "mozarrella cheese",
      "parmesan cheese",
      "basil",
      "mushrooms",
      "ham",
      "artichokes",
      "olives",
    ],
    id: "pizza-2",
    image: "stagioni",
    imageUrl: "localhost:3001/images/stagioni.jpg",
  },
  {
    name: "mexicana",
    price: 48,
    ingredients: [
      "onion",
      "paprika",
      "ground beef",
      "mozarrella cheese",
      "avocado",
    ],
    id: "pizza-3",
    image: "mexicana",
    imageUrl: "localhost:3001/images/mexicana.jpg",
  },
  {
    name: "primavera",
    price: 45,
    ingredients: ["mozzarella cheese", "paprika", "corn", "egg", "tomato"],
    id: "pizza-4",
    image: "primavera",
    imageUrl: "localhost:3001/images/primavera.jpg",
  },
  {
    name: "pastorella",
    price: 48,
    ingredients: [
      "cottage cheese",
      "mozzarella cheese",
      "salame",
      "basil",
      "paprika",
    ],
    id: "pizza-5",
    image: "pastorella",
    imageUrl: "localhost:3001/images/pastorella.jpg",
  },
  {
    name: "hawaiana",
    price: 50,
    ingredients: ["pineapple", "ham", "tomato", "mozzarella cheese", "spices"],
    id: "pizza-6",
    image: "hawaiana",
    imageUrl: "localhost:3001/images/hawaiana.jpg",
  },
  {
    name: "napolitana",
    price: 55,
    ingredients: [
      "tomato paste",
      "tomato",
      "mozzarella cheese",
      "parsley",
      "green olives",
    ],
    id: "pizza-7",
    image: "napolitana",
    imageUrl: "localhost:3001/images/napolitana.jpg",
  },
  {
    name: "la marinara",
    price: 45,
    ingredients: ["tomato paste", "oregano", "garlic", "basil"],
    id: "pizza-8",
    image: "lamarinara",
    imageUrl: "localhost:3001/images/lamarinara.jpg",
  },
];

class Product {
  constructor(product) {
    this.product = product;
  }

  find = async () => {
    return products;
  };

  findOne = async ({ _id }) => {
    return products.find((product) => product.id === _id);
  };

  save = async () => {
    products.push(this.product);
  };

  deleteOne = async ({ _id }) => {
    const productIndex = products.findIndex((product) => {
      return product.id === _id;
    });
    products.splice(productIndex, 1);
    return;
  };

  updateOne = async ({ _id }, product) => {
    const productIndex = products.findIndex((product) => {
      return product.id === _id;
    });
    products.splice(productIndex, 1, product);
    return;
  };
}

module.exports = Product;
