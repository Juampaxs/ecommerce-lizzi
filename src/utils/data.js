const data = [ 
    { 
        id: 1,
        title: 'título 1',
        description: 'descripción 1',
        price: 2,
        pictureUrl: './images/desayuno.jpg',
        categoryId: 'desayuno'
    },
    { 
        id: 2,
        title: 'título 2',
        description: 'descripción 2',
        price: 1,
        pictureUrl: "./images/desayuno.jpg",
        categoryId: 'almuerzo'
    },
    { 
        id: 3,
        title: 'título 3',
        description: 'descripción 3',
        price: 5,
        pictureUrl: ['./images/desayuno.jpg'],
        categoryId: 'bebidas'
    }
];

module.exports = {
    data
}