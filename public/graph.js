$('#sql').submit(async (e) => {
    e.preventDefault()
    $('#sqlOutput').empty()
    const id = $('#sqlname').val()
    const body = {
        query: `{findUserById(user_id: ${id}){ name, id, email}}`
    }
    const data = await axios.post(`/graphql`, body)

    if (data.data.data.findUserById) {
        const entry = data.data.data.findUserById
        $('#sqlOutput').append(`<p>Name: ${entry.name}, ID: ${entry.id}</p>, email: ${entry.email}`)
    }
})  