import React, { useEffect } from "react";
import { useState } from "react";
import { allZones } from "../../misc/array";



const AutomaticTimeZone: React.FC = () => {
  const [zone, setZone] = useState<string | null>('');
  const [zoneData, setZoneData] = useState<string | null>('');
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

// const fetch_url: string = `https://timeapi.io/api/Time/current/zone?timeZone=${zone}`;

const fetch_url = 'https://timeapi.io/api/TimeZone/zone?timeZone=Europe/Amsterdam'

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch(`${fetch_url}`);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       setZoneData(data)
  //       console.log(data)
  //     } catch (err : any) {
  //       setError(err.toString());
  //       console.error(err);
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [zone, fetch_url]);


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
setZone(e.target.value)
console.log(e.target.value)

  }

  async function fetchZone() {
    // const res = await fetch(
    //   "https://cors-anywhere.heroku.app.com/https://timeapi.io/api/TimeZone/zone?timeZone=Europe/Amsterdam"
    // );
    const res = await fetch(
      "https://api.allorigins.win/get?url=https://timeapi.io/api/TimeZone/zone?timeZone=Europe/Amsterdam"
    );
    const final = await res.json();
    console.log(final);
    return final;
  }
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

    <button onClick={fetchZone}>
      click me
    </button>
        </>
  );
};

export default AutomaticTimeZone;
