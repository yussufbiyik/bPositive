const CENTER_COLOR_HEX_VALUES = [
    '#800080', 
    '#1B998B', 
    '#F26419',
    '#EA526F',
    '#EC0B43',
    '#E94F37',
    '#16302B',
    '#BDB246',
]

// Generated by ChatGPT
// Let me know if there are some low quality sentences
const POSITIVE_SENTENCES = [
    "be happy with what you have while you work for what you want",
    "There's no right time, JUST TIME and what you do with it",
    "You inspire people who pretend to not even see you",
    "expect nothing, appreciate everything",
    "most people don't know themselves, so what does it matter what they think of you",
    "Every day is a new opportunity to create something amazing", 
    "Believe in yourself and you can achieve anything", 
    "Life is full of possibilities and opportunities", 
    "You are capable of achieving greatness", 
    "It's never too late to start over and chase your dreams", 
    "Your mistakes don't define you, they help you grow", 
    "Focus on the good things in life and they will multiply", 
    "A positive attitude can change everything", 
    "The world needs your unique talents and skills", 
    "Every day is a chance to learn something new", 
    "You are stronger than you realize", 
    "Be kind, and watch the world become a better place", 
    "Your hard work will pay off in the end", 
    "Believe in the power of your dreams", 
    "Be the reason someone smiles today", 
    "You are worthy of love and respect", 
    "Your potential is limitless", 
    "Take the leap and chase your dreams", 
    "Kindness is always in fashion", 
    "The future is bright and full of possibilities", 
    "You are capable of creating your own happiness", 
    "Believe in the magic of new beginnings", 
    "You are never too old to set a new goal or dream a new dream", 
    "Embrace change and watch yourself grow", 
    "The best is yet to come", 
    "Your hard work and dedication will pay off", 
    "Stay true to yourself and follow your heart", 
    "Focus on progress, not perfection", 
    "Believe in your ability to overcome any obstacle", 
    "A positive mindset leads to positive outcomes", 
    "Believe in yourself and others will too", 
    "Your dreams are within reach if you work hard enough", 
    "Always look for the good in people and situations", 
    "You are capable of achieving your wildest dreams", 
    "The universe has a way of working things out for you", 
    "Believe in your ability to make a difference in the world", 
    "Focus on what you can control, and let go of the rest", 
    "Don't let fear hold you back from your dreams", 
    "Believe in the power of positivity", 
    "Stay committed to your goals and you will achieve them", 
    "You have the power to create the life you want", 
    "Every experience is an opportunity to learn and grow", 
    "Believe in the power of your own uniqueness", 
    "Keep pushing forward, even when things get tough", 
    "Every day is a chance to make a difference in someone's life", 
    "Believe in the power of your own voice", 
    "A grateful heart attracts more blessings", 
    "You are capable of overcoming any challenge that comes your way", 
    "Believe in the beauty of your own journey", 
    "The world needs your light and positivity", 
    "Your attitude can change the world around you", 
    "Believe in yourself, and you will inspire others to do the same", 
    "You are worthy of love and happiness", 
    "Your kindness can make a world of difference to someone", 
    "Believe in the power of your own resilience", 
    "Every step you take brings you closer to your goals", 
    "The world is full of beauty and wonder, if you know where to look", 
    "Believe in the power of your own story", 
    "Your unique perspective is valuable and important", 
    "Every day is a chance to start fresh and try again", 
    "Believe in the power of your own intuition", 
    "You are capable of achieving anything you set your mind to", 
    "Your potential is limitless, and the sky's the limit", 
    "Believe in the power of your own creativity", 
    "Your passion can change the world around you"
];

function hexToHSL(hex) {
    const brightnessAdjustment = Math.floor(Math.random() * (80 - (-80) + 1)) + (-80);
    // Convert hex to RGB first
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    r = Math.max(0, Math.min(r, 255));
    g = Math.max(0, Math.min(g, 255));
    b = Math.max(0, Math.min(b, 255));
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = Math.min(Math.max(l + brightnessAdjustment, 0), 100); // Adjust the lightness value

    return "hsl(" + h + "," + s + "%," + l + "%)";
}


