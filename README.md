# Betterbugs Web SDK

## 📘 Introduction

The **Betterbugs Web SDK** provides seamless, user-friendly bug reporting capabilities for any web application. With features like session rewind, media capture, log tracking, and real-time hooks, it empowers teams to diagnose and resolve issues more effectively—streamlining development workflows and enhancing the end-user experience.

---

## 🚀 Key Features

### ✅ Seamless Integration

Integrate Betterbugs effortlessly into your web app with a simple initialization step.

---

### ⚙️ Configurable Options

Customize the SDK behavior with the following parameters:

| Option                      | Type                                                               | Description                                                    |
| --------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| `apiKey`                    | `string`                                                           | Project-specific API key (**required**)                        |
| `metaData`                  | `array<object>`                                                    | Custom metadata to attach to reports (e.g., `{ userId: 123 }`) |
| `captureRewindOnScreenshot` | `boolean`                                                          | Attach last 2 minutes of session rewind to screenshots         |
| `recordType`                | `"getUserMedia"` \| `"rrweb"`                                      | Choose between webcam recording or DOM session replay          |
| `enableRewind`              | `boolean`                                                          | Enable capturing of session rewind                             |
| `enableAnnotation`          | `boolean`                                                          | Enable annotation tools on screenshots and recordings          |
| `showActionButton`          | `boolean`                                                          | Display or hide the floating action button                     |
| `position`                  | `{ top?: string, left?: string, right?: string, bottom?: string }` | Controls the widget’s screen position                          |
| `mode`                      | `"development"` \| `"production"`                                  | Set to development or production mode                          |

---

### 🧠 Programmatic Methods

Control SDK behavior programmatically using these methods:

| Method                | Description                     |
| --------------------- | ------------------------------- |
| `show()`              | Show the floating widget        |
| `hide()`              | Hide the floating widget        |
| `openWidget()`        | Open the bug report widget      |
| `closeWidget()`       | Close the bug report widget     |
| `updateMetadata()`    | Update attached metadata        |
| `captureScreenshot()` | Trigger screenshot capture      |
| `startRecording()`    | Start session recording         |
| `stopRecording()`     | Stop the ongoing recording      |
| `on()`                | Register an event listener      |
| `off()`               | Unregister an event listener    |
| `destroy()`           | Destroy the Betterbugs instance |

---

### 🔁 Event Hooks

Listen to lifecycle events for deeper integration:

| Event                | Trigger Description                        |
| -------------------- | ------------------------------------------ |
| `onScreenshot`       | Triggered after a screenshot is captured   |
| `onRecordingStart`   | Triggered when recording starts            |
| `onRecordingStop`    | Triggered when recording stops             |
| `onBugSubmit`        | Triggered after a bug is submitted         |
| `onMetaDataUpdate`   | Triggered when metadata is updated         |
| `onPositionUpdate`   | Triggered when widget position changes     |
| `onWidgetOpen`       | Triggered when the widget is opened        |
| `onWidgetClose`      | Triggered when the widget is closed        |
| `onShowActionButton` | Triggered when the action button is shown  |
| `onHideActionButton` | Triggered when the action button is hidden |
| `onSessionCreated`   | Triggered when a new session is created    |

---

### 🕓 Session Rewind _(coming soon)_

Automatically capture the last **2 minutes** of user interaction, allowing developers to trace user actions leading up to a bug.

---

### 🎨 Floating Widget Customization

Customize the floating widget:

- Position: `top`, `left`, `right`, `bottom`
- UI customization (primary color, background, fonts, and button styles) — _coming soon_

---

## 🧪 SDK Usage Example

```ts
import { Betterbugs } from '@betterbugs/web-sdk';

const bb = new Betterbugs({
  apiKey: process.env.TEST_API_KEY || '',
  metaData: { userID: '124' },
  captureRewindOnScreenshot: true,
  recordType: 'getUserMedia',
  position: {
    top: '10px',
    left: '20px',
  },
  mode: 'development',
  enableRewind: true,
  enableAnnotation: true,
  showActionButton: true,
});
```
