

//images da galeria
function selectImages(event){
    const button = event.currentTarget
    //procra todos os active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(remuveActive)
   
    function remuveActive(button){
        button.classList.remove('active')
    }
    const image = button.children[0]
    const imageSelecionada = document.querySelector('.orphanage-detalis > img')
    imageSelecionada.src= image.src




    button.classList.add('active')
    console.log(buttons)
}