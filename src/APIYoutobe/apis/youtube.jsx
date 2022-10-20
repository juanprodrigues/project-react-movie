import axios from 'axios'

const KEY = 'AIzaSyDjOcMn7whr_nFfaMNSR8kN12XBPtmPuyU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

