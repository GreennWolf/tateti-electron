const {BrowserWindow,Menu,app, ipcMain} = require('electron');

let win;



function createWindow(){
   win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })
    win.maximize()
    win.show()
    win.loadFile('src/ui/index.html');
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
}

const templateMenu = [
    {
        label:'Exit',
        submenu:[
            {
                label:'Exit',
                accelerator:process.platform =='darwin' ? 'command+Q':'Ctrl + Q',
                click(){
                    app.quit();
                }
            }
        ]
    },
];

if(process.platform == 'darwin'){
    templateMenu.unshift({
        label: app.getName()
    });
}

if(process.env.NODE_ENV !== 'production'){
    templateMenu.push({
        label:'DevTools',
        submenu:[
            {
                label:'Show/Hide Dev Tools',
                accelerator:'Ctrl+D',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role:'reload'
            }
        ]
    })
}

ipcMain.on('exit',()=>{
    app.quit()
})



module.exports = {
    createWindow,
}