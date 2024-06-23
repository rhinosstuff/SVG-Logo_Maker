// Includes file system, inquirer and local shapes packages.
const fs = require('fs')
const inquirer = require('inquirer')
const shapes = require('./lib/shapes')

// Creates & writes to logo.svg
function writeToFile(fileName, data) {
  const logo = shapes(data)
  
  fs.writeFile(fileName, logo, (err) =>
    err ? console.log(err) : console.log(`Generated ${data.text}_logo.svg`)
  )
}

inquirer
  .prompt([
    {
      type: 'input',
      message: `Enter up to 3 characters to represent your company name - Logo Text:`,
      name: 'text',
    },
    {
      type: 'input',
      message: `Enter a color or hexadecimal number - Text Color:`,
      name: 'textColor',
    },
    {
      type: 'list',
      message: `Logo Shape:`,
      choices: ['circle', 'triangle', 'square'],
      name: 'shape',
    },
    {
      type: 'input',
      message: `Enter a color or hexadecimal number - Shape Color:`,
      name: 'shapeColor',
    }
  ])
  .then((data) => {
    const filename = `./examples/${data.text}_logo.svg`
    writeToFile(filename, data)
  })