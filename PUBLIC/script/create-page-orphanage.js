const map = L.map('mapid').setView([-23.6068542,-46.9231096], 15);

// craete and map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// craete icon
const icon = L.icon({
    iconUrl:"./images/map-marker.svg",
    iconSizi:[58,68],
    iconAnchor:[29, 68]
})

let marker;

map.on('click', (event)=>{
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    var Lat=document.querySelector('[name=lat]').value = lat
    var Lng=document.querySelector('[name=lng]').value = lng
    
    //remove o marker
    marker && map.removeLayer(marker)

    //add o icon no map
    marker =L.marker([Lat, Lng], {icon})
    .addTo(map);

    
})


//add foto

function addFoto(){
   //pega o contener image
    const contener = document.querySelector('#images');
   //pagando a image
    const openLond = document.querySelectorAll('.images-uoplond')
   //clona a ultima imagem
   const cloneOpenLond = openLond[openLond.length - 1].cloneNode(true)
   //limpa o campo
   const input = cloneOpenLond.children[0]
   //verifica se o campo esta vaziu
   if(input.value == ''){
       return
   }

   input.value = ''
   contener.appendChild(cloneOpenLond)
}

//deleta os campos
function deletaImages(event){
    const spam = event.currentTarget

    const contener = document.querySelectorAll('.images-uoplond')

    if (contener.length < 2){

        spam.parentNode.children[0].value = ''
        return
    }

    spam.parentNode.remove()

}


function simNao(event){
    //ouvi o click
    const button =event.currentTarget
    
    // pega os botton
    const buttons = document.querySelectorAll('.button_selection button')
    buttons.forEach(removeActive)

    function removeActive(button){
        button.classList.remove('active')
    }

    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}

function validate(event){
    const latlng = document.querySelector('[name="lat"]')

    if( latlng.value == ''){
        event.preventDefault()
        alert('escolha uma localizaçao no map')

    }   

}

