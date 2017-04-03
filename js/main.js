var objHouse = [
  {
    house: "Gryffindor",
    colors: "red and gold",
    element: "fire",
    imgPath: "http://orig14.deviantart.net/a1c6/f/2014/151/b/5/gryffindor_icon_by_yuureiburu-d7kgkto.png"
  },
  {
    house: "Slytherin",
    colors: "green and silver",
    element: "water",
    imgPath: "http://vignette2.wikia.nocookie.net/gamekillers-rpgs/images/a/a6/Slytherin_Icon.jpg/revision/latest?cb=20160124110952"
  },
  {
    house: "Ravenclaw",
    colors: "blue and bronze",
    element: "air",
    imgPath: "http://orig12.deviantart.net/a0b8/f/2014/151/c/f/ravenclaw_icon_by_yuureiburu-d7kglmu.png"
  },
  {
    house: "Hufflepuff",
    colors: "yellow and black",
    element: "earth",
    imgPath: "http://rs869.pbsrc.com/albums/ab251/shattered_peace/Hogwarts/hufflepuff.jpg~c200"
  },
]
$('#submitForm').mousedown(function(){
  var name = document.getElementById("name").value;
  var houseName = name[0].toUpperCase() + name.substring(1);
  var houseImg = document.getElementById("houseImg");
  var houseInfo = document.getElementById("houseInfo");

  for (var i = 0; i < objHouse.length; i++) {
    // document.write("<img src='" + objHouse[i].imgPath + "'>")
    if (houseName == objHouse[i].house) {
      houseImg.src = objHouse[i].imgPath;
      document.getElementById("houseName").innerHTML = objHouse[i].house;
      houseInfo.innerHTML = "Your house colors are " + objHouse[i].colors + ", and your house's element is " + objHouse[i].element + ".";
      console.log(objHouse[i].house);
      return
    }
  }
  houseInfo.innerHTML = houseName + " is not a valid house name."
})
