/**
 * Garden Advice Application
 *
 * Demonstrates:
 * - Functions
 * - DOM Manipulation
 * - Event Handling
 * - Conditional Logic
 */

/**
 * Returns advice based on season.
 *
 * @param {string} season
 * @returns {string}
 */
function getSeasonAdvice(season) {
  const seasonAdvice = {
    summer: "Water your plants regularly and provide some shade.",

    autumn: "Remove dead leaves and prepare soil for cooler weather.",

    winter: "Protect your plants from frost with covers.",

    spring: "Plant new flowers and vegetables for the growing season.",
  };

  return seasonAdvice[season] || "No advice available for this season.";
}
/**
 * Returns advice based on plant type.
 *
 * @param {string} plantType
 * @returns {string}
 */
function getPlantTypeAdvice(plantType) {
  const plantAdvice = {
    flower: "Use fertiliser to encourage blooms.",

    vegetable: "Keep an eye out for pests.",

    herb: "Harvest regularly to encourage growth.",

    fruitTree: "Prune damaged branches and monitor fruit development.",
  };

  return plantAdvice[plantType] || "No advice available for this plant type.";
}

/**
 * Runs when the button is clicked.
 */
document
  .getElementById("generateAdvice")
  .addEventListener("click", function () {
    // Get selected season
    const season = document.getElementById("season").value;

    // Get selected plant type
    const plantType = document.getElementById("plantType").value;

    // Generate advice
    const advice =
      getSeasonAdvice(season) + " " + getPlantTypeAdvice(plantType);

    // Display advice on page
    document.getElementById("output").textContent = advice;
  });
