# 🔐 Getting Started with Sentry in a JavaScript/React Project

Track errors, monitor performance, and integrate with GitHub using Sentry.

## 📦 1. Install Sentry SDK

```bash
npm install @sentry/react @sentry/tracing --save
```

## ⚙️ 2. Configure Sentry

In your `index.js` or `App.js`, add:

```js
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV || "development",
});
```

Add to `.env`:
```env
REACT_APP_SENTRY_DSN=https://<your-key>@sentry.io/<project-id>
```

## 🧪 3. Trigger a Test Error

Create a component:

```js
function TestComponent() {
  const triggerError = () => {
    throw new Error("Sentry Test Error");
  };

  return <button onClick={triggerError}>Trigger Error</button>;
}
```

## ✅ 4. Verify in Sentry Dashboard

Check your Sentry project for the new issue.

---

Made for org `numbios`, project `javascript-react`.
