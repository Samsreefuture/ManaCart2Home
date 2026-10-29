
require("dotenv").config();

const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "20kb" }));
app.use(express.static(__dirname, { dotfiles: "ignore" }));

if (!process.env.RAZORPAY_KEY_ID ||
    !process.env.RAZORPAY_KEY_SECRET) {
    console.error("ERROR: Add Razorpay Test API keys to .env");
    process.exit(1);
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "ManaCart2Home backend running" });
});

// Temporary gateway test: fixed amount of ₹1 only.

app.post("/api/create-test-order", async (req, res) => {
    try {
        const order = await razorpay.orders.create({
            amount: 100,
            currency: "INR",
            receipt: "mc2h_test_" + Date.now()
        });

        console.log("Razorpay order created:", order.id);

        res.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.RAZORPAY_KEY_ID
        });

    } catch (error) {
        console.error("Razorpay full error:", error);
        console.error("Error message:", error?.message);
        console.error("HTTP status:", error?.statusCode);
        console.error("Error details:", error?.error);

        res.status(500).json({
            error: "Could not create Razorpay test order.",
            details: error?.error?.description
                || error?.message
                || "Check the VS Code Terminal for the full error."
        });
    }
});

app.post("/api/verify-test-payment", (req, res) => {
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = req.body || {};

    if (!razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature) {
        return res.status(400).json({
            verified: false,
            error: "Missing payment verification details."
        });
    }

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

    const received = Buffer.from(razorpay_signature, "hex");
    const expected = Buffer.from(expectedSignature, "hex");

    if (
        received.length !== expected.length ||
        !crypto.timingSafeEqual(received, expected)
    ) {
        return res.status(400).json({
            verified: false,
            error: "Payment signature verification failed."
        });
    }

    res.json({
        verified: true,
        message: "Payment signature verified successfully."
    });
});

app.listen(PORT, () => {
    console.log(`ManaCart2Home server: http://localhost:${PORT}`);
});
