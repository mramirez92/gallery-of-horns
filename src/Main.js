import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render(){
    return (
      <main>
       <HornedBeast 
       name= "Alpine Ibex" 
       image =""
       info ="This is a mysterious, wild goat that lives in the European alps. These creatures are adapted for thriving in open grasslands most often. Though Alpine ibex are obviously an exception – frequenting the monstrous and sublime heights of the alps." 
       />
       <HornedBeast 
       name= "Dik-dik"
       image =""
       info ="Dik-dik are a kind of miniature antelope, with hooves and (on the males anyway) horns. Dik-diks grow to only a foot or so high at the shoulder, which means they can hide among the grasses, but they prefer places where they can see a fair distance. They’re herbivores that eat leaves, fruit, berries and plant shoots, which provide both sustenance and water."
       />
      </main>
    )
  }
}

export default Main;