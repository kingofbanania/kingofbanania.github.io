var textBox = document.getElementById("text")
var ans;

var BtnBox = document.getElementById("buttons")

var inventory = document.getElementById("inventory");

function getCoins() {
  textBox.innerHTML = "you get ten coins"
    //alert("you get ten coins!!")
}

function takeSword() {
  textBox.innerHTML = " You see a sword! Will you pick up the sword, or get killed by the goblin?";
  BtnBox.innerHTML = "<button onclick=''>GET SWORD</button><button onclick='lost()'>DEAD</button>";
}

function play() {
  textBox.innerHTML = "You wake up in a giant mysterious cabinet. You are in the middle of a road. Will you go right?";
  BtnBox.innerHTML = "<button onclick='seeGob()'>YES</button><button onclick='lost()'>NO</button>";
}

function die() {
  textBox.innerHTML = "you have just died a horrible death. Good luck with it.";
  //alert("you have just died a horrible death. Good luck with it")
  //ans=confirm("")
}

function start() {
  // alert("welcome to the game")
  textBox.innerHTML = "Welcome to the game. Would you like to play?"
  BtnBox.innerHTML = "<button onclick='play()'>YES</button><button onclick='die()'>NO</button>"
}
//ans=confirm("Would you like to play??")

//  if (ans) {
//    play()
//    if (ans){
//      seeGob()
//      if (ans){
//        die()
//      }
//      else{
//        //alert("you seeee aaa sword!!")
//        textBox.innerHTML = "You seeee aaa sword"
//        takeSword()
//        if (ans){
//         var inventory="sword"
//         inventory.innerHTML = "<br><img src='http://res.freestockphotos.biz/pictures/15/15567-illustration-of-a-sword-pv.png'>"
//          seeGob()
//          if (ans){
//            if (inventory=="sword"){
//             textBox.innerHTML = "you kill the goblin!!"
//              //alert("You kill the goblin")

//            getCoins()}
//            else{
//           textBox.innerHTML = "You are unworthy of weilding a sword!!"
//              //alert("you are unworthy, even with a sword!!:(")

//            }
//          }
//        }
//        else{
//          die()
//        }
//      }
//    }
//    else{
//      textBox.innerHTML = "You hear a fart growling"
function lost() {
  textBox.innerHTML = "you hear a fart growling";
}

function seeGob() {
 
  textBox.innerHTML = "You see a goblin! Will you fight it or run away?";
  BtnBox.innerHTML = "<button onclick='die()'>FIGHT</button><button onclick='takeSword()'>RUN</button>";
}
//      ans=confirm("Will you turn back?")
//      if (ans){
//        seeGob()
//        if (ans){
//          die()
//        }
//      }
//      else {
//        takeSword()
//      }
//    }
//  }
//   else{
//      die()

//  }