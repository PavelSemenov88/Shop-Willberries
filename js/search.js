'use strict';

const search = () => {
  const input = document.querySelector('.search-block > input');
  const searchBtn = document.querySelector('.search-block > button');
  
  try {
    searchBtn.addEventListener('click', () => {
      console.log(input.value);
    })
  } catch (e) {
    console.error(e.message);
  }
}
search();