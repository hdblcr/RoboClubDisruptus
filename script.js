function rollDice() {
  var diceArray = ["Create (combine the objects to make something new)", "Disrupt (design something new to do the same job as the object)", "Improve (make an improvment to the object to do its job better)", "Transform (use the object for a new purpose)"]
  var randInt = Math.floor(Math.random() * 4);
  var dice = diceArray[randInt];
  document.getElementById("dice").innerHTML = dice;
  loadObjects(dice);
  return dice;
}

function readFile() {
  let file = "object.txt";
  let reader = new FileReader() 
}

function loadObjects(dice) {
  var objList = getObjList();
  document.getElementById("object2").style.display = "none";
  document.getElementById("objectSpacer").style.display = "none";
  document.getElementById("object1").style.justifyContent = "center";

  // Handle what happens with a second object
  if (dice == "Create (combine the objects to make something new)") {
    // get second object and remove from list
    var obj2Index = Math.floor(Math.random() * objList.length);
    obj2 = objList[obj2Index];
    objList.splice(obj2Index, 1);
    document.getElementById("object2").style.display = "flex";
    document.getElementById("objectSpacer").style.display = "flex";
    document.getElementById("object2").style.flexDirection = "column";
    document.getElementById("object2").style.justifyContent = "center";

    // display second object
    document.getElementById("obj2name").innerHTML = obj2[0];
    if (window.obj2[1]){
      document.getElementById("obj2img").innerHTML = '<img src="' + obj2[1] + '" alt="' + obj2[0] + '" />';
    } else {
      document.getElementById("obj2img").innerHTML = "";
    }
  }
  
  // Always have at least one object
    obj1 = objList[Math.floor(Math.random() * objList.length)];
    
    document.getElementById("obj1name").innerHTML = obj1[0];
    if (window.obj1[1]){
      document.getElementById("obj1img").innerHTML = '<img src="' + obj1[1] + '" alt="' + obj1[0] + '" />';
    } else {
      document.getElementById("obj1img").innerHTML = "";
    }
}

function getObjList() {
  return objList = [
    ["fork", "https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"], 
    ["knife", "https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["stairs", "https://images.pexels.com/photos/434645/pexels-photo-434645.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["tennis ball", "https://images.pexels.com/photos/226587/pexels-photo-226587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["pencil", "https://images.pexels.com/photos/114119/pexels-photo-114119.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["lightbulb","https://images.pexels.com/photos/746496/pexels-photo-746496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["ladder", "https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["paint roller","https://images.pexels.com/photos/5691670/pexels-photo-5691670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["post-it notes","https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["index cards", "https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["candle", "https://images.pexels.com/photos/4389643/pexels-photo-4389643.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["stethoscope", "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["mug", "https://images.pexels.com/photos/4466240/pexels-photo-4466240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["corks", "https://images.pexels.com/photos/5359802/pexels-photo-5359802.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["eyeglasses", "https://images.pexels.com/photos/4226875/pexels-photo-4226875.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["airplane", "https://images.pexels.com/photos/4388217/pexels-photo-4388217.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["binder clips", "https://images.pexels.com/photos/4226799/pexels-photo-4226799.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["chair", "https://images.pexels.com/photos/6153081/pexels-photo-6153081.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["toothbrush", "https://images.pexels.com/photos/4239018/pexels-photo-4239018.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["sneakers", "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["spoons", "https://images.pexels.com/photos/4226869/pexels-photo-4226869.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["shears", "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["soap", "https://images.pexels.com/photos/4202481/pexels-photo-4202481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["clothespins", "https://images.pexels.com/photos/4495936/pexels-photo-4495936.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["crochet hooks", "https://images.pexels.com/photos/4792084/pexels-photo-4792084.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["basketball", "https://images.pexels.com/photos/3001822/pexels-photo-3001822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["cup", "https://images.pexels.com/photos/5763178/pexels-photo-5763178.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["nail brush", "https://images.pexels.com/photos/4202467/pexels-photo-4202467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["camera", "https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["guitar", "https://images.pexels.com/photos/4708902/pexels-photo-4708902.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["lamp", "https://images.pexels.com/photos/5094567/pexels-photo-5094567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["backpack", "https://images.pexels.com/photos/1781626/pexels-photo-1781626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["tape dispenser", "https://images.pexels.com/photos/4246111/pexels-photo-4246111.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["telephone", "https://images.pexels.com/photos/4547564/pexels-photo-4547564.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["sewing machine", "https://images.pexels.com/photos/4427642/pexels-photo-4427642.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["boots", "https://images.pexels.com/photos/4786126/pexels-photo-4786126.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["suitcase", "https://images.pexels.com/photos/4246101/pexels-photo-4246101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["chain", "https://images.pexels.com/photos/4761382/pexels-photo-4761382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["paintbrush", "https://images.pexels.com/photos/4153468/pexels-photo-4153468.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["playing card", "https://images.pexels.com/photos/4380020/pexels-photo-4380020.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["barrels", "https://images.pexels.com/photos/5359800/pexels-photo-5359800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["envelopes", "https://images.pexels.com/photos/4722000/pexels-photo-4722000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["pocketwatch", "https://images.pexels.com/photos/4082639/pexels-photo-4082639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["die", "https://images.pexels.com/photos/4052295/pexels-photo-4052295.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["face mask", "https://images.pexels.com/photos/4541395/pexels-photo-4541395.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["ice skates", "https://images.pexels.com/photos/4834892/pexels-photo-4834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["mirror", "https://images.pexels.com/photos/5566047/pexels-photo-5566047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["lifeguard ring", "https://images.pexels.com/photos/5753323/pexels-photo-5753323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["yarn", "https://images.pexels.com/photos/4618365/pexels-photo-4618365.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["buttons", "https://images.pexels.com/photos/4617593/pexels-photo-4617593.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["thread", "https://images.pexels.com/photos/1212179/pexels-photo-1212179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["belt", "https://images.pexels.com/photos/89783/belts-belt-buckle-leather-metal-89783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["measuring tape", "https://images.pexels.com/photos/5516715/pexels-photo-5516715.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["Rubik's cube", "https://images.pexels.com/photos/4394233/pexels-photo-4394233.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["umbrella", "https://images.pexels.com/photos/1715161/pexels-photo-1715161.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["cart", "https://images.pexels.com/photos/3964517/pexels-photo-3964517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
    ["telescope", "https://images.pexels.com/photos/5677276/pexels-photo-5677276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"]
    ];
}