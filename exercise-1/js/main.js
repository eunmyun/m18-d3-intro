// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
  var newDiv = $('<div>');
  d3.select("#sandbox").append(newDiv);
  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
  var mySvg = $('<svg>');
  d3.newDiv.append(mySvg);
  // Set both the width and height attributes of your `svg` to 300
  d3.mySvg.attr('width', '300');
  d3.mySvg.attr('height', '300');
  // Append a `circle` element to your `svg`, setting the properties noted in index.html
  var myCircle = $('<circle>');
  d3.myCircle.attr('r','30');
  d3.myCircle.attr('cx','75');
  d3.myCircle.attr('cy','30');
  d3.myCircle.style('opacity', '0.5');
  d3.myCircle.style('fill','blue');
  d3.mySvg.append(myCircle);

  // Append a `rect` element to your `svg`, setting the properties noted in index.html

});
