// Includes file system, inquirer and local shapes packages.
const fs = require('fs')
const inquirer = require('inquirer')
const generateLogo = require('./lib/generateLogo')

// Creates & writes to logo.svg
function writeToFile(fileName, data) {
  const logo = generateLogo(data)

  fs.writeFile(fileName, logo, (err) =>
    err ? console.log(err) : console.log(`Generated ${data.text}.svg`)
  )
}

inquirer
  .prompt([
    {
      type: 'input',
      message: `Logo Text: (Max of 3 Characters)`,
      name: 'text',
      validate: function(input) {
        return input.length < 4 && input.length > 0 ? true : 'Please enter text - max of 3 characters'
      }
    },
    {
      type: 'input',
      message: `Text Color: (Color Keyword or Hexadecimal)`,
      name: 'textColor',
      validate: function(input) {
        return input ? true : 'Please enter a color'
      }
    },
    {
      type: 'list',
      message: `Logo Shape:`,
      choices: ['circle', 'square', 'triangle'],
      name: 'shape',
    },
    {
      type: 'input',
      message: `Shape Color: (Color Keyword or Hexadecimal)`,
      name: 'shapeColor',
      validate: function(input) {
        return input ? true : 'Please enter a color'
      }
    }
  ])
  .then((data) => {
    const filename = `./examples/${data.text}.svg`
    writeToFile(filename, data)
  })