document.body.onload = () => {
    const PRIMARY_COLOR = CENTER_COLOR_HEX_VALUES[Math.floor(Math.random() * CENTER_COLOR_HEX_VALUES.length)];
    const SECONDARY_COLOR = hexToHSL(PRIMARY_COLOR.slice(1));

    const message = document.getElementById('message');
    message.innerText = POSITIVE_SENTENCES[Math.floor(Math.random()*POSITIVE_SENTENCES.length)];
    // message.style.webkitTextStroke = `1px ${SECONDARY_COLOR}`;

    const CIRCLE_ANIMATON_DURATION = 2000;
    const SHADOW_MOVE_VALUE = 50;
    var shadowMoveAmountX = Math.floor(Math.random() * (SHADOW_MOVE_VALUE - (-SHADOW_MOVE_VALUE) + 1)) + (-SHADOW_MOVE_VALUE);
    var shadowMoveAmountY = Math.floor(Math.random() * (SHADOW_MOVE_VALUE - (-SHADOW_MOVE_VALUE) + 1)) + (-SHADOW_MOVE_VALUE);
    
    const circle = document.getElementById('circle');
    circle.style.background = PRIMARY_COLOR;
    circle.animate(
        [
            {
                filter: "blur(30px)"
            },
            {
                width: "300px",
                filter: `blur(40px) drop-shadow(${shadowMoveAmountX}px ${shadowMoveAmountY}px 50px ${SECONDARY_COLOR})`
            },
            {
                filter: "blur(30px)"
            }
        ], {
            duration: CIRCLE_ANIMATON_DURATION,
            iterations: 1
        }
    )
    setInterval(() =>{
        shadowMoveAmountX = Math.floor(Math.random() * (SHADOW_MOVE_VALUE - (-SHADOW_MOVE_VALUE) + 1)) + (-SHADOW_MOVE_VALUE);
        shadowMoveAmountY = Math.floor(Math.random() * (SHADOW_MOVE_VALUE - (-SHADOW_MOVE_VALUE) + 1)) + (-SHADOW_MOVE_VALUE);
        var shadowMoveAmountXSecondary = Math.floor(Math.random() * (SHADOW_MOVE_VALUE - (-SHADOW_MOVE_VALUE) + 1)) + (-SHADOW_MOVE_VALUE);
        var shadowMoveAmountYSecondary = Math.floor(Math.random() * (SHADOW_MOVE_VALUE - (-SHADOW_MOVE_VALUE) + 1)) + (-SHADOW_MOVE_VALUE);
        circle.animate(
            [
                {
                    filter: "blur(30px)"
                },
                {
                    width: "300px",
                    filter: `blur(40px) 
                    drop-shadow(${shadowMoveAmountX}px ${shadowMoveAmountY}px 20px ${SECONDARY_COLOR}) 
                    drop-shadow(${shadowMoveAmountX}px ${shadowMoveAmountY}px 40px ${SECONDARY_COLOR}) 
                    drop-shadow(${shadowMoveAmountXSecondary}px ${shadowMoveAmountYSecondary}px 20px ${PRIMARY_COLOR})
                    drop-shadow(${shadowMoveAmountXSecondary}px ${shadowMoveAmountYSecondary}px 40px ${PRIMARY_COLOR})`
                },
                {
                    filter: "blur(30px)"
                }
            ], {
                duration: CIRCLE_ANIMATON_DURATION,
                iterations: 1
            }
        )
    },CIRCLE_ANIMATON_DURATION)
}

// Coolest code ever
// https://codepen.io/yusufbiyik/pen/PoBoqZv
Number.prototype.mapNumbers = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const moveableElements = document.querySelectorAll('.moveable');
const MAX_MOVE_NUMBER = 7;
document.addEventListener('mousemove', (event) => {
    const verticalCenter = window.innerHeight/2,
        horizontalCenter = window.innerWidth/2;
        centerOffsetY = verticalCenter-event.pageY,
        centerOffsetX = horizontalCenter-event.pageX,
    moveableElements.forEach(element => {
        element.style.transform = `translate(${centerOffsetX.mapNumbers(0, horizontalCenter, 0, MAX_MOVE_NUMBER)}px, ${centerOffsetY.mapNumbers(0, verticalCenter, 0, MAX_MOVE_NUMBER)}px)`
    })
})
