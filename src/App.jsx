import axios from "axios";
import React, { useState, useEffect } from "react";

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

function App() {
  const [Apidata, setApidata] = useState([]);

  const itemImages = {
    "Bag_of_clothes": Bag_of_clothes,
    "Battery": Battery,
    "Binoculars": Binoculars,
    "Compass": Compass,
    "Duck_ring": Duck_ring,
    "Fishingrod": Fishingrod,
    "Flaregun": Flaregun,
    "Flashlight": Flashlight,
    "Fresh_waters": Freash_waters,
    "Hatchet": Hatchet,
    "Instant_foods": Instant_foods,
    "Knife": Knife,
    "Lighter": Lighter,
    "Medkit": Medkit,
    "Raincoat": Raincoat,
    "Rope": Rope,
    "Sun_screen": Sun_screen,
    "Survival_guidebook": Survival_guidebook,
    "Tent": Tent,
    "Whistle": Whistle
  };

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/5627cb1a-0d46-446f-9b7d-84e8d01dd99a`)
      .then((incomingData) => {
        setApidata(incomingData.data);
      });
  }, []);

  return (
    <>
      {Apidata.filter((data) => data.status !== "hide").map((data) => {
        return (
          <div className="p-5" key={data.id}>
            <p className="bg-red-400 rounded-3 p-5">{data.GroupName}</p>
            <p className="bg-blue-400 rounded-3 p-5">{data.LeaderName}</p>
            <div className="bg-pink-400 rounded-3 p-5">
              {data.Items.split(",").map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                  {itemImages[item.trim()] && <img src={itemImages[item.trim()]} alt={item} />}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
