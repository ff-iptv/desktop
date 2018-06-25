const { app, BrowserWindow, Menu, ipcMain } = require('electron')

let win = null;

function createWindow() {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: `file://${__dirname}/`,
    // titleBarStyle: 'hiddenInset',
    frame: false,
    backgroundColor: '#fef'
  });
  // Menu.setApplicationMenu(null);

  // Specify entry point
  win.loadURL('http://localhost:4000');

  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('WINDOW_QUIT', () => {
  app.quit();
});

ipcMain.on('WINDOW_MINIMIZE', () => {
  if (win) {
    win.minimize();
  }
});

ipcMain.on('WINDOW_MAXIMIZE', () => {
  if (win) {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  }
});