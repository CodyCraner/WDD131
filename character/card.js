const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "snortleblat.webp", 

    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0; 
                document.getElementById('attack-btn').disabled = true;
            }
            updateCardDisplay();
        } 
    },

    levelUp: function() {
        this.level += 1;
        this.health = Math.min(100, this.health + 30); 
        document.getElementById('attack-btn').disabled = false; 
        updateCardDisplay();
    }
};

function updateCardDisplay() {
    const healthEl = document.getElementById('char-health');

    document.getElementById('char-name').textContent = character.name;
    document.getElementById('char-class').textContent = character.class;
    document.getElementById('char-level').textContent = character.level;
    document.getElementById('char-image').src = character.image;
    
    healthEl.classList.remove('dead-status');

    if (character.health === 0) {
        healthEl.textContent = 'DEAD';
        healthEl.classList.add('dead-status');
    } else {
        healthEl.textContent = character.health;
        if (character.health <= 40) {
            healthEl.classList.add('dead-status');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCardDisplay();

    document.getElementById('attack-btn').addEventListener('click', () => {
        character.attacked();
    });

    document.getElementById('level-btn').addEventListener('click', () => {
        character.levelUp();
    });
});