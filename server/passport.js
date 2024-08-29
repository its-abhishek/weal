const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,       // Ensure this is correctly set
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Ensure this is correctly set
    callbackURL: "http://localhost:3000/auth/google/callback" // Ensure this matches your Google Cloud Console redirect URI
  },
  function(accessToken, refreshToken, profile, done) {
    // Your user verification or registration logic here
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});