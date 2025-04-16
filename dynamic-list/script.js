const input = document.getElementById("input")
const button = document.getElementById("button")
const list = document.getElementById("ul")

button.addEventListener("click", () => {

    const text = input.value
    
    if (text !== "") {

        const li = document.createElement("li")
        li.textContent = text
        list.appendChild(li)
        input.value = ""
    }
})

