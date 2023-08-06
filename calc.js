// Function to set an active tab
function setActiveTab(tab) {
    const tabs = document.querySelectorAll("#tabs a");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
    tab.classList.add("active");
}

// Function to show a section
function showSection(section) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });
    section.style.display = "block";
}

// Handle tab clicks

document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetTab = this.getAttribute("data-tab");

          tabContents.forEach(content => {
              content.style.display = "none";
          });

          document.getElementById(targetTab).style.display = "block";
      });
  });
});

// Home Energy Carbon Calculator Logic
document.getElementById("home-energy-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const electricity = parseFloat(document.getElementById("electricity").value);
  const percentNotSolar = parseFloat(document.getElementById("percent-not-solar").value);
  const naturalGas = parseFloat(document.getElementById("natural-gas").value);
  const fuelOil = parseFloat(document.getElementById("fuel-oil").value);
  const propane = parseFloat(document.getElementById("propane").value);

  const carbonElectricity = electricity * 73.49525252525253; // Conversion factor for electricity
  const carbonNaturalGas = naturalGas * 134.35955056179775; // Conversion factor for natural gas
  const carbonFuelOil = fuelOil * 67.49253731343284; // Conversion factor for fuel oil
  const carbonPropane = propane * 60.38866396761133; // Conversion factor for propane

  const totalHomeEnergyCarbon = (carbonElectricity * (1-(percentNotSolar / 100))) + carbonNaturalGas + carbonFuelOil + carbonPropane;

  document.getElementById("home-energy-result").textContent = totalHomeEnergyCarbon.toFixed(2) + " lbs";
});


// Transportation Carbon Calculator Logic
document.getElementById("transportation-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const annualMilesDrivenGas = parseFloat(document.getElementById("annual-miles-driven-gas").value);
  const annualMilesDrivenDiesel = parseFloat(document.getElementById("annual-miles-driven-diesel").value);
  const mpgRate = parseFloat(document.getElementById("mpg-rate").value);
  const busMiles = parseFloat(document.getElementById("bus-miles").value);
  const trainMiles = parseFloat(document.getElementById("train-miles").value);

  // Calculate carbon footprint for car energy consumption
  const carbonCarEnergyGas = (annualMilesDrivenGas / mpgRate) * 19.8682209832742; // Conversion factor for gasoline
  const carbonCarEnergyDiesel = (annualMilesDrivenDiesel / mpgRate) * 2.8766334848; // Conversion factor for gasoline

  // Calculate carbon footprint for bus and train transportation
  const carbonBusTransportation = busMiles * 0.3417165064; // Conversion factor for bus
  const carbonTrainTransportation = trainMiles * 0.0158291904; // Conversion factor for train

  // Sum up individual carbon footprints for transportation
  const totalTransportationCarbon = carbonCarEnergyGas + carbonCarEnergyDiesel + carbonBusTransportation + carbonTrainTransportation;

  document.getElementById("transportation-result").textContent = totalTransportationCarbon.toFixed(2) + " lbs";
});


// Food Carbon Calculator Logic
document.getElementById("food-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const meatEggsCalories = parseFloat(document.getElementById("meat-eggs-calories").value);
  const grainsCalories = parseFloat(document.getElementById("grains-calories").value);
  const dairyCalories = parseFloat(document.getElementById("dairy-calories").value);
  const fruitsVegetablesCalories = parseFloat(document.getElementById("fruits-vegetables-calories").value);
  const snacksDrinksCalories = parseFloat(document.getElementById("snacks-drinks-calories").value);

  // Calculate carbon footprint for food consumption
  const carbonMeatEggs = meatEggsCalories * 4.4483910851; // Conversion factor for meat/fish/eggs
  const carbonGrains = grainsCalories * 1.1658501443; // Conversion factor for grains/baked goods
  const carbonDairy = dairyCalories * 3.2160796819; // Conversion factor for dairy
  const carbonFruitsVegetables = fruitsVegetablesCalories * 2.6951376806; // Conversion factor for fruits/vegetables
  const carbonSnacksDrinks = snacksDrinksCalories * 0.9024243243; // Conversion factor for snacks/drinks

  // Sum up individual carbon footprints for food
  const totalFoodCarbon = carbonMeatEggs + carbonGrains + carbonDairy + carbonFruitsVegetables + carbonSnacksDrinks;

  document.getElementById("food-result").textContent = totalFoodCarbon.toFixed(2) + " lbs";
});


// Goods Carbon Calculator Logic
document.getElementById("goods-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const furnitureCost = parseFloat(document.getElementById("furniture").value);
  const clothingCost = parseFloat(document.getElementById("clothing").value);
  const unrecycleablePaperCost = parseFloat(document.getElementById("unrecycleable-paper").value);
  const hygieneCleaningCost = parseFloat(document.getElementById("hygiene-cleaning").value);
  const medicationCost = parseFloat(document.getElementById("medication").value);

  // Calculate carbon footprint for goods consumption
  const carbonFurniture = furnitureCost * 13.494592072; // Conversion factor for furniture
  const carbonClothing = clothingCost * 13.750125471; // Conversion factor for clothing
  const carbonUnrecycleablePaper = unrecycleablePaperCost * 8.5724193288; // Conversion factor for unrecycleable paper products
  const carbonHygieneCleaning = hygieneCleaningCost * 16.146118155; // Conversion factor for hygiene/cleaning products
  const carbonMedication = medicationCost * 9.5657693713; // Conversion factor for medication

  // Sum up individual carbon footprints for goods
  const totalGoodsCarbon = carbonFurniture + carbonClothing + carbonUnrecycleablePaper + carbonHygieneCleaning + carbonMedication;

  document.getElementById("goods-result").textContent = totalGoodsCarbon.toFixed(2) + " lbs";
});
