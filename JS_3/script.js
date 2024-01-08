document.addEventListener('DOMContentLoaded', function () {
    const dateForm = document.getElementById('dateForm');
    const date = document.getElementById('date');
    const apodContent = document.getElementById('apodContent');
    const favoritesContent = document.getElementById('favoritesContent');

    // Event listener for the form submission
    dateForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedDate = date.value;

        // Call the function to fetch APOD data
        getApod(selectedDate);
    });

    // Function to fetch APOD data
    async function getApod(date) {
        const apiKey = '6xamPJST8i2XqZr2Nx8zGKB2dh6UjC7bwjfxVv2y';
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            displayApod(data);
        } catch (error) {
            console.error('Error fetching APOD data:', error);
        }
    }

    // Function to display APOD data
    function displayApod(data) {
        apodContent.innerHTML = '';

        const apodContainer = document.createElement('div');
        apodContainer.classList.add('apod-container');

        const title = document.createElement('h2');
        title.textContent = data.title;

        const date = document.createElement('p');
        date.textContent = `Date: ${data.date}`;

        const explanation = document.createElement('p');
        explanation.textContent = data.explanation;

        const apodImage = document.createElement('img');
        apodImage.src = data.url;
        apodImage.alt = data.title;

        //event listener to open high-definition version when click
        apodImage.addEventListener('click', function () {
            window.open(data.hdurl, '_blank');
        });

        const addToFavoritesBtn = document.createElement('button');
        addToFavoritesBtn.textContent = 'Add to Favorites';
        addToFavoritesBtn.addEventListener('click', function () {
            addToFavorites(data);
        });

        apodContainer.appendChild(title);
        apodContainer.appendChild(date);
        apodContainer.appendChild(explanation);
        apodContainer.appendChild(apodImage);
        apodContainer.appendChild(addToFavoritesBtn);

        apodContent.appendChild(apodContainer);
    }

    // Function to add Picture to favorites
    function addToFavorites(data) {

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];


        const isAlreadyInFavorites = favorites.some(favorite => favorite.url === data.url);

        if (!isAlreadyInFavorites) {
            // Add to favorites array
            favorites.push({
                title: data.title,
                date: data.date,
                url: data.url,
            });

            // Update local storage
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // Call the function to display favorites Picture
            displayFavorites();
        } else {
            alert('Picture is already in favorites!');
        }
    }

    // Function to remove Picture from favorites
    function removeFromFavorites(url) {
        // Get favorites from local storage or initialize an empty array
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Filter out the APOD with the specified URL
        const updatedFavorites = favorites.filter(favorite => favorite.url !== url);

        // Update local storage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        // Call the function to display favorites
        displayFavorites();
    }

    // Function to display favorites
    function displayFavorites() {
        favoritesContent.innerHTML = '';

        // Get favorites from local storage or initialize an empty array
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (favorites.length === 0) {
            favoritesContent.textContent = 'No favorites saved.';
        } else {
            favorites.forEach(favorite => {
                const favoriteContainer = document.createElement('div');
                favoriteContainer.classList.add('favorite-container');

                const title = document.createElement('h2');
                title.textContent = favorite.title;

                const date = document.createElement('p');
                date.textContent = `Date: ${favorite.date}`;

                const favoriteImage = document.createElement('img');
                favoriteImage.src = favorite.url;
                favoriteImage.alt = favorite.title;

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove from Favorites';
                removeButton.addEventListener('click', function () {
                    removeFromFavorites(favorite.url);
                });

                favoriteContainer.appendChild(title);
                favoriteContainer.appendChild(date);
                favoriteContainer.appendChild(favoriteImage);
                favoriteContainer.appendChild(removeButton);

                favoritesContent.appendChild(favoriteContainer);
            });
        }
    }

    // Function to display favorites
    displayFavorites();
});
