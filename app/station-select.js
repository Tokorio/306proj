import React, { useState } from 'react';

function StationSelect({ stations, destinations, trainLines }) {
    const [currentStation, setCurrentStation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [boundDestination, setBoundDestination] = useState('');
    const [finalDestination, setFinalDestination] = useState('');
    const [availableStations, setAvailableStations] = useState([]);
    const [distance, setDistance] = useState(null);

    const handleStationChange = (e) => {
        const station = e.target.value;
        setCurrentStation(station);

        //station validation
        if (stations.includes(station)) {
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter a valid Station')
        }
    };

    const handleBoundDestinationChange = (e) => {
        const bound = e.target.value;
        setBoundDestination(bound);

        //set station based on selected bound
        if (bound && trainLines[bound]) {
            setAvailableStations(trainLines[bound]);
            setFinalDestination(''); //reset final on change
        } else {
            setAvailableStations([]);
        }
    };

    const handleFinalDestinationChange = (e) => {
        setFinalDestination(e.target.value);
    };

    const calculateDistance = () => {
        if (currentStation && finalDestination && availableStations.length > 0) {
            const startIndex = availableStations.indexOf(currentStation);
            const endIndex = availableStations.indexOf(finalDestination);

            if (startIndex !== -1 && endIndex !== -1) {
                setDistance(Math.abs(endIndex - startIndex));
            } else {
                setErrorMessage('Invalid stations for the selected train line.');
            }
        }
    };

    return (
        <div className="mt-8">
            {/*current station prompt*/}
            <div>
                <label className="block text-lg font-medium mb-2">What Station are you currently at?</label>
                <input
                    type="text"
                    value={currentStation}
                    onChange={handleStationChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter station"
                    style={{ color: 'black' }}
                />
                {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
            </div>

            {/*bound destination prompt*/}
            {currentStation && !errorMessage && (
                <div className="mt-8">
                    <label className="block text-lg font-medium mb-2">Bound for? Please pick an end station on your line.</label>
                    <div className="flex flex-col">
                        {destinations.map((dest, index) => (
                            <label key={index} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    value={dest}
                                    checked={boundDestination === dest}
                                    onChange={handleBoundDestinationChange}
                                    className="mr-2"
                                />
                                {dest}
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {/*final destination prompt*/}
            {boundDestination && (
                <div className="mt-8">
                    <label className="block text-lg font-medium mb-2">Where are you headed?</label>
                    <select
                        value={finalDestination}
                        onChange={handleFinalDestinationChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="" disabled>Select your destination</option>
                        {availableStations.map((station, index) => (
                            <option key={index} value={station} className="text-black">
                                {station}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/*calculate distance button*/}
            {finalDestination && (
                <div className="mt-8">
                    <button
                        onClick={calculateDistance}
                        className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                        Calculate Distance
                    </button>
                </div>
            )}

            {/*distance result*/}
            {distance !== null && (
                <p className="text-xl font-medium mt-4">
                    You are <strong>{distance}</strong> station(s) away from your destination.
                </p>
            )}
        </div>
    )
}

export default StationSelect;