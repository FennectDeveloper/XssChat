let message;
addEventListener('keypress', event => sendMessage(event))

function sendMessage(event) {
    var key = event.key

    if (key === "Enter" && event.shiftKey === false) {
      window.event.preventDefault()
      message = document.querySelector("textarea").value
      document.querySelector("textarea").value = ""
      document.querySelector("body").innerHTML += message;
    }
    return
}