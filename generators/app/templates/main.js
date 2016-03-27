// app/main.js

// Module to control application life.
var app = require('app');

// Module to create native browser window.
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Module to support path
var path = require('path')

// Module to support IPC
var ipc = require('electron').ipcMain

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        preload: path.resolve(path.join(__dirname, 'preload.js'))
    });

    mainWindow.setMenu(null);

    mainWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        require('shell').openExternal(url);
    });
    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.webContents.toggleDevTools();

    // Open the devtools.
    // mainWindow.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', function() {

        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

});
