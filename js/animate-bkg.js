const canvas = document.getElementById('glitch__bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function draw() {
    requestAnimationFrame(draw);

    ctx.fillStyle = 'rgba(11, 12, 21, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(x, y, 2, 2);
    }

    if (Math.random() > 0.95) {
        const y = Math.random() * canvas.height;
        const h = Math.random() * 50;

        ctx.fillStyle = 'rgba(0, 243, 255, 0.05)';
        ctx.fillRect(0, y, canvas.width, h);
    }
}

draw();