
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

