import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import moment from 'moment';
import 'chartjs-adapter-moment';
import { getLocationData } from '../utils/data';
export default function Dougnouts() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    // fetch the view data from LOCATION
    async function fetchLocation() {
      const fetchedLocation = await getLocation.countries();
      setLocation(fetchedLocation);
    }
    fetchLocation();

  }, []);
  console.log(location);
  return (
    <div>Dougnouts</div>
  )
}
