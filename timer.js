/**
 * Created by ishaandhamija on 07/07/17.
 */


window.onload = function () {

    var button = document.getElementById("btn")

    button.onclick = function () {

        var timer = document.getElementById("timer")
        var textarea = document.getElementById("textarea")
        var writtentext = document.getElementById("writtentext")
        var tobewrittentext = document.getElementById("tobewrittentext")
        var typingSpeed = document.getElementById("typingSpeed")

        var count = 1
        var wordCount = 0
        var mistakeCount = 0
        var doneWrongOnce = false

        typingSpeed.innerText = "Type as written in the box above..."

        textarea.focus()
        textarea.readOnly = false
        textarea.addEventListener("keypress", function (e) {
            e = e || window.event;
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
            if (charCode) {
                var typedLetter = String.fromCharCode(charCode)
                if (typedLetter == tobewrittentext.value.charAt(0)) {
                    doneWrongOnce = false
                    writtentext.value += typedLetter
                    tobewrittentext.value = tobewrittentext.value.substr(1)
                    textarea.style.color = "#000000"
                    if (typedLetter == " "){
                        wordCount++
                    }
                }
                else{
                    if (!doneWrongOnce) {
                        mistakeCount++
                    }
                    doneWrongOnce = true
                    textarea.style.color = "#FF0000"
                }
            }
        })

        var id = setInterval(function () {
            if (count < 10){
                timer.innerHTML = "0" + count
                count = count + 1
            }
            else {
                timer.innerHTML = count++
            }
        }, 1000)

        setTimeout(function () {
            clearInterval(id)
            textarea.readOnly = true
            textarea.blur()
            if (wordCount == 0){
                typingSpeed.innerText = "No words written!!!"
                return;
            }
            wordCount++
            var netCount = wordCount - mistakeCount
            typingSpeed.innerText = "Your typing speed is " + netCount + " wpm"
        }, 60000)

    }
}