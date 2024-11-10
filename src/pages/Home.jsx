import React from "react";
import Banner from "../components/screens/Home/Banner";
import Discover from "../components/screens/Home/Discover";
import CofeeItems from "../components/screens/Home/CofeeItems";
import DrinksItems from "../components/screens/Home/DrinksItems";
import FoodItems from "../components/screens/Home/FoodItems";
import CoffeeAdd from "../components/screens/Home/CoffeeAdd";
import Speciality from "../components/screens/Home/Speciality";

const Home = () => {
  return (
    <main>
      <Banner />
      <Discover />
      <CofeeItems />
      <DrinksItems />
      <FoodItems />
      <CoffeeAdd />
      <Speciality />
    </main>
  );
};

export default Home;
