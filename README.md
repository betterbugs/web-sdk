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

## Quick overview of the example code

Here's what it does:

**1 - Imports the Betterbugs SDK** — Pulls in Betterbugs from the @betterbugs/web-sdk package.

**2 - Creates a new instance (bb)** — The configuration object sets options for:

- **apiKey**: Get value from environment variable (process.env.PROJECT_API_KEY).
- **mode**: Running in production environment for additional debugging features.

## Configurable Options: Customize SDK behavior

You can customize the SDK behavior with the following parameters:

| Option                      | Type                                                                             | Description                                                                                                                                                                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiKey                      | string                                                                           | Project-specific API\* (required)                                                                                                                                                                                                                     |
| metaData                    | Record<string \| number, string \| number \| null>                               | Custom metadata to attach to reports (e.g., { userId: 123 })                                                                                                                                                                                          |
| recordType                  | "recordVideo" \| "domRecord"                                                     | The "recordVideo" type (recommended for SPAs) is the traditional media recording method for video and audio. The "domRecord" type (recommended for Multi Page Apps) is the DOM recording method and may not be as accurate as the "recordVideo" type. |
| disableScreenshot           | boolean                                                                          | Disable screenshot capturing                                                                                                                                                                                                                          |
| disableRecording            | boolean                                                                          | Disable screen recording                                                                                                                                                                                                                              |
| enableAnnotation            | boolean                                                                          | Enable annotation tools for screenshots.                                                                                                                                                                                                              |
| showActionButton            | boolean                                                                          | Display/Hide the floating action button.                                                                                                                                                                                                              |
| position                    | { top? : string, left? : string, right? : string, bottom? : string }             | Control the widget's screen position.                                                                                                                                                                                                                 |
| mode                        | "development" \| "production"                                                    | Set development or production mode.<br><br>The "development" mode can be set when the app is under development, and the "production" mode is for end-users, meaning the app's customers can report a bug in the live environment.                     |
| email                       | string                                                                           | The user's email address who is reporting the bug. Works only in "production" mode.                                                                                                                                                                   |
| styles                      | { theme?: 'light' \| 'dark'; primaryColor?: string; primaryTextColor?: string; } | Set the styles of the widget                                                                                                                                                                                                                          |
| actionButtonComponent       | React.ReactNode \| string                                                        | Component for the action button (React component or HTML string accepted).                                                                                                                                                                            |
| successMessageHeaderText    | string                                                                           | Main heading text of the success message.                                                                                                                                                                                                             |
| successMessageSubHeaderText | string                                                                           | Sub heading text of the success message.                                                                                                                                                                                                              |
| maxRecordingMinutes         | number                                                                           | Set maximum recording length                                                                                                                                                                                                                          |
| emailFieldLabel             | string                                                                           | Set label of email field                                                                                                                                                                                                                              |
| emailFieldPlaceholder       | string                                                                           | Set placeholder of email field                                                                                                                                                                                                                        |
| titleFieldLabel             | string                                                                           | Set label of title field                                                                                                                                                                                                                              |
| titleFieldPlaceholder       | string                                                                           | Set placeholder of title field                                                                                                                                                                                                                        |
| descriptionFieldLabel       | string                                                                           | Set label of description field                                                                                                                                                                                                                        |
| descriptionFieldPlaceholder | string                                                                           | Set placeholder of description field                                                                                                                                                                                                                  |

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
