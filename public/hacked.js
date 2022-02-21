$('#xss').submit(async (e) => {
    e.preventDefault()
    const name = $('#name').val()
    $('#nameOutput').innerHTML = name
    const display = document.getElementById('nameOutput')
    display.innerHTML = name
})




$('#sql').submit(async (e) => {
    e.preventDefault()
    $('#sqlOutput').empty()
    const name = $('#sqlname').val()
    const body = { name }
    const data = await axios.post(`/users/findOne`, body)
    if (data.data.output.length > 0){
        data.data.output.forEach((entry)=>{
            $('#sqlOutput').append(`<p>Name: ${entry.name}, ID: ${entry.id}</p>, email: ${entry.email}`)
        })
    }
})  