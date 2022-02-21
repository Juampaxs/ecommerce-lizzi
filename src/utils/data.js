const data = [ 
    { 
        id: 1,
        title: 'título 1',
        description: 'descripción 1',
        price: 2,
        pictureUrl: require('../components/images/desayuno.jpg'),
        categoryId: 'desayuno'
    },
    { 
        id: 2,
        title: 'título 2',
        description: 'descripción 2',
        price: 1,
        pictureUrl: require('../components/images/almuerzo.png'),
        categoryId: 'almuerzo'
    },
    { 
        id: 3,
        title: 'título 3',
        description: 'descripción 3',
        price: 5,
        pictureUrl: require('../components/images/bebidas.jpg'),
        categoryId: 'bebidas'
    }
];

module.exports = {
    data
}