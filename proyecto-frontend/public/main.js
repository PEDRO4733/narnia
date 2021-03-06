const {app,BrowserWindow} = require('electron');
require('@electron/remote/main').initialize();

function createWindow(){

    const win = new BrowserWindow({
        width:1024,
        height:800,
        frame:true,
        webPreferences:{
            nodeIntegration: true,
            enableRemoteModule:true,
            contextIsolation: false,
            preload: __dirname + '/preload.js'
        }
    });

    win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function () {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})