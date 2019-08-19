import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  // Get results from query
  async getResults() {
    try {
      const res = await axios(
        `${proxy}https://get-cities-ids.herokuapp.com/?q=${this.query}`
      );
      // Save the data on the object
      this.results = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}
