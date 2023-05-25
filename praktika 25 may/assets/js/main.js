document.querySelector(".btn").addEventListener('click', function () {
    const fetched = fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/podca', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            image: document.querySelector('#image').value,
            name: document.querySelector('#name').value,
            about: document.querySelector('#about').value,
            date: document.querySelector('#date').value
        })
    })
    fetched.then(res => {
        (res.ok == true)
        {
            document.querySelector('#image').value = '',
            document.querySelector('#name').value = '',
            document.querySelector('#about').value = '',
            document.querySelector('#date').value = ''
        }
    }).catch(err => console.log(err))
})

