export const pickupLines = [
  "Are you a magician? Because whenever I look at you, everyone else disappears! ✨",
  "Do you have a map? Because I just got lost in your eyes! 🗺️",
  "Are you WiFi? Because I'm really feeling a connection! 📶",
  "Is your name Google? Because you have everything I've been searching for! 🔍",
  "Are you a parking ticket? Because you've got 'FINE' written all over you! 🎫",
  "Do you believe in love at first sight, or should I walk by again? 👀",
  "Are you a camera? Because every time I look at you, I smile! 📸",
  "Is your dad a boxer? Because you're a knockout! 🥊",
  "Are you made of copper and tellurium? Because you're Cu-Te! ⚗️",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you! 🩹",
  "Are you a time traveler? Because I see you in my future! ⏰",
  "Is your name Chapstick? Because you're da balm! 💋",
  "Are you a loan from a bank? Because you have my interest! 🏦",
  "Do you work at Starbucks? Because I like you a latte! ☕",
  "Are you Australian? Because when I look at you, I feel like I'm down under! 🇦🇺"
];

export function getRandomPickupLine(): string {
  return pickupLines[Math.floor(Math.random() * pickupLines.length)];
}