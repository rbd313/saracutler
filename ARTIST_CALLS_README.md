# Artist Calls Email Notification System

## Overview
This feature allows visitors to subscribe to email notifications about new artist calls (קולות קוראים לאמנים). When someone subscribes, they will receive updates whenever a new call for artists is posted.

## How It Works

### For Subscribers
1. Visit the "Artist Calls" section on the website
2. Enter your email address in the subscription form
3. Click "הירשם / Subscribe"
4. You'll receive notifications when new artist calls are added

### For Website Administrator

#### Adding a New Artist Call
To add a new artist call, edit the `script.js` file and add a new object to the `artistCalls` array:

```javascript
const artistCalls = [
  {
    id: 1,
    title: "Title in English / כותרת בעברית",
    description: "Description in English / תיאור בעברית",
    deadline: "YYYY-MM-DD",  // Format: "2025-12-31"
    link: "https://link-to-application.com",
    active: true  // Set to false to hide
  },
  // Add new artist calls here
  {
    id: 2,
    title: "New Call Title / כותרת חדשה",
    description: "New call description / תיאור חדש",
    deadline: "2026-03-15",
    link: "https://example.com/apply",
    active: true
  }
];
```

#### Managing Subscriptions
Email subscriptions are handled by Formspree (a free form backend service). To access subscription emails:

1. Go to https://formspree.io/
2. Sign up or log in
3. Access form ID: `xwpkevda`
4. View all subscription emails and export if needed

#### Notifying Subscribers
When you add a new artist call:
1. Update the `script.js` file with the new call details
2. Manually send an email to all subscribers from your Formspree dashboard
3. Include:
   - Title of the artist call (in Hebrew and English)
   - Description
   - Deadline
   - Link to submit application

#### Deactivating Old Artist Calls
To hide expired artist calls without deleting them:
1. Open `script.js`
2. Find the artist call
3. Change `active: true` to `active: false`

```javascript
{
  id: 1,
  title: "Old Call",
  description: "This call has expired",
  deadline: "2024-01-01",
  link: "https://example.com",
  active: false  // This will hide the call
}
```

## Technical Details

### Files Modified
- `index.html` - Added Artist Calls section with subscription form
- `script.js` - Added artist calls data structure and rendering logic
- `styles.css` - Added styling for the Artist Calls section

### Form Service
- Service: Formspree
- Form Endpoint: `https://formspree.io/f/xwpkevda`
- Free tier: 50 submissions per month

### Bilingual Support
The entire section supports both Hebrew and English:
- Section titles are bilingual
- Artist call titles and descriptions support both languages
- Form placeholders and buttons are bilingual

## Future Enhancements
Consider implementing:
- Automated email notifications using a backend service or GitHub Actions
- Admin panel for managing artist calls without editing code
- RSS feed for artist calls
- Calendar view of upcoming deadlines
