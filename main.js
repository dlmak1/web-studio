
      const openBtn = document.querySelector(".button-one");
      const backdrop = document.querySelector(".backdrop");
      const closeBtn = document.querySelector(".modal-close-btn");

      openBtn.addEventListener("click", () => {
        backdrop.classList.add("is-open");
        window.addEventListener("keydown", onEscPress); 
      });

      closeBtn.addEventListener("click", closeModal);

      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          closeModal();
        }
      });

      function onEscPress(e) {
        if (e.key === "Escape") {
          closeModal();
        }
      }

      function closeModal() {
        backdrop.classList.remove("is-open");
        window.removeEventListener("keydown", onEscPress);
      }



  // Знаходимо елементи
  const openMenuBtn = document.querySelector('.btn-burger.btn-res');
  const closeMenuBtn = document.querySelector('.mobile-menu__close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Відкриття меню
  openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  // Закриття меню
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

