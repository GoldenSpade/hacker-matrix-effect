# Hacker Matrix Effect

This project simulates the "falling code" effect seen in the movie The Matrix using Node.js. 

The script continuously displays random characters that fall down the terminal screen, resembling the iconic hacker-style visuals from the film.

Here's an example of how the effect looks in action:

![Matrix Effect Screenshot](https://github.com/GoldenSpade/hacker-matrix-script/raw/master/img/img.jpg)

## Features ##

- Simulates "falling" random characters in terminal
- Uses `chalk` for coloring the characters in green, like the Matrix code
- Dynamically adjusts to your terminal's width and height
- Simple and minimalistic

## How to Use

**1. Clone the repository:**

git clone https://github.com/GoldenSpade/hacker-matrix-script.git
   
**2.Navigate to the project directory**

cd hacker-matrix-effect

**3. Make sure you have Node.js installed, then run:**
   
npm install

**4. Run the script:**

node hackerMatrix.js

## Requirements ##

* Node.js (v14.0.0 or higher)
*  chalk (installed automatically via npm install)

![Matrix Effect Screenshot](https://github.com/GoldenSpade/hacker-matrix-script/raw/master/img/img.gif)

Customization
You can modify the character set used in the falling code by editing the getRandomChar() function in the hackerMatrix.js file.
