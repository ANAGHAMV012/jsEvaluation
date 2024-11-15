// async fetchData(urls){
//     const promises = urls.map(url => fetch(url))
//     const responses = await Promise.all(promises);
//     const data = await Promise.all(responses.map(response => response.json()));
//     return data
// }

// const urlsToFetch = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://random-data-api.com/api/v2/blood_types',
//     ];
    
//     // // Function to fetch all of the URLs in parallel
//     // const fetchURLs = async (urls) => {
//     //     try {
//     //         const promises =
//     //             urls.map(url => fetch(url));
    
//     //         // Wait for all of the promises to resolve
//     //         const responses =
//     //             await Promise.all(promises);
    
//     //         // Extract JSON data from responses
//     //         const data = await
//     //             Promise.all(responses.map(response => response.json()));
    
//     //         return data}
//     //     catch (error) {
//     //         throw new Error(`Failed to fetch data: ${error}`)}}
    
//     fetchData(urlsToFetch)
//         .then(data => {
//             console.log(data)})
//         .catch(error => {
//             console.error(error)});