# Google Analytics Setup Guide

Google Analytics has been successfully integrated into your Michael Lugashi portfolio website! Here's what was implemented and how to complete the setup.

## What Was Added

### 1. Analytics Configuration (`src/config/analytics.ts`)

- Complete Google Analytics 4 (GA4) integration
- TypeScript types for gtag functions
- Utility functions for tracking various events
- Pre-configured tracking functions for your specific use cases

### 2. Core Integration

- **HTML Script**: Added Google Analytics script to `index.html`
- **Initialization**: Added GA initialization in `src/main.tsx`
- **Page Tracking**: Added automatic page view tracking in `App.tsx`

### 3. Event Tracking Added

- **Theme Toggle**: Tracks when users switch between light/dark mode
- **Project Clicks**: Tracks when users click on project buttons
- **Contact Form**: Tracks successful form submissions
- **Social Links**: Tracks clicks on GitHub, LinkedIn, and CV download
- **Navigation**: Tracks when users scroll to contact section

## Setup Instructions

### Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website (if you haven't already)
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Update Configuration Files

Replace `GA_MEASUREMENT_ID` in these files with your actual Measurement ID:

#### In `index.html` (line 10):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ACTUAL_GA_ID"></script>
```

#### In `src/config/analytics.ts` (line 2):

```typescript
export const GA_MEASUREMENT_ID = 'YOUR_ACTUAL_GA_ID'; // Replace with your actual GA4 Measurement ID
```

### Step 3: Environment Variables (Optional but Recommended)

For better security and environment management, you can use environment variables:

1. Create a `.env` file in your project root:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. Update `src/config/analytics.ts`:

```typescript
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID';
```

3. Update `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=%VITE_GA_MEASUREMENT_ID%"></script>
```

### Step 4: Test Your Setup

1. Build and deploy your site
2. Visit your website
3. Check Google Analytics Real-Time reports to see if data is coming in
4. Test various interactions (theme toggle, project clicks, contact form, etc.)

## What Gets Tracked

### Automatic Tracking

- **Page Views**: Every time someone visits your site
- **Session Data**: User sessions, bounce rate, time on site

### Custom Events

- **Theme Toggle**: When users switch between light/dark themes
- **Project Interactions**: Clicks on project "View Project" buttons
- **Contact Form**: Successful form submissions
- **Social Media**: Clicks on GitHub, LinkedIn links
- **CV Downloads**: When users download your CV
- **Navigation**: Scroll-to-section interactions

### Event Categories

- `engagement`: User interactions with your content
- `user_preference`: Theme changes and settings
- `navigation`: Movement through your site

## Privacy Considerations

The implementation respects user privacy:

- No personal data is collected beyond what GA4 collects by default
- All tracking is anonymous
- You may want to add a privacy policy to your site
- Consider implementing cookie consent if required by your jurisdiction

## Customization

You can easily add more tracking by using the utility functions in `analytics.ts`:

```typescript
import { trackEvent } from '../config/analytics';

// Track custom events
trackEvent('custom_event_name', {
  event_category: 'category',
  event_label: 'label',
  value: 1,
});
```

## Troubleshooting

### Common Issues:

1. **No data in GA**: Make sure you've replaced `GA_MEASUREMENT_ID` with your actual ID
2. **Events not showing**: Check browser console for errors
3. **Real-time not working**: GA4 can take a few minutes to show data

### Debug Mode:

Add this to your browser console to see GA events:

```javascript
window.dataLayer.push({
  'gtm.debug': true,
});
```

## Next Steps

1. Set up **Goals** and **Conversions** in Google Analytics for important actions
2. Create **Custom Dashboards** to monitor key metrics
3. Set up **Alerts** for significant changes in traffic
4. Consider adding **Google Search Console** integration

Your portfolio now has comprehensive analytics tracking! 🎉
