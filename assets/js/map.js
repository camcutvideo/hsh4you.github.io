function findAddress() {
  var address = '';
  var cells = document.getElementsByTagName("td");
  var i;
  for (i = 0; i < cells.length; i++) {
    cellcontent = cells[i].innerHTML;
    if (cellcontent.indexOf('Adresse') >= 0) {
      address = cells[i+1].innerHTML;
      break;
    }
  }
  return address;
};

// source: https://www.embedgooglemap.net/
function showMap(address = '', showheader=1, id='') {
  if (address.length == 0) { address = findAddress(); }
  if (address.length == 0) { return };
  var zoomfactor = 14;
  var htmlcode = '';
  if (showheader == 1) {
    htmlcode += '\n<h2>Karte</h2>'; 
  }
  htmlcode += '\n<iframe ';
  htmlcode += (id.length > 0) ? 'id="' + id + '" ' : '';
  htmlcode += 'class="gmap_iframe" src="https://maps.google.com/maps';
  htmlcode += '?q=' + address;
  htmlcode += '&z=' + zoomfactor;
  htmlcode += '&output=embed" frameborder="0"></iframe>';
  htmlcode = '<div id="gmap">' + htmlcode + '</div><br>' + address;
  document.getElementById('gmap').outerHTML = htmlcode;
};
