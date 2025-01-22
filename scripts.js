// Simple popup interaction
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Thank you for choosing CyberEz!');
    });
  });
  