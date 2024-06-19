function shapes(data) {
  return `
  <svg viewBox="0 0 100 100"
     width="100%" height="100%" 
     xmlns="http://www.w3.org/2000/svg">

    <circle cx="50" cy="50" r="25" fill="${data.shapeColor}" />

    <text x="50" y="55" font-size="15" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

  </svg>
  `
}

module.exports = shapes