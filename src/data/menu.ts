export interface Food {
    image: string;
  name: string;
  price: string;
  category: string;
  description: string;
}

export const menu: Food[] = [
  // Entradas (Appetizers)
  { 
    image: "/images/menu1.webp",
    name: "Cochinita Pibil", 
    price: "$250 MXN", 
    category: "Entradas",
    description: "Tender, slow-roasted pork marinated in achiote and citrus, wrapped in banana leaves, served with pickled onions."
  },
  { 
    image: "/images/menu2.webp",
    name: "Sopa de Lima", 
    price: "$180 MXN", 
    category: "Entradas",
    description: "Traditional Yucatecan lime soup with shredded chicken, crispy tortilla strips, and a refreshing hint of lime."
  },
  { 
    image: "/images/menu3.webp",
    name: "Panuchos Mixtos",
    price: "$150 MXN",
    category: "Entradas",
    description: "Crispy tortillas filled with black beans, topped with shredded chicken, turkey, or pork, garnished with pickled onions."
  },
  { 
    image: "/images/menu4.webp",
    name: "Salbutes",
    price: "$140 MXN",
    category: "Entradas",
    description: "Fried, fluffy tortillas topped with turkey or chicken, lettuce, tomato, and pickled onions."
  },

  // Platos Fuertes (Main Courses)
  { 
    image: "/images/menu5.webp",
    name: "Relleno Negro", 
    price: "$320 MXN", 
    category: "Platos Fuertes",
    description: "Rich turkey stew in black recado sauce, a classic from Yucatán, perfectly spiced and served with soft tortillas."
  },
  { 
    image: "/images/menu6.webp",
    name: "Papadzules",
    price: "$280 MXN",
    category: "Platos Fuertes",
    description: "Tortillas stuffed with hard-boiled eggs, topped with pumpkin seed sauce and a hint of tomato sauce."
  },
  { 
    image: "/images/menu7.webp",
    name: "Pollo Pibil",
    price: "$300 MXN",
    category: "Platos Fuertes",
    description: "Chicken marinated in achiote and sour orange, wrapped in banana leaves and slow-roasted for deep flavor."
  },
  { 
    image: "/images/menu8.webp",
    name: "Pescado a la Tikin Xic",
    price: "$350 MXN",
    category: "Platos Fuertes",
    description: "Fresh fish marinated in achiote and citrus, grilled in banana leaves, a coastal Yucatecan specialty."
  },

  // Postres (Desserts)
  { 
    image: "/images/menu9.webp",
    name: "Flan de Cajeta", 
    price: "$120 MXN", 
    category: "Postres",
    description: "Creamy caramel flan infused with sweet cajeta, topped with a drizzle of golden caramel sauce."
  },
  { 
    image: "/images/menu10.webp",
    name: "Dulce de Papaya", 
    price: "$100 MXN", 
    category: "Postres",
    description: "Sweet, candied papaya slices served chilled with a touch of cinnamon and lime."
  },
  { 
    image: "/images/menu11.webp",
    name: "Marquesitas", 
    price: "$90 MXN", 
    category: "Postres",
    description: "Crispy rolled crepes filled with Edam cheese and optional chocolate or cajeta, a Yucatán street favorite."
  }
];
