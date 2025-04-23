const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 800;
const height = 400;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill background
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, width, height);

// Add text
ctx.fillStyle = '#000000';
ctx.font = 'bold 48px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('ENGSci is the best engineering', width / 2, height / 2);

// Save to file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/engsci-best.png', buffer); 