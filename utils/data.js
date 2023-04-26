async function getData() {
  const cachedData = localStorage.getItem('data');
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  console.log("fetching data...");
  const response = await fetch('https://fe-task-api.mainstack.io/');
  const { graph_data: { views } } = await response.json();
  // Store dates
  const transformedDates = [];
  const points = []
  // Loop through the keys in the views object
  for (const dateStr in views) {
    const date = new Date(dateStr);
    // Format the date string using toLocaleString() method
    const formattedDate = `${date.getDate()}${getOrdinalSuffix(date.getDate())} ${date.toLocaleString('en-us', { month: 'short' })}`;
    transformedDates.push(formattedDate);
  }
  // Function to get the ordinal suffix for a given number
  function getOrdinalSuffix(number) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const mod100 = number % 100;
    const mod10 = number % 10;
    return (mod10 <= 3 && mod100 !== 11 && mod100 !== 12 && mod100 !== 13) ? suffixes[mod10] : suffixes[0];
  }

  for (let key in views) {
    points.push(views[key])
  }

  const data = { transformedDates, points };
  localStorage.setItem('data', JSON.stringify(data));
  return data;
}

async function getLocationData() {
  const cachedData = localStorage.getItem('locationData');
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  console.log("fetching data...");
  const response = await fetch('https://fe-task-api.mainstack.io/');
  const data = await response.json();
  const countries = data.top_locations.map(location => location.country);
  const counts = data.top_locations.map(location => location.count);
  const percents = data.top_locations.map(location => location.percent);
  const locationData = { countries, counts, percents };
  localStorage.setItem('locationData', JSON.stringify(locationData));
  return locationData;
}

async function getMedia() {
  const cachedData = localStorage.getItem('mediaData');
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  console.log("fetching data...");
  const response = await fetch('https://fe-task-api.mainstack.io/');
  const data = await response.json();
  const sourceData = data.top_sources.map(soor => soor.source)
  const sourceCount = data.top_sources.map(soor => soor.count)
  const sourcePercent = data.top_sources.map(soor => soor.percent)
  const mediaData = { sourceData, sourceCount, sourcePercent };
  localStorage.setItem('mediaData', JSON.stringify(mediaData));
  return mediaData;

}

export { getData, getLocationData, getMedia }