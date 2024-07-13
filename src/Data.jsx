import axios from "axios";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Bag_of_clothes from '../src/assets/Bag_of_clothes.png';
import Battery from '../src/assets/Battery.png';
import Binoculars from '../src/assets/Binoculars.png';
import Compass from '../src/assets/Compass.png';
import Duck_ring from '../src/assets/Duck_ring.png';
import Fishingrod from '../src/assets/Fishingrod.png';
import Flaregun from '../src/assets/Flaregun.png';
import Flashlight from '../src/assets/Flashlight.png';
import Freash_waters from '../src/assets/Freash_waters.png';
import Hatchet from '../src/assets/Hatchet.png';
import Instant_foods from '../src/assets/Instant_foods.png';
import Knife from '../src/assets/Knife.png';
import Lighter from '../src/assets/Lighter.png';
import Medkit from '../src/assets/Medkit.png';
import Raincoat from '../src/assets/Raincoat.png';
import Rope from '../src/assets/Rope.png';
import Sun_screen from '../src/assets/Sun_screen.png';
import Survival_guidebook from '../src/assets/Survival_guidebook.png';
import Tent from '../src/assets/Tent.png';
import Whistle from '../src/assets/Whistle.png';
import King from '../src/assets/King.png';

function Data() {
  const [Apidata, setApidata] = useState([]);
  const [error, setError] = useState(null);

  const itemImages = {
    "Bag_of_clothes": Bag_of_clothes,
    "Battery": Battery,
    "Binoculars": Binoculars,
    "Compass": Compass,
    "Duck_ring": Duck_ring,
    "Fishingrod": Fishingrod,
    "Flare_gun": Flaregun,
    "Flashlight": Flashlight,
    "Freash_waters": Freash_waters,
    "Hatchet": Hatchet,
    "Instant_foods": Instant_foods,
    "Knife": Knife,
    "Lighter": Lighter,
    "Medkit": Medkit,
    "Rain_coat": Raincoat,
    "Rope": Rope,
    "Sun_screen": Sun_screen,
    "Survival_guidebook": Survival_guidebook,
    "Tent": Tent,
    "Whistle": Whistle
  };

  const fetchData = () => {
    axios
      .get(`https://sheet.best/api/sheets/5627cb1a-0d46-446f-9b7d-84e8d01dd99a`)
      .then((res) => setApidata(res.data))
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch data every 60 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      {error && <p className="error-message">{error}</p>}
      <div className="grid grid-cols-1 gap-2 " >
        {Apidata.filter((data) => data.status !== "hide").map((data, i) => {
          return (
            <motion.div 
              initial={{ opacity:0,translateY: -40 }}
              animate={{ opacity:1,translateY: 0 }}
              transition={{ duration: 0.25, delay: i * 0.1 }} // Use `i` for delay
              className="p-5 rounded-md item-box" key={data.id}
            >
              <motion.div 
              initial={{ opacity:0,translateY: 20 }}
              animate={{ opacity:1,translateY: 0 }}
              transition={{delay : 1}}
              className="flex items-center">
                <p className="rounded-3 bg-white px-2 p-1 mt-1 rounded-t-md  text-xl">Team {data.GroupName}</p>
                <div className="flex bg-white px-2 ms-2 mt-2 rounded-t-md p-1">
                  <img src={King} className="w-7" alt="" />
                  <p className="rounded-3  ms-2">{data.LeaderName}</p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 p-3 rounded-tr-md w-full rounded-b-md bg-white shadow-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {data.Items.split(",").map((item, index) => (
                  <div key={index}>
                    <motion.div  
                      initial={{ scale: 0.2 }}
                      animate={{ scale: 1 }} 
                      transition={{delay : 0.2 * index}}
                      className="p-1 m-2 flex flex-col shadow-md rounded-md outline outline-1 outline-slate-300/75 items-center justify-center"
                    >
                      {itemImages[item.trim()] && <img src={itemImages[item.trim()]} className="p-5 w-[143px] h-[120px]" alt={item} />}
                      <p className="">{item}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Data;
