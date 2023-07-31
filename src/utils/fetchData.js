export const exerciseOptions = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": '8108640b0cmsh13fdccc41fbc535p1ffdc2jsn90e669fddbfb',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions  = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8108640b0cmsh13fdccc41fbc535p1ffdc2jsn90e669fddbfb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
