import React from "react";
import Train from "./train";

// this was a headache to get the lines to fit into the page.

function TrainLine({ title="", initialStations = [], color="" }) {
  //calculate the space between stations as percentage of containers width
  const totalWidth = 100; //100% width for train line
  const stationSpacing = initialStations.length > 1 ? totalWidth / (initialStations.length - 1) : 0; //adjust space between stations

  return (
    <div className="my-24">

        <h2 className="text-xl font-bold text-center mb-4">{title}</h2> {/* Title for each line */}

        {/*horizontal line*/}
        <div className={`relative w-full h-2 ${color}`}>
            {initialStations.map((station, index) => {
                //get left pos
                const leftPosition = stationSpacing * index;

                return (
                    <div
                        key={station}
                        className="absolute flex flex-col items-center"
                        style={{
                            left: `${leftPosition}%`,
                            transform: `translateX(-50%)`, //adjust to center dots at pos
                        }}
                    >   
                    {/*station dot*/}
                    <div className="w-4 h-4 bg-gray-600 rounded-full -translate-y-1"></div> 
                    
                    {/*station name*/}
                    <p
                        className="text-xs text-gray-50 ml-4"
                        style={{
                            transform: "rotate(45deg)",
                            transformOrigin: "left bottom",
                        }}
                        >
                        {station}
                    </p>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TrainLine;
