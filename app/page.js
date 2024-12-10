"use client";

import React from "react";
import TrainLine from "./train-line";
import StationSelect from "./station-select";


function Page() {
  const stationsBlue1 = ["69 Street", "Sirocco", "45 Street", "Westbrook", "Shaganappi", "Sunalta", "Dwtn West", "8 Street", "6 Street", "3 Street", 
    "Centre Street", "City Hall", "Bridgeland", "Zoo", "Barlow", "Franklin", "Marlborough", "Rundle", "Whitehorn", "McKnight", "Martindale", "Saddletown"];

  const stationsBlue2 = ["Saddletown", "Martindale", "McKnight", "Whitehorn", "Rundle", "Marlborough", "Franklin", "Barlow", "Zoo", "Bridgeland", "City Hall",
    "Centre Street", "3 Street", "6 Street", "8 Street", "Dwtn West", "Sunalta", "Shaganappi", "Westbrook", "45 Street", "Sirocco", "69 Street"];

  const stationsRed1 = ["Somerset", "Shawnessy", "Fish-Creek", "Canyon Meadows", "Anderson", "Southland", "Heritage", "Chinook", " 39 Avenue", "Erlton",
    "Victoria", "City Hall", "1 Street", "4 Street", "7 Street", "Sunnyside", "SAIT", "Lions Park", "Banff Trail", "University", "Brentwood", "Dalhousie", "Crowfoot", "Tuscany"];

  const stationsRed2 = ["Tuscany", "Crowfoot", "Dalhousie", "Brentwood", "University", "Banff Trail", "Lions Park", "SAIT", "Sunnyside", "7 Street", "4 Street", "1 Street",
    "City Hall", "Victoria", "Erlton", "39 Avenue", "Chinook", "Heritage", "Southland", "Anderson", "Canyon Meadows", "Fish-Creek", "Shawnessy", "Somerset"];
  
  const destinations = ["Saddletown", "69 Street", "Somerset", "Tuscany"];

  return (
    <main className="p-8">
      <h1 className="text-4xl text-center font-bold mb-8">Where is my Train?</h1>
      
      <TrainLine title="Blue Line for Saddletown" initialStations={stationsBlue1} color="bg-blue-600"/>
      <TrainLine title="Blue Line for 69 Street" initialStations={stationsBlue2} color="bg-blue-600"/>
      <TrainLine title="Red Line for Tuscany" initialStations={stationsRed1} color="bg-red-600"/>
      <TrainLine title="Blue Line for Somerset/Bridlewood" initialStations={stationsRed2} color="bg-red-600"/>

      <StationSelect 
        stations={[...stationsBlue1, ...stationsBlue2, ...stationsRed1, ...stationsRed2]} 
        destinations={destinations} 
      />
    </main>
  );
}

export default Page;