document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  // Función para realizar la búsqueda
  function doSearch() {
      const query = searchInput.value;
      if (query) {
          const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
          chrome.tabs.create({ url: searchUrl });
      }
  }

  // Evento de clic en el botón de búsqueda
  searchButton.addEventListener('click', doSearch);

  // Evento de pulsar la tecla "Enter" en el campo de entrada
  searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
          doSearch();
      }

      
  });
});
