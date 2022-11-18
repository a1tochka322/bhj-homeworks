const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);
deactivateHole = index =>
  getHole( index ).className = 'hole';

(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      if (getHole(activeHole).classList.contains( 'hole_has-mole' )) {
        lost.textContent ++;
      }
      if (lost.textContent > 4) {
        alert("Поражение!");
        dead.textContent = "0";
        lost.textContent = "0";
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 600 );

  next();
})();

for (let i = 1; i < 10; i++) {
  const hole = getHole(i);
  hole.onclick = function () {
    if (hole.classList.contains( 'hole_has-mole' )) {
      dead.textContent ++;
      deactivateHole(i);
    } else {
      lost.textContent ++;
      deactivateHole(i);
    }
    if (dead.textContent > 9) {
      alert("Победа!");
      dead.textContent = "0";
      lost.textContent = "0";
    } else if (lost.textContent > 4) {
      alert("Поражение!");
      dead.textContent = "0";
      lost.textContent = "0";
    }
  }
}