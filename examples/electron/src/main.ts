import { app, BrowserWindow, session, desktopCapturer } from 'electron';

// Wait for the app to be ready before creating the window
app.whenReady().then(() => {
  // Configure session before creating window
  session.defaultSession.setDisplayMediaRequestHandler(
    (request, callback) => {
      desktopCapturer.getSources({ types: ['screen'] }).then(sources => {
        callback({ video: sources[0], audio: 'loopback' });
      });
    },
    { useSystemPicker: false }
  );
  createWindow();
});

function createWindow() {
  const mainWindow = new BrowserWindow();

  // Load the index.html file
  mainWindow.loadFile('index.html');
  mainWindow.setFullScreen(true);
}
