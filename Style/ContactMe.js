document.querySelectorAll("[data-href]").forEach(link => {
    const value = Links[link.dataset.href];
    if (value) link.href = value;
});


const form = document.querySelector('.Contact-Form')
const statusText = form.querySelector('.Form-Status')
const sendButton = form.querySelector('.SendButton')

form.addEventListener('submit', async (e) => {
    e.preventDefault()



    // Honeypot stopper
    if (form.elements.website.value) {
        return
    }

    sendButton.disabled = true;
    statusText.className = 'Form-Status'

    try {
        const response = await fetch(Links.ContactFormSheet, {
            method: 'POST',
            body: new FormData(form)
        })

        const result = await response.json()

        if (result.result !== "success") throw new Error(result.error)
            form.reset()
    } catch (err) {
        console.error(err)
        statusText.textContent = "An error was found, please try again!"
    } finally {
        sendButton.disabled = false
    }
})