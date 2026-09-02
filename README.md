# BetterBugs Web SDK

Simplify bug reporting within your web apps with the BetterBugs Web SDK.

The BetterBugs Web SDK allows you to include bug reporting capabilities in your application with minimal settings and effort.

Now, you can enhance your apps with user-friendly and easy-to-implement issue reporting capabilities, such as media capturing, log tracking, getting the two-minute Rewind session video, and real-time hooks to help you and your team report, diagnose, and fix issues effectively.

## Breaking it down

Using the BetterBugs Web SDK, you can enhance your web apps with bug reporting features that allow you to capture useful data about the issues. Here's more on it.

## Key features of the SDK

- **Seamless integration** — Quick installation and easy to use with a few lines of code.
- **Configurable params** — Tweak settings for the parameters, such as metaData, recordType, enableAnnotation, and many others.
- **Use Methods** — Control the SDK with programmatic methods, such as show(), hide(), startRecording(), and many others.
- **Event hooks** — For deeper integration, listen for specific lifecycle events with hooks, such as after a screenshot is captured (screenshot), a bug is submitted (bugSubmit), or a recording starts (recordingStop), and many others.
- **Session Rewind (coming soon)** – Automatically records the last 2 minutes of a session to capture all user interactions. It's perfect for auto-capturing issues that just happened and helps trace actions that lead to the bug.
- **Floating widget customization** – Control the widget's look and placement.

## Quick installation

To install the SDK, use the following command:

### NPM install

```shell
npm install @betterbugs/web-sdk
```

### Yarn install

```shell
yarn add @betterbugs/web-sdk
```

## BetterBugs Web SDK initialization: Usage example

After installation, here's how to initialize the SDK instance in your web app:

### TypeScript

```typescript
import { Betterbugs } from '@betterbugs/web-sdk';

new Betterbugs({
  apiKey: process.env.TEST_API_KEY || '',
  mode: 'production',
});
```

## Overview of the example code

Here's what it does:

**1 - Imports the Betterbugs SDK** — Pulls in Betterbugs from the @betterbugs/web-sdk package.

**2 - Creates a new instance** — The configuration object sets options for:

- **apiKey**: Get value from environment variable (process.env.PROJECT_API_KEY).
- **mode**: Running in production environment for additional debugging features.

## Configurable Options: Customize SDK behavior

You can customize the SDK behavior with the following parameters:

