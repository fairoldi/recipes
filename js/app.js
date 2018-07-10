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
