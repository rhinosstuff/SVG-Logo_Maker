function shapes(data) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="100%" height="100%"
    viewBox="0 0 300 200">

    <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />

    <text x="150" y="115.75" font-size="45" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

  </svg>
  `
}

module.exports = shapes