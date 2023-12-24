const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')
const loadingPercentage = document.querySelector('.loading-percentage')

const interval = setInterval(() => loading(), 20)
const loading = () => {
  let load = parseInt(loadingPercentage.textContent)
  load++
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  loadingPercentage.innerText = load

  if (load === 100) clearInterval(interval)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
