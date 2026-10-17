# SpendWise website

Static website for SpendWise (plain HTML, CSS, JS). No build step.

Files: `index.html`, `about.html`, `privacy-policy.html`, `assets/style.css`, `assets/script.js`, `assets/logo.svg`.

## Set your APK link
Open `assets/script.js` and put your real URL in `DOWNLOAD_URL` (top of the file). While it is empty, the button shows a "link not added yet" message.

## Upload from an Android phone
1. Unzip the ZIP with your Files app (keep the `assets` folder).
2. Sign in at github.com in Chrome and tap **+ → New repository**. Name it `spendwise-privacy`, choose **Public**, then **Create repository**.
3. Tap **uploading an existing file**. Upload `index.html`, `about.html`, `privacy-policy.html`, `README.md`.
4. Commit. Then tap **Add file → Create new file**, type `assets/style.css` as the name (the slash makes the folder), paste the file content, and commit. Repeat for `assets/script.js` and `assets/logo.svg`. (Or use Chrome's "Desktop site" to upload the `assets` folder.)
5. Go to **Settings → Pages**. Under **Branch** choose `main` and folder `/ (root)`, then **Save**.
6. Wait 1–3 minutes. Expected URLs (not confirmed until live):
   - https://nylbertvo.github.io/spendwise-privacy/
   - https://nylbertvo.github.io/spendwise-privacy/privacy-policy.html
   - https://nylbertvo.github.io/spendwise-privacy/about.html

## Before publishing
- Check the feature and privacy wording against your real app and APK. If the APK has ads, analytics or network access, update the Privacy Policy.
- Update the "Last updated" date in `privacy-policy.html` whenever you change the policy.
