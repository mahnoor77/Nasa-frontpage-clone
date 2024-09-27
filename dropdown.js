document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const dropdown = item.querySelector('.dropdown-content');
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
  });