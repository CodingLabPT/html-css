function convertLat() {
	let btnLat = document.getElementById('btnLat')
    let grausLat = document.getElementById('grausLat');
    let minutosLat = document.getElementById('minutosLat');
    let segundosLat = document.getElementById('segundosLat');
    let resultLat = document.getElementById('resultLat');
    
    let graLat = grausLat.value;
    let minLat = minutosLat.value/60;
    let segLat = segundosLat.value/3600;
    
    btnLat.style.cursor = 'pointer';
    
    let totLat = Number(graLat) + Number(minLat) + Number(segLat);
    var roundLat = parseFloat(totLat.toFixed(7));
    
    resultLat.innerHTML = "Latitude: "+roundLat+" N";
}



function convertLon() {
    let grausLon = document.getElementById('grausLon');
    let minutosLon = document.getElementById('minutosLon');
    let segundosLon = document.getElementById('segundosLon');
    let resultLon = document.getElementById('resultLon');
    
    let graLon = grausLon.value;
    let minLon = minutosLon.value/60;
    let segLon = segundosLon.value/3600;
    
    let totLon = -1*(Number(graLon) + Number(minLon) + Number(segLon));
    var roundLon = parseFloat(totLon.toFixed(7));
    
    resultLon.innerHTML = "Longitude: "+roundLon+" W";
}
	
function mouseOver() {
    let btnLat = document.getElementById('btnLat')
    let btnLon = document.getElementById('btnLon')
    btnLat.style.cursor = 'pointer';
    btnLon.style.cursor = 'pointer';
}
