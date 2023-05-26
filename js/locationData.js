const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

const locationSelectorEl= document.getElementById('locationSelector');
const parkTable = document.getElementById('parksTable');
const parkTypeSelectorEl = document.getElementById('parkTypeSelector');

locationsArray.forEach((location) => {
    const optionEl = new Option(location);
    locationSelectorEl.appendChild(optionEl);
  });
  



  locationSelectorEl.addEventListener('change', () => {
    const tbody = parkTable.querySelector('tbody');
  tbody.innerHTML = '';

  const selectedLocation = locationSelectorEl.value;

  const locationSelected = nationalParksArray.filter(
    (location) => location.State === selectedLocation
  )

  

  locationSelected.forEach((location) => {
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







//function showTypeOfPark 
  





  
