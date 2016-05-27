# Fultonizer

## What is This?

This is a piece of JavaScript that replaces all of the `<img>` tags on a website with an image of your choice and generates a bookmarklet for you!

## Demo

Use this bookmarklet to use Fultonizer:

`javascript:(function()%7Bvar%20url%20%3D%20prompt(%22Please%20specify%20a%20URL%20to%20use%20for%20the%20bookmarklet%22)%3Bvar%20code%20%3D%20(%22javascript%3Avoid%2520function()%7Bfor(var%2520e%3Ddocument.getElementsByTagName(%2522img%2522)%2Ct%3D0%2Ci%3De.length%3Bi%253Et%3Bt%2B%2B)e%5Bt%5D.src%3D%2522%22%20%2B%20url%20%2B%20%22%2522%7D()%3B%22)%3Bprompt(%22Here%20is%20your%20bookmarklet%20code!%22%2C%22javascript%3Avoid%2520function()%7Bfor(var%2520e%3Ddocument.getElementsByTagName(%2522img%2522)%2Ct%3D0%2Ci%3De.length%3Bi%253Et%3Bt%2B%2B)e%5Bt%5D.src%3D%2522%22%20%2B%20url%20%2B%20%22%2522%7D()%3B%22)%3Bwindow.open(code%2C%22_self%22)%7D)()`

## License

You have full rights to use this code for any purpose, commercial or no, as long as attribution is given and you link back to https://j-co.ga/ (my site).
