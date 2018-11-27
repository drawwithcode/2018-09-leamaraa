var myMap;
var canvas;
var mappa = new Mappa('Leaflet');

var milanLat = 45.459212;
var milanLon = 9.2066057;

//
options = {
  lat: milanLat,
  lng: milanLon,
  zoom: 13,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}
function preload(){
  myFont = loadFont("./assets/Bagnard.otf");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //map
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  frameRate(2);
}

function draw() {
  clear();

  fill(0, random(100, 255), 0);

  var macao = myMap.latLngToPixel(45.4579614, 9.2221573);

  ellipse(macao.x, macao.y, 40);

  var picchio = myMap.latLngToPixel(45.4735532, 9.2070338);

  ellipse(picchio.x, picchio.y, 20);

  var cav = myMap.latLngToPixel(45.4737429, 9.1841885);

  ellipse(cav.x, cav.y, 10);

  var is = myMap.latLngToPixel(45.4881952, 9.1851219);

  ellipse(is.x, is.y, 10);

  var indro = myMap.latLngToPixel(45.4744236, 9.1971722);

  ellipse(indro.x, indro.y, 15);

  var leo = myMap.latLngToPixel(45.4784353, 9.2249212);

  ellipse(leo.x, leo.y, 10);

  fill(random(100, 255), 0, 0);

  var gam = myMap.latLngToPixel(45.4649998, 9.1407661);

  ellipse(gam.x, gam.y, 30);

  var dar = myMap.latLngToPixel(45.4537779, 9.174291);

  ellipse(dar.x, dar.y, 10);

  //text
  textFont('Bagnard');
  textSize(40);
  fill(random(255),random(255),random(255));
  text("The places I love and the places I hate",60,60);
}
