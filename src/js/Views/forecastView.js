import { elements } from './base';

// Render each result
export const renderResult = (result, container) => {
  const markup = `
    <div class="cities__weather animated fadeIn noselect">
      <div class="cities__weather__name animated fadeIn">${result.date}</div>
      <div class="cities__weather__details">
        <img
          src="./img/weather/${result.icon}.svg"
          class="cities__weather__details--icon animated fadeIn"
        />
        <div class="cities__weather__details__text">
          <div class="cities__weather__details__text--phrase animated fadeIn">
            Degrees
          </div>
          <div class="cities__weather__details__text--minmax animated fadeIn">
            ${result.temp_min}ºC <span class="dot">•</span> ${result.temp_max}ºC
          </div>
        </div>
        <div class="cities__weather__details__temp animated fadeIn">
          ${result.temp}ºC
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', markup);
};
