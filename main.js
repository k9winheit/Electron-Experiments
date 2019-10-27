const {app, BrowserWindow,ipcMain} = require('electron')
const electron = require("electron");
const path = require('path')
const url = require('url')

let win;

function createWindow () {
    
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize; 
  const { idno } = electron.screen.getPrimaryDisplay().id; 
  
   win = new BrowserWindow({width, height});

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  console.log(width);   
  console.log(idno);   

  electron.screen.on("display-added", () => {
    debugger;
    console.log("New Screen Detected");   
  
   // win.webContents.send("ScreenAdded",electron);
  });


  // Open the DevTools optionally:
  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});