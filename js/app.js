document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems);
});

/*
  Recipe
*/
let elems = document.querySelectorAll('input.step');
elems.forEach(elem => {
  elem.addEventListener('change', event => {
    let label = event.target.labels[0];
    let classes = label.classList;
    if (event.target.checked) {
      classes.remove('black-text');
    } else {
      classes.add('black-text');
    }
  });
});

/*
  new
*/
document.addEventListener('DOMContentLoaded', function() {
  let foodType = document.querySelectorAll('#foodtype');
  let foodTypeInstance = M.Chips.init(foodType, {
    autocompleteOptions: {
      data: {
        Meat: null,
        Fish: null,
        Vegetable: null,
        Breakfast: null,
        Dessert: null
      },
      limit: Infinity,
      minLength: 2
    },
    placeholder: 'Food type',
    secondaryPlaceholder: '+type'
  });

  let cookingMethod = document.querySelectorAll('#cookingmethod');
  let cookingMethodInstance = M.Chips.init(cookingMethod, {
    autocompleteOptions: {
      data: {
        Stovetop: null,
        Oven: null,
        Grill: null,
        'No Cooking': null
      },
      limit: Infinity,
      minLength: 1
    },
    placeholder: 'Cooking method',
    secondaryPlaceholder: '+method'
  });
});
