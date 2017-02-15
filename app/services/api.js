import axios from 'axios';	
import Config from 'react-native-config';

class API{
  constructor() {
    this.api = axios.create({
      baseURL: Config.API_BASE,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  login = (username, password) => (
  	this.api.get('/users/1')
  )
}

const api = new API();

export default api;
