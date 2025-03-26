const categories = document.querySelectorAll('#categories .item');

console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul li').length;
    
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});



const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
  const ingredientsList = document.querySelector('#ingredients'); 
  
  const items = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient; 
    return li;
  });
  
  ingredientsList.append(...items); 