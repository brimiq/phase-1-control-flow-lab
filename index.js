function scuberGreetingForFeet(rideLength) {
  let result = false;
  if (rideLength < 400) {
    result = "This one is on me";
  } else if (rideLength >= 400 && rideLength <= 2000) {
    console.log("That will be twenty bucks");
  } else if (rideLength >= 2000 && rideLength <= 2500) {
    console.log("I will gladly take your 30 bucks");
  } else if (rideLength > 2500) {
    console.log("No can do");
  }
  return result;
}

function ternaryCheckCity(cityName) {
  const rightCity = (cityName = 'NYC')? true : false
  if(rightCity=true){
    console.log("Ok sounds good")
  }
  const wrongCity = (cityName="Pittsburg")? true:false
  if(wrongCity=true){
    console.log("No can do.")
  }

}

function switchOnCharmFromTip(tipClass) {
  let tipValue
  let tipClass
  if(tipValue>=20 && tipValue<=100){
    tipClass = 'generous'
    console.log("Thank you so much")
    
  }else if(tipValue>=10 && tipValue<=20){
    tipClass = 'not as generous'
    console.log("Thank you.")
  }else if(tipValue>=0 && tipValue<=10){
    tipClass = 'thanks for everything'
    console.log("Bye")
  }
}
