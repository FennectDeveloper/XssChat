let message
let messageArray = new Array()

addEventListener('keypress', event => sendMessage(event))

function sendMessage(event) {
    var key = event.key

    let message = document.querySelector("textarea").value

    if (key === "Enter" && event.shiftKey === false && message.length > 0) {
      window.event.preventDefault()
      document.querySelector("textarea").value = ""

      if (messageArray.length >= 5) {
        messageArray[0].remove()
        messageArray.splice(messageArray[0], 1)
      }

      let messageContainer = displayMessage(message)
      messageArray.push(messageContainer)
    } else if (key === "Enter" && event.shiftKey === false && message.length === 0) {
      window.event.preventDefault()
    }
    return
}

function displayMessage(message) {
  let messageContainer = document.createElement("div")
  messageContainer.className = "messagecontainer"
  document.querySelector(".chat").append(messageContainer)
  messageContainer.innerHTML += message;
  return messageContainer
}