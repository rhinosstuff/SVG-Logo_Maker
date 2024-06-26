// Shape contains all the universal information for all shapes
// setText has variables that can be altered to help with text postion and size for better displaying
class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor
    this.text = text
    this.textColor = textColor
  }
  setText(text, textColor, x = 150, y = 115.75, fontSize = 45) {
    return `<text x="${x}" y="${y}" font-size="${fontSize}" text-anchor="middle" fill="${textColor}">${text}</text>`
  }
}

// Creates a circle logo
class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  setShapeColor (shapeColor) {
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
  }
  render () {
    return `
    ${this.setShapeColor(this.shapeColor)}
    ${this.setText(this.text, this.textColor)}`
  }
}

// Creates a square logo
class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  setShapeColor (shapeColor) {
    return `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`
  }
  render () {
    return `
    ${this.setShapeColor(this.shapeColor)}
    ${this.setText(this.text, this.textColor)}`
  }
}

// Creates a triangle logo
// setText is given text postitions and size for better displaying
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  setShapeColor (shapeColor) {
    return `<polygon points="150,20 40,180 260,180" fill="${shapeColor}" />`
  }
  render () {
    return `
    ${this.setShapeColor(this.shapeColor)}
    ${this.setText(this.text, this.textColor, 150, 131.5, 35)}`
  }  
}

// Classes Circle, Square, Triangle are exported from the file.
module.exports = { Circle, Square, Triangle }