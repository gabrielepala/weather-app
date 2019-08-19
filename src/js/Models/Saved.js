import { key, proxy } from '../config';

export default class Saved {
  constructor() {
    this.saved = [];
  }

  // Add a new location
  addLocation(id) {
    // 1. Add new location id to saved object
    this.saved.push(id);

    // 2. Save to localstorage
    this.saveLocal();

    return id;
  }

  // Remove all
  deleteAllLocations() {
    this.saved = [];

    // update localstorage
    this.saveLocal();
  }

  // Remove a favorite location
  deleteLocation(id) {
    const index = this.saved.findIndex(el => el === id);

    // 1. Remove from array of saved
    this.saved.splice(index, 1);

    // 2. update localstorage
    this.saveLocal();
  }

  // Check if location is favorite already
  checkifSaved(id) {
    return this.saved.findIndex(el => el === id) !== -1;
  }

  checkSaved() {
    return this.saved.length;
  }

  // Save to local storage
  saveLocal() {
    localStorage.setItem('savedlocations', JSON.stringify(this.saved));
  }

  // Read data from local storage
  readLocal() {
    const saved = JSON.parse(localStorage.getItem('savedlocations'));

    if (saved) this.saved = saved;
  }
}
