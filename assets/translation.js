let sentence = document.getElementById("inputBox")
const textBTN = document.getElementById("textBTN")
const resetBTN = document.getElementById('clearBTN')
let results = document.getElementById("resultBox")

textBTN.addEventListener('click', translation)

resetBTN.addEventListener('click', clearSCRN)

// use array to house hylian letters???
const LbW = ["./images/A.png","./images/B.png","./images/C.png"]

function clearSCRN() {
    window.reload
}

function translation() {
    let content = sentence.value
    console.log('length is ' + content.length)
    // if (results.value != null) {
    //     results.removeChild(results)
    // }
    for (var i = 0; i < content.length; i++) {
        let elem = document.createElement('img')
        console.log(content.charAt(i) + '/ i = ' + i)
        if (content.charAt(i) === 'A' || content.charAt(i) === 'a') {
            elem.setAttribute("src","./images/A.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'B' || content.charAt(i) === 'b') {
            elem.setAttribute("src","./images/B.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'C' || content.charAt(i) === 'c') {
            elem.setAttribute("src","./images/C.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'D' || content.charAt(i) === 'd') {
            elem.setAttribute("src","./images/D.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'E' || content.charAt(i) === 'e') {
            elem.setAttribute("src","./images/E.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'F' || content.charAt(i) === 'f') {
            elem.setAttribute("src","./images/F.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'G' || content.charAt(i) === 'g') {
            elem.setAttribute("src","./images/D.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'H' || content.charAt(i) === 'h') {
            elem.setAttribute("src","./images/H.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'I' || content.charAt(i) === 'i') {
            elem.setAttribute("src","./images/I.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'J' || content.charAt(i) === 'j') {
            elem.setAttribute("src","./images/J.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'K' || content.charAt(i) === 'k') {
            elem.setAttribute("src","./images/K.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'L' || content.charAt(i) === 'l') {
            elem.setAttribute("src","./images/L.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'M' || content.charAt(i) === 'm') {
            elem.setAttribute("src","./images/M.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'N' || content.charAt(i) === 'n') {
            elem.setAttribute("src","./images/N.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'O' || content.charAt(i) === 'o') {
            elem.setAttribute("src","./images/O.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'P' || content.charAt(i) === 'p') {
            elem.setAttribute("src","./images/P.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'Q' || content.charAt(i) === 'q') {
            elem.setAttribute("src","./images/Q.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'R' || content.charAt(i) === 'r') {
            elem.setAttribute("src","./images/F.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'S' || content.charAt(i) === 's') {
            elem.setAttribute("src","./images/S.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'T' || content.charAt(i) === 't') {
            elem.setAttribute("src","./images/J.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'U' || content.charAt(i) === 'u') {
            elem.setAttribute("src","./images/U.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'V' || content.charAt(i) === 'v') {
            elem.setAttribute("src","./images/V.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'W' || content.charAt(i) === 'w') {
            elem.setAttribute("src","./images/E.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'X' || content.charAt(i) === 'x') {
            elem.setAttribute("src","./images/X.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'Y' || content.charAt(i) === 'y') {
            elem.setAttribute("src","./images/X.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else if (content.charAt(i) === 'Z' || content.charAt(i) === 'z') {
            elem.setAttribute("src","./images/O.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
        else {
            elem.setAttribute("src","./images/space.png")
            elem.setAttribute("height","72")
            elem.setAttribute("width","54")
            results.appendChild(elem)
        }
    }
    console.log("results is " + results.vlue)
}