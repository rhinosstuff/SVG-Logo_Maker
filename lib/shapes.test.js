const { Circle, Square, Triangle } = require('./shapes')

//tests all the shapes fill color
describe('Shapes', () => {
  
  describe('Circle', () => {
      it('should render a circle with a blue fill color', () => {
        const shape = new Circle()
          
        expect(shape.setShapeColor("blue")).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
      })
  })

  describe('Square', () => {
      it('should render a square with a red fill color', () => {
        const shape = new Square()
          
        expect(shape.setShapeColor("red")).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />')
      })
  })

  describe('Triangle', () => {
      it('should render a triangle with a green fill color', () => {
        const shape = new Triangle()
          
        expect(shape.setShapeColor("green")).toEqual('<polygon points="150,20 40,180 260,180" fill="green" />')
      })
  })

})