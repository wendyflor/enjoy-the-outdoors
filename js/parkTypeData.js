const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];

const parkTypeSelectorEl = document.getElementById("parkTypeSelector");

parkTypesArray.forEach((parkType) => {
  const optionEl = new Option(parkType);
  parkTypeSelectorEl.appendChild(optionEl);
});
