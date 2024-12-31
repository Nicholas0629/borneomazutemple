window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card-container");
    
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
  
      // Add the 'active' class when the card enters the viewport
      if (cardTop < windowHeight - 100 && cardBottom > 100) {
        card.classList.add("active");
      } 
      // Remove the 'active' class when the card leaves the viewport
      else {
        card.classList.remove("active");
      }
    });
  });
  