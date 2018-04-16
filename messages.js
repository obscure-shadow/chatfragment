const frag = document.createDocumentFragment()

// add messages

const messages = ["hello", "hi", "how's it going?","fine how are you?","I'm ok"]

for (let index = 0; index < messages.length; index++) {
    const message = document.createElement("article")
    message.classList = "message"
    message.textContent = messages[index]
    frag.appendChild(message)
}
document.querySelector("#messages").appendChild(frag)