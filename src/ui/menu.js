const {ipcRenderer} = require('electron');

const exitButton = document.getElementById('exit-btn');
const playButton = document.getElementById('play-btn')
const optionsButton = document.getElementById('options-btn')

playButton.addEventListener('click',()=>{
    window.location.href = './game.html';
})

// optionsButton.addEventListener('click',()=>{
//     window.location.href = './options.html';
// })


exitButton.addEventListener('click', ()=>{
    ipcRenderer.send('exit')
})