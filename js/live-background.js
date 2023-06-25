/**
 * Version: 1.0.0, 15 June 2023
 * Author: Andrew Kim
 */

// get canvas

const canvas = document.getElementById("canvas");

let numDots = 100;
let dotRadius = 130;
let dotColor = "#2e2e2e";
let lineWidth = 1;
let canvasColor = "black";

const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);


// clear canvas
function clearCanvas() {
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


// initial window refresh
window.onload = function() {
    if (!localStorage.getItem('hasLoadedOnce')) {
        localStorage.setItem('hasLoadedOnce', true);
        location.reload();
    } else {
        localStorage.removeItem('hasLoadedOnce');
    }
};
// adjust script parameters to match viewable window
if (window.innerWidth > 767) {
    canvas.width = window.innerWidth - 217;
    canvas.height = window.innerHeight;
} else {
    console.log(window.innerWidth);
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 65;
    numDots = 50;
    dotRadius = 100;
}


// Point class
class Point {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 3;
        this.speed = 1;

        this.dx = this.randD();
        this.dy = this.randD();
    }

    randD() {
        return (Math.random() - 0.5) * this.speed;
    }


    // draw on canvas
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
        ctx.closePath();
    }


    // change direction after collision
    reverseDirection() {
        this.dx = -this.dx;
        this.dy = -this.dy;
    }


    // collision behavior and line drawing
    updateGraphics() {
        // collision with wall
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.reverseDirection();
        }
        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.reverseDirection();
        }

        // collision with other points and line drawing
        for (let point of points) {
            if (point === this) continue;
            let distance = Math.sqrt(Math.pow((point.x - this.x), 2) + Math.pow((point.y - this.y), 2));
            if (distance < dotRadius) {
                ctx.strokeStyle = dotColor;
                ctx.lineWidth = lineWidth * (dotRadius - distance) / dotRadius;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
            }
            if (distance < this.radius + point.radius) {
                this.reverseDirection();
                break;
            }
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}


// create and store points
let points = [];
for (let i = 0; i < numDots; i++) {
    points.push(new Point());
}


// animate all points
function animateAll() {
    clearCanvas();
    points.forEach(point => {
        point.updateGraphics();
        point.draw();
    });
    requestAnimationFrame(animateAll);
}



animateAll();
