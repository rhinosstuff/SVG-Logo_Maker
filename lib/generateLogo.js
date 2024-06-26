const { Circle, Square, Triangle } = require('./shapes')

function generateLogo(data) {
  let shape = {}
  if (data.shape === 'circle') {
    shape = new Circle(data.shapeColor, data.text, data.textColor)
  } else if (data.shape === 'square') {
    shape = new Square(data.shapeColor, data.text, data.textColor)
  } else if (data.shape === 'triangle') {
    shape = new Triangle(data.shapeColor, data.text, data.textColor)
  }
  
  return `
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="100%" height="100%"
    viewBox="0 0 300 200">

    ${shape.render()}    
  </svg>
  `
}

module.exports = generateLogo