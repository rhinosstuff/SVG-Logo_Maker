// requireing classes from the shapes.js file
const { Circle, Square, Triangle } = require('./shapes')

//tests shape fill color for all shapes
describe('Shapes', () => {
  
  describe('Circle', () => {
    it('should render a circle with a red fill color', () => {
      const shape = new Circle()
        
      expect(shape.setShapeColor("red")).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
    })
  })

  describe('Square', () => {
    it('should render a square with a white fill color', () => {
      const shape = new Square()
        
      expect(shape.setShapeColor("white")).toEqual('<rect x="70" y="20" width="160" height="160" fill="white" />')
    })
  })

  describe('Triangle', () => {
    it('should render a triangle with a blue fill color', () => {
      const shape = new Triangle()
        
      expect(shape.setShapeColor("blue")).toEqual('<polygon points="150,20 40,180 260,180" fill="blue" />')
    })
  })

})