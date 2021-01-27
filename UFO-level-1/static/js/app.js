// from data.js
var alienData = data;

// select the table body
var tbody = d3.select("tbody");

// enter the table data with D3
alienData.forEach(function(ufoReport) {

    // console.log array
    console.log(ufoReport);

    // add one table row `tr` for each encounter
    var row = tbody.append("tr");

    // console.log each encounter with D3
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      
      // add cell for each encounter
      var cell = row.append("td");
      cell.text(value);
    });
  });

// select the submit button
var submitButton = d3.select("#filter-btn");

// create event listener with handler
submitButton.on("click", function() {
    
    // empty HTML
    tbody.html("")
    
    // prevent default click handling
    d3.event.preventDefault();

    // setting up for input and filtering
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // console.log arrays
    console.log(inputValue)
    console.log(alienData) 

    // filter data
    var filteredData = alienData.filter(bydate => bydate.datetime === inputValue);

    // console.log array
    console.log(filteredData);

    // enter the table data with D3
    filteredData.forEach(function(filteredReport) {

        // console.log array
        console.log(filteredReport);

        // add one table row `tr` for each encounter
        var row = tbody.append("tr")

        // update each cell's values with filtered data via D3
        Object.entries(filteredReport).forEach(function([key,value]){
            console.log(key,value);

            // add cell for each encounter
            var cell = tbody.append("td");
            cell.text(value)
        });
    });
});

