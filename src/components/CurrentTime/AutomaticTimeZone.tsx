import React, { useEffect } from "react";
import { useState } from "react";
import { allZones } from "../../misc/array";


interface zoneDataParam {
  timeZone : string;
  currentLocalTime : string;
  hasDayLightSaving : boolean;
  isDayLightSavingActive : boolean;
}


const defaultZoneData : zoneDataParam = {
  timeZone : '',
  currentLocalTime : '',
  hasDayLightSaving : false,
  isDayLightSavingActive : false,
}


const AutomaticTimeZone: React.FC = () => {
  const [zone, setZone] = useState<string | null>('');
  const [zoneData, setZoneData] = useState<zoneDataParam>(defaultZoneData);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

// const fetch_url: string = `https://timeapi.io/api/Time/current/zone?timeZone=${zone}`;

const fetch_url =
   `https://api.allorigins.win/get?url=https://timeapi.io/api/TimeZone/zone?timeZone=${zone}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${fetch_url}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setZoneData(data)
        console.log(data)
      } catch (err : any) {
        setError(err.toString());
        console.error(err);
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [zone, fetch_url]);


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
setZone(e.target.value)
console.log(e.target.value)

  }


  const {
    hasDayLightSaving,
    timeZone,
    currentLocalTime,
    isDayLightSavingActive,
  } = zoneData as zoneDataParam


   const timestamp = new Date(currentLocalTime);
   const date: string = timestamp.toLocaleDateString(); // Extract date
   const time: string = timestamp.toLocaleTimeString();
  // async function fetchZone() {

  //   const res = await fetch(
  //     "https://api.allorigins.win/get?url=https://timeapi.io/api/TimeZone/zone?timeZone=Europe/Amsterdam"
  //   );
  //   const final = await res.json();
  //   console.log(final);
  //   return final;
  // }
  return (
    <>
    <form>
      {/* <input type="text" /> */}
      <select name="timezone" value  ={zone || ''} onChange={handleChange}>
        {allZones.map((zone, index) => (
          <option value={zone} key={index}>
                {zone}
            </option>
        ))}
      </select>
    </form>
    <p></p>

    {/* <button onClick={fetchZone}>
      click me
    </button> */}
        </>
  );
};

export default AutomaticTimeZone;
