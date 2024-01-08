
const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");
const getBtn = document.querySelector("form button");
const exIcon = document.querySelector("form .reverse");
const amount = document.querySelector("form input");
const exRateTxt = document.querySelector("form .result");


// Populate dropdowns with currency codes and set default values
function populateDropdowns() {
    [fromCur, toCur].forEach((select, i) => {
        for (let curCode in Country_List) {
            const selected = (i === 0 && curCode === "USD") || (i === 1 && curCode === "CAD") ? "selected" : "";
            select.insertAdjacentHTML("beforeend", `<option value="${curCode}" ${selected}>${curCode}</option>`);
        }
    });
}

// Update flag image based on selected currency
function updateFlagImage(select) {
    const code = select.value;
    const imgTag = select.parentElement.querySelector("img");
    imgTag.src = `https://flagcdn.com/48x36/${Country_List[code].toLowerCase()}.png`;
}

// Fetch exchange rate from API
async function getExchangeRate() {
    const amountVal = parseFloat(amount.value) || 1;
    exRateTxt.innerText = "Getting exchange rate...";

    var myHeaders = new Headers();
    myHeaders.append("apikey", "59xJt3cWsHVuXKtJAgO9a2RgMDVC6Gwy");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    try {
        const response = await fetch(`https://api.apilayer.com/currency_data/live?source=${fromCur.value}&currencies=${toCur.value}`, requestOptions);
        if (!response.ok) throw new Error('Network response was not ok.');

        const result = await response.json();
        const exchangeRate = result.quotes[`${fromCur.value}${toCur.value}`];
        const totalExRate = (amountVal * exchangeRate).toFixed(2);

        exRateTxt.innerText = `${amountVal} ${fromCur.value} = ${totalExRate} ${toCur.value}`;
    } catch (error) {
        exRateTxt.innerText = `Error: ${error.message}`;
    }
}
// Initialize event listeners
function initEventListeners() {
    [fromCur, toCur].forEach(select => {
        select.addEventListener("change", () => updateFlagImage(select));
    });

    window.addEventListener("load", getExchangeRate);
    getBtn.addEventListener("click", (e) => {
        e.preventDefault();
        getExchangeRate();
    });

    exIcon.addEventListener("click", () => {
        [fromCur.value, toCur.value] = [toCur.value, fromCur.value];
        [fromCur, toCur].forEach(updateFlagImage);
        getExchangeRate();
    });
}

// Initialize the application
function init() {
    populateDropdowns();
    initEventListeners();
}

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const container = document.getElementById('container');
    const menuButton = document.getElementById('menu');
    const links = document.querySelectorAll('a[href^="#"]');

    // Function to handle the scroll
    function handleScroll() {
        container.classList.remove('menuopen');
        header.classList.toggle('sticky', window.scrollY >= 100);
    }

    // Function to handle menu button click
    function handleMenuButtonClick() {
        header.classList.remove('sticky');
        container.classList.toggle('menuopen');
    }

    // Function to handle anchor links click
    function handleLinkClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Function to close the menu when clicking outside and show the sticky menu
    function handleCloseOutside(event) {
        if (!menuButton.contains(event.target)) {
            // Check if the click was outside the menu button
            container.classList.remove('menuopen');
            header.classList.add('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
    menuButton.addEventListener('click', handleMenuButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    // Listen for clicks anywhere in document
    document.addEventListener('click', handleCloseOutside);
});


//News feed
const rssFeedUrl = 'http://feeds.bbci.co.uk/news/rss.xml';
const maxCount = 10;

// Fetch the RSS feed
fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`)
    .then(response => response.json())
    .then(data => {
        // Display the news feed
        const feedContainer = document.getElementById('newsFeed');
        data.items.slice(0, maxCount).forEach(item => {
            const article = document.createElement('div');
            article.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p id="dateFeed">${item.pubDate}</p>
                <a href="${item.link}" target="_blank">Read more</a><br>
                ------------------------------------
            `;
            feedContainer.appendChild(article);
        });
    })
    .catch(error => console.error('Error fetching RSS feed:', error));

init();


const apiKey = '5f53de91-d201-4f18-8534-c2f1a0b5b30b';
const apiUrl = `https://content.guardianapis.com/search?section=business&tag=business/business&api-key=${apiKey}`;
const newsList = document.getElementById('news-list');

async function getNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.response && data.response.results.length > 0) {
            data.response.results.forEach(article => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${article.webTitle}</h3>
                    <p>${article.webPublicationDate}</p>
                    <a href="${article.webUrl}" target="_blank">Read more</a>
                `;
                newsList.appendChild(li);
            });
        } else {
            newsList.innerHTML = '<li>No news available</li>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        newsList.innerHTML = '<li>Failed to fetch news</li>';
    }
}

getNews();
