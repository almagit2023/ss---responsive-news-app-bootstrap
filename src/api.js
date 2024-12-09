import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://newsapi90.p.rapidapi.com/trendingTopics',
  params: { region: 'US' },
  headers: {
    'x-rapidapi-key': 'e8ce9c09b4mshccfe3fbbc62f864p1630e1jsn68bbae2d8317',
    'x-rapidapi-host': 'newsapi90.p.rapidapi.com',
  },
};

export const fetchTrendingTopics = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
