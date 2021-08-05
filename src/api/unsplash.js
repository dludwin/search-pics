import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID motDMTL2hAQkLrNND7DoKd4nmq05Dv_MX_IlTH0o5rg',
  },
});
