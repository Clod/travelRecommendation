// Fetch data from the travel_recommendation_api.json file using the fetch API method,
try {
    console.log('Fetching data...');
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
} catch (error) {
    console.error('Error fetching data:', error);
}