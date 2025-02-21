document.addEventListener('DOMContentLoaded', () => {
    let booksData = [];
  
    const loadBooks = () => {
      fetch('/api/books')
        .then(response => response.json())
        .then(data => {
          booksData = data;
          updateGenreFilter();
          renderBooks(booksData);
        })
        .catch(error => console.error('Erreur lors de la récupération des livres :', error));
    };
  
    const updateGenreFilter = () => {
      const genreFilter = document.getElementById('genreFilter');
      genreFilter.innerHTML = '<option value="all">Tous les genres</option>';
      const genres = new Set();
      booksData.forEach(book => genres.add(book.genre));
      genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
      });
    };
  
    const renderBooks = (books) => {
      const bookList = document.getElementById('books-list');
      bookList.innerHTML = '';
  
      if (books.length === 0) {
        bookList.innerHTML = `<p style="color: red;">Aucun livre trouvé.</p>`;
        return;
      }
  
      books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
          <h3>${book.titre}</h3>
          <p><strong>Auteur :</strong> ${book.auteur}</p>
          <p><strong>Genre :</strong> ${book.genre}</p>
          <p><strong>Introduction :</strong> ${book.intro}</p>
          <button class="delete-btn" data-id="${book.id}">Supprimer</button>
        `;
  
        bookCard.querySelector('.delete-btn').addEventListener('click', () => {
          if (confirm(`Confirmez-vous la suppression de "${book.titre}" ?`)) {
            fetch(`/api/books/${book.id}`, { method: 'DELETE' })
              .then(response => response.json())
              .then(() => loadBooks())
              .catch(error => console.error('Erreur lors de la suppression :', error));
          }
        });
  
        bookList.appendChild(bookCard);
      });
    };
  
    const filterBooksByGenre = () => {
      const selectedGenre = document.getElementById('genreFilter').value;
      if (selectedGenre === 'all') {
        renderBooks(booksData);
      } else {
        const filteredBooks = booksData.filter(book => book.genre === selectedGenre);
        renderBooks(filteredBooks);
      }
    };
  
    document.getElementById('add-book-form').addEventListener('submit', (e) => {
      e.preventDefault();
  
      const titre = document.getElementById('titre').value;
      const intro = document.getElementById('intro').value;
      const auteur = document.getElementById('auteur').value;
      const genre = document.getElementById('genre').value;
  
      fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titre, intro, auteur, genre })
      })
        .then(() => {
          document.getElementById('add-book-form').reset();
          closeModal();
          loadBooks();
        })
        .catch(error => console.error('Erreur lors de l\'ajout du livre :', error));
    });
  
    document.getElementById('genreFilter').addEventListener('change', filterBooksByGenre);
  
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.querySelector('.modal .close');
  
    openModalButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  
    closeModalButton.addEventListener('click', closeModal);
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    function closeModal() {
      modal.style.display = 'none';
    }
  
    loadBooks();
  });
  