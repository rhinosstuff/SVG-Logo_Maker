// requireing classes from the shapes.js file
const { Circle, Square, Triangle } = require('./shapes')

//tests the text and text color for each shape
describe('Text', () => {
  
  describe('Circle', () => {
    it('should render "TNT" in red text', () => {
      const shape = new Circle()
        
      expect(shape.setText('TNT', 'red')).toEqual('<text x="150" y="115.75" font-size="45" text-anchor="middle" fill="red">TNT</text>')
    })
  })

  describe('Square', () => {
    it('should render "TNT" in white text', () => {
      const shape = new Square()
        
      expect(shape.setText('TNT', 'white')).toEqual('<text x="150" y="115.75" font-size="45" text-anchor="middle" fill="white">TNT</text>')
    })
  })

  // setText for triangle has to be given (text, textColor, x, y, fontSize) to display correctly
  describe('Triangle', () => {
    it('should render "TNT" in blue text', () => {
      const shape = new Triangle()
        
      expect(shape.setText('TNT', 'blue', 150, 131.5, 35)).toEqual('<text x="150" y="131.5" font-size="35" text-anchor="middle" fill="blue">TNT</text>')
    })
  })

})