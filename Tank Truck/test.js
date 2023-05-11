function tankvol(h, d, vt) {
  const r = d/2;
  const l = vt / (Math.PI * r * r); // length of the cylinder
  const theta = 2 * Math.acos((r - h)/r); // angle of the segment
  const area = (r*r/2)*(theta - Math.sin(theta)); // area of the segment
  return Math.floor(area * l);

}
console.log(tankvol(5,7,3848));