
const body = document.body

const estilotopo=
'display: flex;'+
'justify-content: space-between;'+
'align-items: center;'+
'background-color: #3c3ce0;'



const topo = document.createElement('div')
topo.setAttribute('id', 'topo')
topo.setAttribute('style', estilotopo)

body.prepend(topo)

const estilo_img_logo=
'width: 150px; + height:  150px;'

const logo = '<div id="logo" class="logo">' + 
'<img src="instagram_logo.png" alt="logo_insta" style="'+estilo_img_logo+'">'+ 
'</div>'

topo.innerHTML+= logo

const login = '<div id="login" class="login">' + '<p id="matricula">Matricula: <span></span></p>' + '<p id="nome">Nome: <span></span></p>' +'</div>'

topo.innerHTML+= login;