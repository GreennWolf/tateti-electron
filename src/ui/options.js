const main = require("../main.js");


const starButton = document.getElementById('star');

if(window.option == true){
    starButton.addEventListener('click', async ()=>{
        optionChange('star')
    
    })
}

async function optionChange(skin){
    const result = await main.skinChange(skin);
    return result
}


module.exports = {
    optionChange,
}