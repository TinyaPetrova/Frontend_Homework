const cars = [
    {brand: "BMW", price: 20000, isDiesel: true},
    {brand: "Mercedes", price: 22000, isDiesel: false},
    {brand: "Porshe", price: 50000, isDiesel: true},
    {brand: "Nissan", price: 25000, isDiesel: false},
];

const newCars = cars.map(car => {
    const {price, ...newCar} = car;
    return newCar;
});

console.log(newCars);
