

const target = document.getElementById("scramble-text");
const cursor = document.getElementById("scramble-cursor");

const finalText = "This site is under maintenance!";
const characters = "ABCDEFGHIJKXYZabcdefnopqrstuvwxyz01789";

function scrambleText(el, text, speed = 15) {
  let iterations = 0;
  const totalFrames = text.length * 3;

  const interval = setInterval(() => {
    el.textContent = text
      .split("")
      .map((char, i) => {
        if (i < iterations / 3) return char;
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    iterations++;
    if (iterations >= totalFrames) {
      clearInterval(interval);
      el.textContent = text; // Show final clean version
    }
  }, speed);
}

scrambleText(target, finalText);

// Blink cursor animation
gsap.to(cursor, {
  opacity: 0,
  duration: 0.5,
  repeat: -1,
  yoyo: true
});

var tl= gsap.timeline()
tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("#part2", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});