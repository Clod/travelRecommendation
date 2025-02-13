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
            search(); // Call search function after data is fetched
        });
} catch (error) {
    console.error('Error fetching data:', error.message);
}

// Attach search event listener to the search button
document.getElementById('btnSearch').addEventListener('click', search);

//Attach clear event listener to the clear button
document.getElementById('btnClear').addEventListener('click', clearResults);

// Add event listener to select all text in input when focused
document.getElementById('conditionInput').addEventListener('focus', function() {
    this.select();
});

// Initialize an empty array to store the search results
results = []

// Function to search for travel recommendations based on user input
function search() {
    // Get user input from the search bar
    // database.countries[0].cities[0].imageUrl es sydney.jpeg
    database.countries.forEach(country => {
        country.cities.forEach(city => {
            results.push(city);
        });
    });
    displayResults(results);
}

// Display the search results
function displayResults(results) {

    console.log('Displaying search results:', results);
    // Display the search results
    // Get the search results container element
    // debugger;
    const searchResults = document.getElementById('search-results');

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
        console.log("The image to show is at: " + result.imageUrl);
        // image.src = database.countries[0].cities[1].imageUrl; // Esto funciona
        image.src = "images/" + result.imageUrl;
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

/*
        // Create a new div element for the search result
        resultDiv = document.createElement('div');
        resultDiv.classList.add('result-card');
        // Show the image
        image = document.createElement('img');
        console.log("The image to show is at: " + result[1].imageUrl);
        // image.src = database.countries[0].cities[1].imageUrl; // Esto funciona
        image.src = result[0].imageUrl;
        image.classList.add('result-image');
        resultDiv.appendChild(image);
        // Create a new paragraph element for the search result name
        resultName = document.createElement('p');
        resultName.textContent = result[0].name;
        resultName.classList.add('result-name');
        resultDiv.appendChild(resultName);
        // Create a new paragraph element for the search result description
        resultDescription = document.createElement('p');
        resultDescription.textContent = result[0].description;
        resultDescription.classList.add('result-description');
        resultDiv.appendChild(resultDescription);

        // Append a visit button
        visitButton = document.createElement('button');
        visitButton.textContent = 'Visit';
        visitButton.classList.add('visit-button');
        resultDiv.appendChild(visitButton);
*/
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
