database = []
// Fetch data from the travel_recommendation_api.json file using the fetch API method,
try {
    console.log('Fetching data...');
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            database = data;
            console.log('Data fetched successfully:', database);
        });
} catch (error) {
    console.error('Error fetching data:', error.message);
}

// Create a class to represent a travel recommendation
class TravelRecommendation {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

// Attach search event listener to the search button
document.getElementById('btnSearch').addEventListener('click', search);

//Attach clear event listener to the clear button
document.getElementById('btnClear').addEventListener('click', clearResults);

// Add event listener to select all text in input when focused
document.getElementById('conditionInput').addEventListener('focus', function () {
    this.select();
});

// Initialize an empty array to store the search results
results = []

// Function to search for travel recommendations based on user input
function search() {

    //debugger;
    console.log('Searching...');

    // Get user input from the search bar
    let userInput = document.getElementById('conditionInput').value.toLowerCase();

    if (userInput === '') {
        alert('Please enter a search term \n (countries, beaches or temples) ');
        return;
    }

    // Clear previous results
    results = [];

    // If user searches for "countries" or partial match
    if ('countries'.includes(userInput) || 'country'.includes(userInput)) {
        database.countries.forEach(country => {
            country.cities.forEach(city => {
                results.push(new TravelRecommendation(city.name, city.description, city.imageUrl));
            });
        });
        // displayResults(results);
        // return;
    }

    // If user searches for "beaches" or partial match
    if ('beaches'.includes(userInput)) {
        database.beaches.forEach(beach => {
            results.push(new TravelRecommendation(beach.name, beach.description, beach.imageUrl));
        });
        // displayResults(results);
        // return;
    }

    // If user searches for "temples" or partial match
    if ('temples'.includes(userInput)) {
        database.temples.forEach(temple => {
            results.push(new TravelRecommendation(temple.name, temple.description, temple.imageUrl));
        });
        // displayResults(results);
        // return;
    }

    displayResults(results);
    return;
}

// Display the search results
function displayResults(results) {

    console.log('Displaying search results:', results);
    // Display the search results
    // Get the search results container element
    // debugger;
    const searchResults = document.getElementById('search-results');

    // If results is empty, display a message
    if (results.length === 0) {
        searchResults.innerHTML = '<h1>No results found.</h1>';
        return;
    }

    // searchResults.style.visibility = 'visible';

    // Clear the search results container
    searchResults.innerHTML = '';
    // Loop through the search results and create a new div element for each result
    results.forEach(result => {

        // Create a new div element for the search result
        let resultDiv = document.createElement('div');
        resultDiv.classList.add('result-card');
        // Show the image
        let image = document.createElement('img');
        console.log("The image to show is at: " + result.image);
        // image.src = database.countries[0].cities[1].imageUrl; // Esto funciona
        image.src = "images/" + result.image;
        image.classList.add('result-image');
        resultDiv.appendChild(image);
        // Create a new paragraph element for the search result name
        let resultName = document.createElement('p');
        resultName.textContent = result.name;
        resultName.classList.add('result-name');
        resultDiv.appendChild(resultName);
        // Create a new paragraph element for the search result description
        let resultDescription = document.createElement('p');
        resultDescription.textContent = result.description;
        resultDescription.classList.add('result-description');
        resultDiv.appendChild(resultDescription);

        // Append a visit button
        let visitButton = document.createElement('button');
        visitButton.textContent = 'Visit';
        visitButton.classList.add('visit-button');
        resultDiv.appendChild(visitButton);

        // Append the result div to the search results container    
        searchResults.appendChild(resultDiv);

  
        // Append the result div to the search results container    
        searchResults.appendChild(resultDiv);

    })

    // Clear the search results in case the user clicks on the search bar again
    results = [];
    searchResults.style.visibility = 'visible';
}

// Clear the search results

function clearResults() {
    console.log('Clearing search results');
    // Get the search results container createElement
    const searchResults = document.getElementById('search-results');
    results = [];
    // Clear the search results container
    searchResults.innerHTML = '<h1>Please enter a valid search query</h1>';
    // searchResults.style.visibility = 'hidden';

    let conditionInput = document.getElementById('conditionInput');

    // Clear the condition input
    conditionInput.value = '';
}
