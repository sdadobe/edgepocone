# DA.live Homepage Sample

Use this sample to create the first authored homepage in Google Docs or da.live.

## Page setup

- Create a Google Doc named `index` in the root of the mounted Drive folder.
- The document path `index` maps to the site root `/`.
- Add one `talent-hub` block table with a single content column.

## Recommended block table

Create a 1-column table with 4 rows.

Row 1:

```text
talent-hub
```

Row 2:

```text
# Welcome back, Ximena!
## Your focus this week: LEAD Year End & Compliance
We've prioritized your tasks based on approaching deadlines. You have 3 important items that need attention by Friday, plus 2 feedback requests for the year-end review cycle. See our new How-to Guide on Applying All In Leadership during Counselor Conversations.
```

Row 3:

```text
## Tasks
View All

- DUE TODAY | Submit Timesheet
  You have not submitted your timesheet yet, submit by Friday.
  Submit
- DUE APRIL 12 | Complete cybersecurity training
  Annual compliance training is due by mid-April.
  Complete
- DUE SOON | Review Consultee Feedback
  Zelda has received new LEAD feedback.
  Review
```

Row 4:

```text
## Talent Summary
Customize
### My Performance
View All

- Utilization
  73% Effective
  68% Full
  2% vs last week
- CE Hours
  12/40
  3 vs last week
- Independence
  PIRA Complete
- Sales
  $304,294
  $8,342 vs last week
```

## Authoring notes

- The first list item in `Tasks` is styled as neutral; the remaining items are styled as alerts.
- Each task item expects three lines inside the bullet: title, description, and action label.
- Each metric item expects a title line and one or more value lines inside the bullet.
- The sales sparkline from the HTML sample is developer-provided; authors can supply the text values only.

## Preview flow

1. Open the `index` document in Google Docs or da.live.
2. Use AEM Sidekick `Preview` to generate the preview page.
3. Verify the page at `https://main--edgepocone--sdadobe.aem.page/`.
4. Use `Publish` when the preview is correct.