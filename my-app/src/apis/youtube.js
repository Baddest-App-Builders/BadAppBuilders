import axios from 'axios';
const KEY = process.env.REACT_APP_GOOGLEAPIKEY

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
})
