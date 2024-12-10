import React, { useState } from 'react';

function StationSelect({ stations, destinations }) {
    const [currentStation, setCurrentStation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showDestination, setShowDestination] = useState(false);
    const [destination, setDestination] = useState('');

    const handleStationChange = (e) => {
        const station = e.target.value;
        setCurrentStation(station);

        //station validation
        if (stations.includes(station)) {
            setErrorMessage('');
            setShowDestination(true); //shows the next prompt if valid station
        } else {
            setErrorMessage('Please enter a valid Station')
            setShowDestination(false);
        }
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    return (
        <div className="mt-8">
            {/*station prompt*/}
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

            {/*destination prompt*/}
            {showDestination && (
                <div className="mt-8">
                    <label className="block text-lg font-medium mb-2">Where are you headed?</label>
                    <div className="flex flex-col">
                        {destinations.map((dest, index) => (
                            <label key={index} className="flex items-center mb-2">
                                <input
                                type="radio"
                                value={dest}
                                checked={destination === dest}
                                onChange={handleDestinationChange}
                                className="mr-2"
                            />
                            {dest}
                        </label>
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default StationSelect;