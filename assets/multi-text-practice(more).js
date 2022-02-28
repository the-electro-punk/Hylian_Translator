// this takes what the user typed in the input field and makes it a variable
let sentence = document.getElementById("inputBox")
// this takes the result box and turns it into a variable
let results = document.getElementById("resultBox")

// these arrays were created to better organize/streamline the translation process
// this way, the code merely matches letters in the array instead of creating code for each specific letter
const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']

// these arrays contain links to the images for each hylian letter so that they can be placed in the results box
const LBW = ['./images/Letters-(LBW)/A.png', './images/Letters-(LBW)/B.png', './images/Letters-(LBW)/C.png','./images/Letters-(LBW)/D.png','./images/Letters-(LBW)/E.png','./images/Letters-(LBW)/F.png','./images/Letters-(LBW)/D.png','./images/Letters-(LBW)/H.png','./images/Letters-(LBW)/I.png','./images/Letters-(LBW)/J.png','./images/Letters-(LBW)/K.png','./images/Letters-(LBW)/L.png','./images/Letters-(LBW)/M.png','./images/Letters-(LBW)/N.png','./images/Letters-(LBW)/O.png','./images/Letters-(LBW)/P.png','./images/Letters-(LBW)/Q.png','./images/Letters-(LBW)/F.png','./images/Letters-(LBW)/S.png','./images/Letters-(LBW)/J.png','./images/Letters-(LBW)/U.png','./images/Letters-(LBW)/V.png','./images/Letters-(LBW)/E.png','./images/Letters-(LBW)/X.png','./images/Letters-(LBW)/Y.png','./images/Letters-(LBW)/O.png','./images/Letters-(LBW)/space.png']

const SS = ['./images/Letters-(SS)/A.png','./images/Letters-(SS)/B.png','./images/Letters-(SS)/C.png', './images/Letters-(SS)/D.png', './images/Letters-(SS)/E.png', './images/Letters-(SS)/F.png', './images/Letters-(SS)/G.png', './images/Letters-(SS)/H.png', './images/Letters-(SS)/I.png', './images/Letters-(SS)/J.png', './images/Letters-(SS)/E.png', './images/Letters-(SS)/L.png', './images/Letters-(SS)/M.png', './images/Letters-(SS)/N.png', './images/Letters-(SS)/O.png', './images/Letters-(SS)/P.png', './images/Letters-(SS)/G.png', './images/Letters-(SS)/R.png', './images/Letters-(SS)/S.png', './images/Letters-(SS)/P.png', './images/Letters-(SS)/U.png', './images/Letters-(SS)/V.png', './images/Letters-(SS)/D.png', './images/Letters-(SS)/I.png', './images/Letters-(SS)/Y.png', './images/Letters-(SS)/O.png', './images/Letters-(SS)/space.png']

// these are the buttons on the webpage turned into varables
const textBTN = document.getElementById("textBTN")
const gameSelect = document.getElementById('selectBTN')

textBTN.addEventListener('click', translate)

let clicks = 0

function array() {
    for (i = 0; i < LBW.length; i++) {
        console.log(LBW[i])
    }
}

// this code translates the written text into hylian
function translate() {
    if (sentence.value != "") {
        clicks++
    }
    console.log('# of clicks is ' + clicks)
    // I've taken the sentence variable (which is what the user typed into the input field)
    // and made it into a second variable that only exists within this function
    let content = sentence.value 
    console.log("input is " + sentence.value)


    if (gameSelect.value === "Link Between Worlds" && gameSelect.value != "Skyward Sword") {

        // this removes the previous text so it can be replaced
        results.innerHTML = ""

        // the for loop is used to scan each individual letter typed in the input field and converts it into hylian
        for (var i = 0; i < content.length; i++) {            
            // this code searches the alpha array for the specific letter at each point of the word/phrase
            // charAt refers to the specific letter within a word while indexOf finds the specific location within an array
            // x will be the spot in the array where each specific letter is located and is used to match it with the correct img in the hylian arrays
            let x = alpha.indexOf(content.charAt(i).toUpperCase())
            console.log("x = " + x)
            console.log('in ' + x + ' spot is ' + alpha[x])

            if (alpha.indexOf(content.charAt(i) != -1)) {
                // this creates an image element to be placed in the results box
                let elem = document.createElement('img')

                // this takes an image file from the "LBW" array and places it within the results box
                elem.setAttribute("src",LBW[x])
                elem.setAttribute("height","72")
                elem.setAttribute("width","54")
                elem.id = 'LBWhylian'

                results.appendChild(elem)
            }
        }
    }

    if (gameSelect.value === "Skyward Sword" && gameSelect.value != "Link Between Worlds") {
        // let elem = document.createElement('img')
        results.innerHTML = ""

        for (var i = 0; i < content.length; i++) {
            let x = alpha.indexOf(content.charAt(i).toUpperCase())
            console.log("x = " + x)
            console.log('in ' + x + ' spot is ' + alpha[x])

            if (alpha.indexOf(content.charAt(i) != -1)) {
                let elem = document.createElement('img')

                elem.setAttribute("src",SS[x])
                elem.setAttribute("height","72")
                elem.setAttribute("width","72")
                results.appendChild(elem)
            }
        }
    }
}
