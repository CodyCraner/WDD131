  const SPURS_ROSTER = {
    "tim duncan": 99,
    "david robinson": 95,
    "manu ginobili": 93,
    "tony parker": 92,
    "george gervin": 94,
    "kawhi leonard": 96,
    "lamarcus aldridge": 88,
    "demar derozan": 85,
    "dejounte murray": 84,
    "victor wembanyama": 97,
    "bruce bowen": 80,
    "sean elliott": 83,
    "james silas": 81,
    "avery johnson": 78,
    "chris paul": 90,
    "devin vassell": 82,
    "keldon johnson": 79
  };

  const inputs = Array.from(document.querySelectorAll(".player-input"));
  const totalPoints = document.getElementById("total-points");
  const error = document.getElementById("error-message");

  function render() {
    const names = inputs.map(inp => inp.value.trim()).filter(name => name !== "");
    let total = 0;
    const invalid = [];

    names.forEach(name => {
      const points = SPURS_ROSTER[name.toLowerCase()];
      if (points !== undefined) {
        total += points;
      } else {
        invalid.push(name);
      }
    });

    totalPoints.textContent = total;

    if (invalid.length > 0) {
      const plural = invalid.length > 1 ? "aren't" : "isn't";
      error.textContent = `${invalid.join(", ")} ${plural} a Spurs player, so they earned no points.`;
      error.classList.add("show");
    } else {
      error.classList.remove("show");
    }
  }

  document.getElementById("build-btn").addEventListener("click", render);

  
  