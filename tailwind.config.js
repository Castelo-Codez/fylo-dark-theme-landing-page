/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html"],
    darkMode: ["class"],
    theme: {
        extend: {
            fontSize: {
                "main-Font-size": "14px",
            },
            lineHeight: {
                "main-line-height": "1.8",
            },
            colors: {
                "Primary-Dark-Blue-intro-and-email-sign-up-background":
                    "hsl(217, 28%, 15%)",
                "Primary-Dark-Blue-main-background": "hsl(218, 28%, 13%)",
                "Primary-Dark-Blue-footer-background": "hsl(216, 53%, 9%)",
                "Primary-Dark-Blue-testimonials-background":
                    "hsl(219, 30%, 18%)",
                "Accent-Cyan-inside-call-to-action-gradient":
                    "hsl(176, 68%, 64%)",
                "Accent-Blue-inside-call-to-action-gradient":
                    "hsl(198, 60%, 50%)",
                "Accent-Light-Red-error": "hsl(0, 100%, 63%)",
                "Neutral-White": "hsl(0, 0%, 100%)",
            },
            fontFamily: {
                "bodyFont-f": "'Open Sans', sans-serif",
                "special-f": "'Raleway', sans-serif",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            container: {
                center: true,
                padding: "15px",
                screens: {
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
        },
    },
    plugins: [],
};
