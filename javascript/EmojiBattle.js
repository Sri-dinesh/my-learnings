// --- EMOJI BATTLE SIMULATOR ---

const createFighter = (name, icon, health, maxDamage) => {
  return {
    name: name,
    icon: icon,
    health: health,
    maxDamage: maxDamage,
  };
};

const hero = createFighter("Sir Codealot", "⚔️", 100, 25);
const monster = createFighter("Bugzilla", "🦖", 100, 20);

// 'onGameOver' is a CALLBACK function we will pass in later
function startBattle(fighter1, fighter2, onGameOver) {
  console.log(`
📢 MATCH START: ${fighter1.icon} ${fighter1.name} VS ${fighter2.icon} ${fighter2.name}`);
  console.log("------------------------------------------------");

  let round = 1;

  while (fighter1.health > 0 && fighter2.health > 0) {
    console.log(`
--- ROUND ${round} ---
`);

    // Fighter 1 Attacks Fighter 2
    let damage1 = Math.floor(Math.random() * fighter1.maxDamage);
    fighter2.health = fighter2.health - damage1;
    
    if (fighter2.health < 0) fighter2.health = 0;

    console.log(
      `${fighter1.icon} attacks! Dealt ${damage1} dmg. ${fighter2.icon} HP: ${fighter2.health}`
    );

    // Check if Fighter 2 died immediately
    if (fighter2.health === 0) {
      break;
    }

    // Fighter 2 Attacks Fighter 1 (Counter-attack)
    let damage2 = Math.floor(Math.random() * fighter2.maxDamage);
    fighter1.health = fighter1.health - damage2;

    if (fighter1.health < 0) fighter1.health = 0;

    console.log(
      `${fighter2.icon} fights back! Dealt ${damage2} dmg. ${fighter1.icon} HP: ${fighter1.health}`
    );

    round++;
  }

  let winner = null;
  if (fighter1.health > 0) {
    winner = fighter1;
  } else {
    winner = fighter2;
  }

  onGameOver(winner);
}

const celebrate = (champion) => {
  console.log(
    "\n------------------------------------------------\n"
  );
  console.log(`🏆 GAME OVER! The winner is ${champion.name} ${champion.icon}`);
  console.log(`🎉 Value of 'this' check: Winner has ${champion.health} HP left.`);
  console.log("------------------------------------------------\n");
};

startBattle(hero, monster, celebrate);

/**
 * 📝 PROJECT EXPLANATION (Concepts Used):
 * 
 * 1. Variables (const, let): Used to store fighter stats and the round counter.
 * 2. Objects: 'hero' and 'monster' are objects grouping properties (name, health).
 * 3. Functions: 'createFighter' makes objects; 'startBattle' runs the game.
 * 4. Loops (while): The battle keeps running AS LONG AS both fighters have health > 0.
 * 5. Math & Numbers: Math.random() calculates unpredictable damage values.
 * 6. Conditionals (if): Checks if a fighter is dead to break the loop or set health to 0.
 * 7. Strings (Template Literals): Used backticks `` to insert variables into logs easily.
 * 8. Callbacks: 'celebrate' is passed into 'startBattle' and called only when the fight ends.
 */
