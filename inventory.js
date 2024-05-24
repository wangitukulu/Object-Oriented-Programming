//Object Oriented Programming

// Object constructor function Shoes 
function Shoes(name, productCode, quantity, valuePerItem) {
   
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
}


let shoesArray = [];
// five instances of the Shoes object to be pushed into an array

let shoes1 = new Shoes("Polo", "RS123", 2, 50.00);
let shoes2 = new Shoes("Addidas", "CS456", 3, 40.00);
let shoes3 = new Shoes("Nike", "SS789", 1, 60.00);
let shoes4 = new Shoes("Puma", "FS012", 4, 70.00);
let shoes5 = new Shoes("Jordan", "SN567", 2, 55.00);

shoesArray.push(shoes1, shoes2, shoes3, shoes4, shoes5);

// A function to search for any shoe within the array

function searchShoe(shoesArray, searchTerm) {
    for (let i = 0; i < shoesArray.length; i++) {
        if (shoesArray[i].name.toLowerCase() === searchTerm.toLowerCase()) {
            return shoesArray[i];
        }else {
            return searchTerm + ' is not found'
        }
    }
    
}

// A function to find the shoe with the lowest value per item
function findLowestValueShoe(shoesArray) {
    if (shoesArray.length === 0) {
        return null; 
    }

    let lowestValueShoe = shoesArray[0]; // shoes1

    for (let i = 1; i < shoesArray.length; i++) {
        if (shoesArray[i].valuePerItem < lowestValueShoe.valuePerItem) {
            lowestValueShoe = shoesArray[i];
        }
    }

    return lowestValueShoe;
}

//A function to find the shoe with the highest value per item
function findHighestValueShoe(shoesArray) {
    if (shoesArray.length === 0) {
        return null; 
    }

    let highestValueShoe = shoesArray[0];

    for (let i = 1; i < shoesArray.length; i++) {
        if (shoesArray[i].valuePerItem > highestValueShoe.valuePerItem) {
            highestValueShoe = shoesArray[i];
        }
    }

    return highestValueShoe;
}

// A function to edit all 4 properties for each of the five shoe instances
function editShoeProperties(shoesArray, newName, newProductCode, newQuantity, newValuePerItem) {
    for (let i = 0; i < shoesArray.length; i++) {
        shoesArray[i].name = newName;
        shoesArray[i].productCode = newProductCode;
        shoesArray[i].quantity = newQuantity;
        shoesArray[i].valuePerItem = newValuePerItem;
    }
}

// A function to order all the objects in ascending order based on the value per item
function orderShoesByValue(shoesArray) {
    shoesArray.sort((a, b) => a.valuePerItem - b.valuePerItem);
    return shoesArray;
}

console.log("This is the value of Search shoes function")
let searchTerm = "Polo";
let foundShoe = searchShoe(shoesArray, searchTerm);
console.table(foundShoe )

console.log("This is the value of the lowest value function")
let lowestValueShoe = findLowestValueShoe(shoesArray);
console.table(lowestValueShoe )

console.log("This is the value of the highest value function")
let highestValueShoe = findHighestValueShoe(shoesArray);
console.table(highestValueShoe)


console.log("This is the value of the edit function")
editShoeProperties(shoesArray, "Updated Shoes", "UPD001", 5, 75.00);
console.log("Shoes after editing properties:", shoesArray);


let orderedShoes = orderShoesByValue(shoesArray);
console.log("Shoes ordered by value per item:", orderedShoes);
