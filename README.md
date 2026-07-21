<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/21f10b69-edaa-452a-8d26-c6c13a647b6b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Firebase Setup

This app uses the Firebase project configured in [firebase-applet-config.json](firebase-applet-config.json).

1. Open the Firebase Console and select the project `pragmatic-yarrow-r8gvj`.
2. Go to **Build > Authentication > Sign-in method**.
3. Enable these providers:
   - **Email/Password** for normal account login.
   - **Anonymous** for the "Salvar na Nuvem sem Criar Conta" button.
   - **Google** if you want the Google login button to work.
4. Go to **Authentication > Settings > Authorized domains** and add:
   - `localhost`
   - `localhost:3000`
   - your current AI Studio / deployed domain
5. Go to **Firestore Database** and make sure the database exists for the configured database id:
   - `ai-studio-portaldeestudosp-21f10b69-edaa-452a-8d26-c6c13a647b6b`
6. Keep the Firestore rules from [firestore.rules](firestore.rules):
   - user progress and revisions are private per authenticated user
   - custom questions are public

If the anonymous button still returns `auth/admin-restricted-operation`, the Anonymous provider is still disabled in Firebase Auth.
