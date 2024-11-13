async function fetchData(urls){
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    const data = await Promise.all(promises);
    return data
}
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://random-data-api.com/api/v2/blood_types',
];

fetchURLs(urls)
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    });