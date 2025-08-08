# BetterBugs Web SDK Widget | React Integration Example

This example demonstrates how to integrate BetterBugs Web SDK into a React application for bug reporting and screen recording capabilities.

## What This Example Shows

- ✅ Complete BetterBugs Web SDK integration in React
- ✅ Screen capture configuration for bug reports
- ✅ Error tracking and network monitoring
- ✅ JavaScript setup with React apps
- ✅ Modern UI with integrated bug reporting

## Prerequisites

- Node.js (v20 or higher)
- NPM package manager

## Installation & Running

1. Clone this repository
2. Open the `01-React-app-example` folder in your text editor
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the application in dev mode

## Integration Steps

### 1 - Initialize SDK into your React app

Add initialization code in your React app’s component:

```js
import { useEffect, useRef } from "react";

function App() {
  // Initialization Code
  const bbInstanceRef = useRef(null);
  useEffect(() => {
    let isMounted = true;
    const initBetterbugs = async () => {
      if (typeof window !== "undefined") {
        const { default: Betterbugs } = await import("@betterbugs/web-sdk");
        const instance = new Betterbugs({
          // Replace with your BetterBugs Project API Key
          apiKey: "YOUR-API-KEY-GOES-HERE",
        });
        if (isMounted) {
          bbInstanceRef.current = instance;
        }
      }
    };

    initBetterbugs();
    return () => {
      isMounted = false;
      bbInstanceRef.current?.destroy?.();
    };
  }, []);
}
```

### 2 - Test the setup

Run your local dev server (`http://localhost:5173/`) with the following command:

```bash
npm run dev
```

The Web SDK widget should be available at the bottom right side of your app screen (with the default UI).

## Features Included

- **Bug Reporting**: Users can report bugs with automatic screen capture
- **Error Tracking**: Automatic JavaScript error detection and reporting
- **Network Monitoring**: Track failed API requests and network issues
- **User Session Recording**: Capture user interactions for better debugging
- **Custom Triggers**: Manual bug report triggers via UI buttons

## Learn More

- [BetterBugs Documentation](https://docs.betterbugs.io)
- [React Documentation](https://react.dev/)
- [Web SDK GitHub Repository](https://github.com/BetterBugs-Team/web-sdk)

## Available Scripts

- `npm run dev` - Development mode with hot reload
- `npm run build` - Build command for the React app
