document.addEventListener('DOMContentLoaded', () => {
  const numStars = 500;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const stars = [];

  // Crear estrellas con posición 3D
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const radius = Math.random() * 300 + 50; // distancia al centro
    const angle = Math.random() * 2 * Math.PI;
    const z = Math.random() * 400 - 200; // profundidad
    const speed = 0.001 + Math.random() * 0.002;

    stars.push({ element: star, radius, angle, z, speed });
    document.body.appendChild(star);
  }

  function animateStars() {
    stars.forEach(star => {
      star.angle += star.speed * 60;
      const x = centerX + star.radius * Math.cos(star.angle);
      const y = centerY + star.radius * Math.sin(star.angle);
      const scale = 1 - (star.z / 600); // simula profundidad
      const blur = Math.max(0, Math.abs(star.z) / 50);

      star.element.style.left = x + 'px';
      star.element.style.top = y + 'px';
      star.element.style.transform = `scale(${scale})`;
      star.element.style.filter = `blur(${blur}px)`;
      
      // Girar en espiral acercando o alejando z
      star.z += 0.2; 
      if (star.z > 200) star.z = -200;
    });
    requestAnimationFrame(animateStars);
  }

  animateStars();

  // Frases
  const frases = [
    'Ten un buen viaje.',
    'Vuelve pronto a casa.',
    'Tu puedes hacer todo lo que te propongas.',
    'Esfuarzate para lograr tus objetivos.',
    'No te alejes nunca de Dios.',
    'Nunca estaras sola.',
    'Cuidate mucho.',
    'hechale ganas auryyy',
    'Con Dios puedes hacer todo.',
    'Siempre estaremos contigo.',
    'Brilla como si todo el universo te mirara.'
  ];

  const fraseEl = document.getElementById('frase');
  let index = 0;

  function cambiarFrase() {
    fraseEl.textContent = frases[index];
    index = (index + 1) % frases.length;
  }

  cambiarFrase();
  setInterval(cambiarFrase, 8000);
});