import chalk from 'chalk'

const columns = []
const screenWidth = process.stdout.columns
const screenHeight = process.stdout.rows

for (let i = 0; i < screenWidth; i++) {
  columns[i] = Math.floor(Math.random() * screenHeight)
}

function getRandomChar () {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}[]'
  return chars.charAt(Math.floor(Math.random() * chars.length))
}

function updateMatrix () {
  console.clear()

  for (let y = 0; y < screenHeight; y++) {
    let line = ''
    for (let x = 0; x < screenWidth; x++) {
      if (y === columns[x]) {
        line += chalk.green(getRandomChar())
      } else {
        line += ' '
      }
    }
    console.log(line)
  }

  for (let i = 0; i < columns.length; i++) {
    if (Math.random() > 0.975) {
      columns[i] = 0
    } else {
      columns[i]++
      if (columns[i] >= screenHeight) {
        columns[i] = 0
      }
    }
  }
}

setInterval(updateMatrix, 100)
