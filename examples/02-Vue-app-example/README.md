# BetterBugs Web SDK Widget | Vue 3 Integration Example

This example demonstrates how to integrate BetterBugs Web SDK into a Vue application for bug reporting and screen recording capabilities.

## What This Example Shows

- ✅ Complete BetterBugs Web SDK integration in Vue
- ✅ Screen capture configuration for bug reports
- ✅ Error tracking and network monitoring
- ✅ JavaScript setup with Vue apps
- ✅ Modern UI with integrated bug reporting

## Prerequisites

- Node.js (v20 or higher)
- NPM package manager

## Installation & Running

1. Clone this repository
2. Open the `02-Vue-app-example` folder in your text editor
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the application in dev mode

## Integration Steps

### 1 - Initialize SDK into your Vue app

Add initialization code in your Vue app’s component:

```js
import { onMounted, onBeforeUnmount, ref } from "vue";

const bbInstanceRef = ref(null);

onMounted(async () => {
  if (typeof window !== "undefined") {
    const { default: Betterbugs } = await import("@betterbugs/web-sdk");
    const instance = new Betterbugs({
      // Replace with your BetterBugs Project API Key
      apiKey: "YOUR-API-KEY-GOES-HERE",
    });
    bbInstanceRef.value = instance;
  }
});

onBeforeUnmount(() => {
  bbInstanceRef.value?.destroy?.();
});
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
- [Vue Documentation](https://vuejs.org/guide/introduction.html)
- [Web SDK GitHub Repository](https://github.com/BetterBugs-Team/web-sdk)

## Available Scripts

- `npm run dev` - Development mode with hot reload
- `npm run build` - Build command for the Vue app
