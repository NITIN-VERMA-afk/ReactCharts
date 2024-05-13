import React from "react";
import { useDispatch } from 'react-redux';
import { setRegion } from '../features/counter/RegionSlice';


const Region = [
  {
    id: 1,
    Region: "All Region",
  },
  {
    id: 2,
    Region: "France",
  },
  {
    id: 3,
    Region: "Germany",
  },
  {
    id: 4,
    Region: "Italy",
  },
  {
    id: 5,
    Region: "Spain",
  },
  {
    id: 6,
    Region: "Switzerland",
  },
  {
    id: 7,
    Region: "UK"
  },
];

const RegionButtons = () => {
    const dispatch = useDispatch();

  const handleRegionChange = (newRegion) => {
    dispatch(setRegion(newRegion));
   
  };
  return (
    <>
      <div className="flex flex-wrap gap-3 border border-gray-500 p-3 mt-3">
        {Region.map((item) => (
          <button className="p-3 border  border-gray-500 active:bg-blue-600" key={item.id} onClick={() => handleRegionChange(item.Region)}>
            {item.Region}
          </button>
        ))}
      </div>
    </>
  );
};

export default RegionButtons;
