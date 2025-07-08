# Betterbugs Web-SDK Electron Integration Example

This example demonstrates how to integrate the [Betterbugs Web-SDK](https://github.com/betterbugs/web-sdk) into an Electron application for comprehensive bug reporting and screen recording capabilities.

## What This Example Shows

- ✅ Complete Betterbugs Web-SDK integration in Electron
- ✅ Screen capture configuration for bug reports
- ✅ Error tracking and network monitoring
- ✅ TypeScript setup with Electron
- ✅ Modern UI with integrated bug reporting

## Prerequisites

- Node.js (v20 or higher)
- Yarn package manager

## Installation & Running

1. Clone this repository
2. Navigate to the electron example directory: `cd examples/electron`
3. Run `yarn install` to install dependencies
4. Run `yarn build` to build the application
5. Run `yarn start` to start the application

## Integration Steps

### 1. Install Betterbugs Web-SDK

```bash
yarn add @betterbugs/web-sdk
```

### 2. Initialize SDK in your HTML

Add the Betterbugs SDK to your main HTML file:

```html
<!-- Load via CDN -->
<script src="https://cdn.jsdelivr.net/npm/@betterbugs/web-sdk@latest/index.js"></script>

<!-- Initialize the SDK -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    window.bb = new Betterbugs({
      apiKey: 'your-api-key-here',
      mode: 'development', // or 'production'
      showActionButton: true,
      position: { bottom: '20px', right: '20px' },
      primaryColor: '#159957',
      theme: 'light',
    });
  });
</script>
```

### 3. Configure Display Media Handler (Required for Screen Recording)

**Important**: Add this configuration to your Electron main process (`main.ts`) to enable screen recording functionality:

```typescript
import { app, BrowserWindow, session, desktopCapturer } from 'electron';

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
```

This step is **essential** for the Betterbugs SDK to capture screen recordings in your Electron app.

## Features Included

- **Bug Reporting**: Users can report bugs with automatic screen capture
- **Error Tracking**: Automatic JavaScript error detection and reporting
- **Network Monitoring**: Track failed API requests and network issues
- **User Session Recording**: Capture user interactions for better debugging
- **Custom Triggers**: Manual bug report triggers via UI buttons

## Testing the Integration

The example includes test buttons that demonstrate:

- Error throwing for error tracking
- Failed network requests for network monitoring
- Screen recording capabilities

## Learn More

- [Betterbugs Documentation](https://docs.betterbugs.io)
- [Electron Documentation](https://electronjs.org/docs)
- [Web-SDK GitHub Repository](https://github.com/BetterBugs-Team/web-sdk)

## Available Scripts

- `yarn build` - Compile TypeScript to JavaScript
- `yarn start` - Start the Electron application
- `yarn dev` - Development mode with hot reload
- `yarn prod` - Production mode
