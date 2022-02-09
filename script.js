var ids =  ['slaoverknop','eensknop','oneensknop','geenvanbeideknop'];

for (var i = 0; i <ids.length; i++) {
  var replace = document.getElementById(ids[i]);
  replace.value = ids[i];
  replace.onclick = stemwijzerstart;
}





function stemwijzerstart() {
  console.log(this.value);
}
