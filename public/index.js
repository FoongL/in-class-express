
// --> SIGNUP AND GET TOKEN
$('#signUpForm').submit(async (e) => {
    // JsLoadingOverlay.show()
    e.preventDefault()
    const email = $('#email').val()
    const password = $('#password').val()
    const body = { email, password }
    try {
        const user = await axios.post('/users/login', body)
        const { token } = user.data
        localStorage.setItem('sampleAuthToken', token)
        console.log(localStorage)
        getToken()
        JsLoadingOverlay.hide()
    }
    catch (err) {
        console.log(err)
        alert(`invalid email or username`)
        // JsLoadingOverlay.hide()
    }
})

const getToken = () => {
    const token = localStorage.getItem('sampleAuthToken')
    $('#tokenOutput').text(`${token}`)
    if (!token) {
        $('#signInStatus').text(`you have no token`)
    } else {
        $('#signInStatus').text(`I see a token now...`)
    }
}

// --> USE TOKEN FOR PUT REQUEST
$('#putButton').click(async () => {
    JsLoadingOverlay.show()
    const token = localStorage.getItem('sampleAuthToken')
    if (!token) {
        return alert(`No token found! Call the police!`)
    } else {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const result = await axios.put('/users', {}, config)
            alert(`${result.data.success}`)
            JsLoadingOverlay.hide()
        } catch (err) {
            alert(`got an error status of ${err.response.status}`)
            JsLoadingOverlay.hide()
        }

    }
})

// --> DELETE TOKEN
$('#clearToken').click(()=>{
    localStorage.removeItem('sampleAuthToken')
    getToken()
})

getToken()