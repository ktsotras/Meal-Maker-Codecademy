const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appIn) {
    this._courses.appetizers = appIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains = mainIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessIn) {
    this._courses.desserts = dessIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is:\nAppetizer: ${appetizer.name}\nMain: ${main.name}\nDessert: ${dessert.name}\nYour total price is: $${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Tomato Soup', 2.55);
menu.addDishToCourse('appetizers', 'Wings', 7.25);

menu.addDishToCourse('mains', 'Chicken Caesar Salad', 8.95);
menu.addDishToCourse('mains', 'Hamburger', 6.75);
menu.addDishToCourse('mains', 'Steak', 14.95);

menu.addDishToCourse('desserts', 'Sundae', 4.95);
menu.addDishToCourse('desserts', 'Pie', 3.95);
menu.addDishToCourse('desserts', 'Cannoli', 3.25);

let meal = menu.generateRandomMeal();

console.log(meal);
