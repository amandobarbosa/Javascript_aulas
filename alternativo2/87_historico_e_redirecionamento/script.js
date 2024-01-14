const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')
btn_url.addEventListener('click', (evt)=>{
    /*window.location = 'script.js'
    window.location.assign('script.js')*/
    //window.history.back()
    //window.history.forward()
    window.location=url.value
})