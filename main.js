const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
.typeString('Vive la experiencia Marvel')
.pauseFor(200)
.start();