| Option                      | Type                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiKey                      | string                                                                                                                                                                                                                                                            | Your workspace API key (required)                                                                                                                                                                                                                     |
| projectId                   | string                                                                                                                                                                                                                                                            | The project to report bugs to. Required with a workspace API key; omit it if you are using a legacy project-scoped key.                                                                                                                              |
| metaData                    | Record<string \| number, string \| number \| null>                                                                                                                                                                                                                | Custom metadata to attach to reports (e.g., { userId: 123 })                                                                                                                                                                                          |
| recordType                  | "recordVideo" \| "domRecord"                                                                                                                                                                                                                                      | The "recordVideo" type (recommended for SPAs) is the traditional media recording method for video and audio. The "domRecord" type (recommended for Multi Page Apps) is the DOM recording method and may not be as accurate as the "recordVideo" type. **Leave it unset and the SDK picks the best mode the browser supports** — see [Recording modes](#recording-modes). |
| disableScreenshot           | boolean                                                                                                                                                                                                                                                           | Disable screenshot capturing                                                                                                                                                                                                                          |
| disableRecording            | boolean                                                                                                                                                                                                                                                           | Disable screen recording                                                                                                                                                                                                                              |
| mediaRequired               | boolean                                                                                                                                                                                                                                                           | Require a screenshot or screen recording before the report can be submitted. Ignored when both `disableScreenshot` and `disableRecording` are enabled. Default: `false`.                                                                              |
| enableAnnotation            | boolean                                                                                                                                                                                                                                                           | Enable annotation tools for screenshots.                                                                                                                                                                                                              |
| showActionButton            | boolean                                                                                                                                                                                                                                                           | Display/Hide the floating action button.                                                                                                                                                                                                              |
| position                    | { top? : string, left? : string, right? : string, bottom? : string }                                                                                                                                                                                              | Control the widget's screen position.                                                                                                                                                                                                                 |
| mode                        | "development" \| "production"                                                                                                                                                                                                                                     | Set development or production mode (defaults to "production").<br><br>The "development" mode can be set when the app is under development: the report form drops the Email field and instead shows **Reporter** (required) and **Assignee** (optional) pickers, populated with your workspace's members. The "production" mode is for end-users, meaning the app's customers can report a bug in the live environment via the Email field.                     |
| email                       | string                                                                                                                                                                                                                                                            | The user's email address who is reporting the bug. Works only in "production" mode.                                                                                                                                                                   |
| styles                      | { theme?: 'light' \| 'dark', primaryColor?: string, primaryTextColor?: string, secondaryColor?: string, secondaryTextColor?: string, textColor?: string, mutedTextColor?: string, inputBgColor?: string, fontFamily?: string, fontFamilyUrl?: string (optional) } | Set the styles of the widget                                                                                                                                                                                                                          |
| actionButtonComponent       | React.ReactNode \| string                                                                                                                                                                                                                                         | Component for the action button (React component or HTML string accepted).                                                                                                                                                                            |
| successMessageHeaderText    | string                                                                                                                                                                                                                                                            | Main heading text of the success message.                                                                                                                                                                                                             |
| mainHeading                 | string                                                                                                                                                                                                                                                            | Main heading text of the widget                                                                                                                                                                                                                       |
| successMessageSubHeaderText | string                                                                                                                                                                                                                                                            | Sub heading text of the success message.                                                                                                                                                                                                              |
| maxRecordingMinutes         | number                                                                                                                                                                                                                                                            | Set maximum recording length                                                                                                                                                                                                                          |
| emailFieldLabel             | string                                                                                                                                                                                                                                                            | Set label of email field                                                                                                                                                                                                                              |
| emailFieldPlaceholder       | string                                                                                                                                                                                                                                                            | Set placeholder of email field                                                                                                                                                                                                                        |
| titleFieldLabel             | string                                                                                                                                                                                                                                                            | Set label of title field                                                                                                                                                                                                                              |
| titleFieldPlaceholder       | string                                                                                                                                                                                                                                                            | Set placeholder of title field                                                                                                                                                                                                                        |
| descriptionFieldLabel       | string                                                                                                                                                                                                                                                            | Set label of description field                                                                                                                                                                                                                        |
| descriptionFieldPlaceholder | string                                                                                                                                                                                                                                                            | Set placeholder of description field                                                                                                                                                                                                                  |
| preferNativeCapture         | boolean                                                                                                                                                                                                                                                           | Capture screenshots from the browser's rendered pixels instead of re-rendering the DOM. Defaults to `true`. See [Screenshot accuracy](#screenshot-accuracy) below.                                                                                     |

## Screenshot accuracy

Screenshots are captured with one of two engines, chosen automatically by what
the browser supports.

**Native capture (default, all desktop browsers).** The SDK asks the browser for
the actual rendered pixels via `getDisplayMedia`. The result matches what the
user saw, including cross-origin iframes, `<video>`, WebGL and canvas content,
and modern CSS such as `backdrop-filter` and blend modes. Region ("Crop")
captures are cropped from the same frame, so both modes look identical.

The cost is one browser permission prompt per capture. What the user sees in
that prompt depends on the engine:

| Browser | Prompt | Notes |
| --- | --- | --- |
| Chrome, Edge, Opera, Brave | This tab, pre-selected | One click to confirm |
| Safari (macOS), Firefox | Screen or window picker | WebKit and Gecko expose no "this tab" surface, so the user shares a screen or window and the SDK crops the page's viewport out of the frame |
| Mobile (iOS + Android) | — | No browser on mobile implements screen capture; DOM rendering is always used |

On Safari and Firefox the SDK falls back to DOM rendering automatically if it
cannot locate the viewport in the shared frame reliably, or if the frame comes
back at a lower resolution than a DOM render would produce — a sharp
approximation beats a blurry photograph of the real thing.

If the user dismisses the prompt entirely, no screenshot is taken. Declining is
treated as "don't capture me", not as a request for a lower-fidelity capture.

**DOM rendering (fallback).** Used on mobile browsers, when
`preferNativeCapture: false`, and whenever native capture is unavailable or
declined per the rules above. The page is re-rendered from the DOM by
`html2canvas-pro`, which reimplements CSS layout in JavaScript and therefore
**will be inaccurate on some sites**. Known limitations:

| Content | Result |
| --- | --- |
| Cross-origin `<iframe>` (payment forms, embedded maps, third-party widgets) | Renders blank — the browser gives no page any way to read those pixels |
| `<video>` | Blank or poster frame |
| WebGL / 3D canvas | Captured only for canvases created after the SDK loaded; otherwise blank |
| `backdrop-filter`, blend modes, masks, `color-mix()` | May render differently from the screen |
| Cross-origin images without CORS headers | Omitted |

When the SDK falls back to DOM rendering and detects any of the first three in
the captured area, it shows the reporter a warning at capture time so an
inaccurate screenshot is not submitted unnoticed.

Set `preferNativeCapture: false` to always use DOM rendering and never show a
permission prompt — appropriate if the prompt is disruptive in your product and
your pages do not contain the content listed above.

## Recording modes

`recordType` controls how screen recordings are captured.

- **`recordVideo`** — real video via the browser's `MediaRecorder`. Highest
  fidelity: it records exactly what was on screen, with audio.
- **`domRecord`** — records DOM mutations and replays them. No video file, works
  on every device including mobile, and stays accurate through page navigations.

### Leaving `recordType` unset (recommended)

The SDK detects what the visitor's browser can actually deliver and picks the
optimal mode for it — real video wherever the browser supports screen capture,
DOM recording everywhere else. Recording formats differ between browser engines;
the SDK handles that internally, so playback and upload work the same either way
and there is nothing for you to configure.

### Setting `recordType` explicitly

Your choice is honoured as given, with no capability substitution — useful when
you want one consistent recording format across all your users. If the browser
cannot support what you asked for, the SDK logs a console warning rather than
silently overriding you.

The one exception is **Electron**, which does not support DOM recording:
`domRecord` there is overridden to `recordVideo` with a warning.

## Programmatic Methods: Control SDK behavior

Available methods for controlling the BetterBugs SDK behavior;

| Method              | Description                           |
| ------------------- | ------------------------------------- |
| setEmail()          | Update the email of the bug reporter. |
| setStyles()         | Update the styles of the widget.      |
| getStyles()         | Get the styles of the widget.         |
| show()              | Show the floating widget              |
| hide()              | Hide the floating widget.             |
| openWidget()        | Open the bug report widget.           |
| closeWidget()       | Close the bug report widget.          |
| setMetadata()       | Update the attached metadata.         |
| captureScreenshot() | Trigger screenshot capture.           |
| startRecording()    | Start session recording.              |
| stopRecording()     | Stop the ongoing recording.           |
| on()                | Register an event listener.           |
| off()               | Unregister an event listener.         |
| destroy()           | Destroy the BetterBugs instance.      |

## Lifecycle Event Hooks: For deeper integrations

Available hooks to listen to the lifecycle events:

| Event            | Trigger description                         |
| ---------------- | ------------------------------------------- |
| emailUpdate      | Triggered when the email is updated.        |
| screenshot       | Triggered after the screenshot is captured. |
| recordingStart   | Triggered when the recording starts.        |
| recordingStop    | Triggered when the recording stops.         |
| bugSubmit        | Triggered after the bug is submitted        |
| metaDataUpdate   | Triggered when the metadata is updated      |
| positionUpdate   | Triggered when the widget position changes. |
| widgetOpen       | Triggered when the widget is opened.        |
| widgetClose      | Triggered when the widget is closed.        |
| showActionButton | Triggered when the action button is shown.  |
| hideActionButton | Triggered when the action button is hidden. |
| sessionCreated   | Triggered when a new session is created.    |

## Floating widget customization options

The floating widget can be customized in various ways:

- **Positioning** — Define widget position using { top, left, right, bottom }.
- **UI Customization** — Modify button styles, background, and primary colors.
