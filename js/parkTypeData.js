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


const parkTypeSelectorEl = document.getElementById('parkTypeSelector');
const parkTable = document.getElementById('parksTable');

parkTypesArray.forEach((typeOfPark) => {
  const optionEl = new Option(typeOfPark);
  parkTypeSelectorEl.appendChild(optionEl);
});

parkTypeSelectorEl.addEventListener('change', () => {
  const tbody = parkTable.querySelector('tbody');
  tbody.innerHTML = '';

  const selectedLocation = locationSelectorEl.value;

  const locationSelected = nationalParksArray.filter(
    (location) => location.State === selectedLocation)

    const parkTypeSelected = nationalParksArray.filter((location) => location.LocationName.includes(selectedType));

    parkTypeSelected.forEach((location) => {
      const row=tbody.insertRow();
  
      const cellState = row.insertCell();
      cellState.innerHTML = location.State;
  
      const cellName = row.insertCell();
      cellName.innerHTML = location.LocationName;
  
      
  
      const cellLocationID = row.insertCell();
      cellLocationID.innerHTML = location.LocationID;
  
      const cellAddress = row.insertCell();
      cellAddress.innerHTML = location.Address;
  
    });

});





