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
    console.error('Error fetching data:', error);
}

// Attach search event listener to the search button   
document.getElementById('btnSearch').addEventListener('click', search);

//Attach clear event listener to the clear button
document.getElementById('btnClear').addEventListener('click', clearResults);

// Function to search for travel recommendations based on user input

function search() {
    // Initialize an empty array to store the search results
    results = []
    // Get user input from the search bar
    // database.countries[0].cities[0].imageUrl es sydney.jpeg
    results.push(database.countries[0].cities);
    displayResults(results);
 
}

// Display the search results
function displayResults(results) {

    console.log('Displaying search results:', results);
    // Display the search results
    // Get the search results container element
    // debugger;
    const searchResults = document.getElementById('search-results');

    // Clear the search results container
    searchResults.innerHTML = '';
    // Loop through the search results and create a new div element for each result
    results.forEach(result => {

        console.log(result);
        // debugger;
        // Create a new div element for the search result
        const resultDiv = document.createElement('div');
        // Show the image
        const image = document.createElement('img');
        console.log("The image to show is at: " + result[1].imageUrl);
        // image.src = database.countries[0].cities[1].imageUrl; // Esto funciona
        image.src = result[1].imageUrl;
        resultDiv.appendChild(image);
        // Set the inner HTML of the result div to the search result
        //resultDiv.innerHTML = result.name;
        // Append the result div to the search results container    
        searchResults.appendChild(resultDiv);
    
    })

}

// Clear the search results

function clearResults() {
    console.log('Clearing search results');
    // Get the search results container createElement
    const searchResults = document.getElementById('search-results');
    // Clear the search results container
    searchResults.innerHTML = '';
}