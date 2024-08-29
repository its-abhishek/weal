const router = require("express").Router();
const passport = require("passport");
const Confession = require("../models/confessions");

const CLIENT_URL = "http://localhost:3000";

// Route to handle successful login
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "User authenticated",
            user: req.user,
            cookies: req.cookies
        });
    } else {
        res.status(401).json({
            success: false,
            message: "User not authenticated",
        });
    }
});

// Route to handle failed login
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "User failed to authenticate",
    });
});

// Route to handle logout
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to log out",
            });
        }
        res.redirect(CLIENT_URL);
    });
});

// Route to initiate Google authentication
router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

// Route to handle callback from Google
router.get("/google/callback", 
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed"
    })
);

// Route to handle confession form submissions
router.post("/confessionform", (req, res) => {
    if (req.user) {
        const { query, confess } = req.body;
        const newConfession = new Confession({
            query: query,
            confession: confess,
            user: req.user._id // Storing user ID, assuming user is stored in MongoDB
        });

        newConfession.save()
            .then(confession => {
                res.status(200).json({
                    success: true,
                    message: "Confession saved",
                    confession
                });
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    message: "Confession not saved",
                    error: err.message
                });
            });
    } else {
        res.status(401).json({
            success: false,
            message: "User not authenticated",
        });
    }
});

module.exports = router;
