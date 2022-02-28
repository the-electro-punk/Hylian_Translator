let sentence = document.getElementById("inputBox")
let results = document.getElementById("resultBox")

const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']

const LBW = ['./images/Letters-(LBW)/A.png', './images/Letters-(LBW)/B.png', './images/Letters-(LBW)/C.png','./images/Letters-(LBW)/D.png','./images/Letters-(LBW)/E.png','./images/Letters-(LBW)/F.png','./images/Letters-(LBW)/D.png','./images/Letters-(LBW)/H.png','./images/Letters-(LBW)/I.png','./images/Letters-(LBW)/J.png','./images/Letters-(LBW)/K.png','./images/Letters-(LBW)/L.png','./images/Letters-(LBW)/M.png','./images/Letters-(LBW)/N.png','./images/Letters-(LBW)/O.png','./images/Letters-(LBW)/P.png','./images/Letters-(LBW)/Q.png','./images/Letters-(LBW)/F.png','./images/Letters-(LBW)/S.png','./images/Letters-(LBW)/J.png','./images/Letters-(LBW)/U.png','./images/Letters-(LBW)/V.png','./images/Letters-(LBW)/E.png','./images/Letters-(LBW)/X.png','./images/Letters-(LBW)/Y.png','./images/Letters-(LBW)/O.png','./images/Letters-(LBW)/space.png']

const SS = ['./images/Letters-(SS)/A.png','./images/Letters-(SS)/B.png','./images/Letters-(SS)/C.png', './images/Letters-(SS)/D.png', './images/Letters-(SS)/E.png', './images/Letters-(SS)/F.png', './images/Letters-(SS)/G.png', './images/Letters-(SS)/H.png', './images/Letters-(SS)/I.png', './images/Letters-(SS)/J.png', './images/Letters-(SS)/E.png', './images/Letters-(SS)/L.png', './images/Letters-(SS)/M.png', './images/Letters-(SS)/N.png', './images/Letters-(SS)/O.png', './images/Letters-(SS)/P.png', './images/Letters-(SS)/G.png', './images/Letters-(SS)/R.png', './images/Letters-(SS)/S.png', './images/Letters-(SS)/P.png', './images/Letters-(SS)/U.png', './images/Letters-(SS)/V.png', './images/Letters-(SS)/D.png', './images/Letters-(SS)/I.png', './images/Letters-(SS)/Y.png', './images/Letters-(SS)/O.png', './images/Letters-(SS)/space.png']

const textBTN = document.getElementById("textBTN")
const gameSelect = document.getElementById('selectBTN')

textBTN.addEventListener('click', translate)

let clicks = 0

function array() {
    for (i = 0; i < LBW.length; i++) {
        console.log(LBW[i])
    }
}

function translate() {
    if (sentence.value != "") {
        clicks++
    }
    console.log('# of clicks is ' + clicks)
    let content = sentence.value 
    console.log("input is " + sentence.value)
    
    // if elements inside results, clear before creating more

    if (gameSelect.value === "Link Between Worlds" && gameSelect.value != "Skyward Sword") {
        // let elem = document.createElement('img')
        
        for (var i = 0; i < content.length; i++) {

            let elem = document.createElement('img')
            // results.removeChild(elem)
            
            // this searches the alpha array for the specific letter at each point of the word/phrase
            // x will be the spot in the array where each specific letter is located and is used to match it with the correct img in the other arrays
            let x = alpha.indexOf(content.charAt(i).toUpperCase())
            console.log("x = " + x)
            console.log('in ' + x + ' spot is ' + alpha[x])

            // charAt specifies the specific letter (first, second, third...) 
            // while indexOf searches for it within the array of Hylian letters
                if (alpha.indexOf(content.charAt(i) != -1)) {
                    // let elem = document.createElement('img')
                    elem.setAttribute("src",LBW[x])
                    elem.setAttribute("height","72")
                    elem.setAttribute("width","54")
                    elem.id = 'LBWhylian'
                    results.appendChild(elem)

                    // results.addEventListener('change', recognizeText)
                    // console.log(results.value)
                }
            // else {
            //     elem.setAttribute("src",LBW[x])
            //     elem.setAttribute("height","72")
            //     elem.setAttribute("width","54")
            //     elem.id = 'LBWhylian'
            //     results.replaceChild(elem)
            // }
        console.log(results.value)
    }

    if (gameSelect.value === "Skyward Sword" && gameSelect.value != "Link Between Worlds") {
        // let elem = document.createElement('img')
        for (var i = 0; i < content.length; i++) {
            let elem = document.createElement('img')
            if (clicks > 1 && content != null) {
                results.replaceWith(elem, elem)
            }
            let x = alpha.indexOf(content.charAt(i).toUpperCase())
            console.log("x = " + x)
            console.log('in ' + x + ' spot is ' + alpha[x])

            if (alpha.indexOf(content.charAt(i) != -1)) {
                // let elem = document.createElement('img')
                elem.setAttribute("src",SS[x])
                elem.setAttribute("height","72")
                elem.setAttribute("width","72")
                results.appendChild(elem)
            }
            else if (alpha.indexOf(content.charAt(i) === -1)) {
                // let elem = document.createElement('img')
                elem.setAttribute("src",'./images/Letters-(SS)/-1.png')
                elem.setAttribute("height","72")
                elem.setAttribute("width","54")
                results.replaceChild(elem,elem)
            }
            }
        }
    }
}
