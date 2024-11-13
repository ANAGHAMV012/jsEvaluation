function fetchData(urls){
  const URL = [
    {
      name: 'site1',
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    },
    {
      name: 'site2',
      url: 'https://something'
    },
    {
      name: 'site3',
      url: 'https://something'
    }
  ]
  
  const fetchURLs = async (urls) => {
      try {
          const promises =
              urls.map(url => fetch(url));
  
          const responses =
              await Promise.all(promises);
  
          const data = await
              Promise.all(responses.map(response => response.json()));
  
          return data
      }
      catch (error) {
          throw new Error(`Failed to fetch data: ${error}`)
      }
  }
  fetchURLs(URL)
  .then(data => {
      console.log('Fetched data:', data)
  })
  .catch(error => {
      console.error('Error fetching data:', error)
  });
}
fetchData()