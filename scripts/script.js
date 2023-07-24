

// Funkce pro filtrování položek
function filterItems(tag) {
    const catCard = document.getElementsByClassName('cat-card');
    
    // Skryje všechny položky
    Array.from(catCard).forEach(function(item) {
      item.style.display = 'none';
    });
    
    // Zobrazí položky s odpovídajícím datovou značkou
    Array.from(catCard).forEach(function(item) {
      const tags = item.getAttribute('data-tag').split(' ');
      if (tags.includes(tag)) {
        item.style.display = 'block';
      }
    });
    
    // Odscrollování na místo s vyfiltrovaným seznamem
    const section = document.getElementsByClassName('cat-card')[0].parentElement;
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Přidání posluchačů událostí na tlačítka filtrů
  const filterButtons = document.getElementsByClassName('filter-toggle');
  Array.from(filterButtons).forEach(function(button) {
    button.addEventListener('click', function() {
      const tag = this.getAttribute('data-tag');
      filterItems(tag);
    });
  });