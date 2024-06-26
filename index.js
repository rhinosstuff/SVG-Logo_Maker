// Gets file system & inquirer packages. And local generateLogo.js.
const fs = require('fs')
const inquirer = require('inquirer')
const generateLogo = require('./lib/generateLogo')

function writeToFile(fileName, data) {
  // Creates the html for the logo
  const logo = generateLogo(data)

  // Writes the logo html to the supplied path and file name
  fs.writeFile(fileName, logo, (err) =>
    err ? console.log(err) : console.log(`Generated ${data.text}.svg`)
  )
}

// prompts the user through a series of questions
inquirer
  .prompt([
    {
      type: 'input',
      message: `Logo Text: (Max of 3 Characters)`,
      name: 'text',
      // Checks that at least 1 character is entered but no more than 3
      validate: function(input) {
        return input.length < 4 && input.length > 0 ? true : 'Please enter some text - max of 3 characters'
      }
    },
    {
      type: 'input',
      message: `Text Color: (Color Keyword or Hexadecimal)`,
      name: 'textColor',
      // Makes sure the user enters a color
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
      // Makes sure the user enters a color
      validate: function(input) {
        return input ? true : 'Please enter a color'
      }
    }
  ])
  .then((data) => {
    // Provides the directory path and creates .svg file name based off the user input text 
    const filename = `./examples/${data.text}.svg`
    writeToFile(filename, data)
  })