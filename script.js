let map = document.querySelector("#map");

let files = [
  //JANUARY
  "28012024.gpx"
];

console.log(files[files.length-1]);

function tostr(x){
  let output = 'https://gpxstudio.github.io/?state=%7B%22urls%22:%5B'
  for (let file of x) {
   output = output + "%22https%3A%2F%2Fgpxfiles.s3.eu-west-2.amazonaws.com%2F" + file + "%22,"
  }
  mapsrc = output.slice(0, -1);
  mapsrc = mapsrc + '%5D%7D&embed'
  return mapsrc;
}

map.src = tostr(files);
