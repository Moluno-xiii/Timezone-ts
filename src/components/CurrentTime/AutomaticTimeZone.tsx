import React, { useEffect } from "react";
import { useState } from "react";
import { allZones } from "../../misc/array";
import Spinner from "../Loader";

interface zoneDataParam {
  timeZone: string;
  currentLocalTime: string;
  hasDayLightSaving: boolean;
  isDayLightSavingActive: boolean;
}

const defaultZoneData: zoneDataParam = {
  timeZone: "",
  currentLocalTime: "",
  hasDayLightSaving: false,
  isDayLightSavingActive: false,
};

const AutomaticTimeZone: React.FC = () => {
  const [zone, setZone] = useState<string | null>("");
  const [zoneData, setZoneData] = useState<zoneDataParam>(defaultZoneData);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const fetch_url: string = `https://timeapi.io/api/Time/current/zone?timeZone=${zone}`;

  const fetch_url = `https://api.allorigins.win/get?url=https://timeapi.io/api/TimeZone/zone?timeZone=${zone}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${fetch_url}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const resData = await response.json();
        const data = JSON.parse(resData.contents);
        setZoneData({
          timeZone: data.timeZone,
          currentLocalTime: data.currentLocalTime,
          hasDayLightSaving: data.hasDayLightSaving,
          isDayLightSavingActive: data.isDayLightSavingActive,
        });
        console.log(zoneData.hasDayLightSaving);
        console.log(zoneData);
        console.log(data.contents);
      } catch (err: any) {
        setError(err.toString());
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [zone,fetch_url]);

 


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setZone(e.target.value);
    console.log(e.target.value);
  };

  const { hasDayLightSaving, currentLocalTime, isDayLightSavingActive, timeZone } =
    zoneData as zoneDataParam;

  const timestamp = new Date(currentLocalTime);
  const date: string = timestamp.toLocaleDateString(); // Extract date
  const time: string = timestamp.toLocaleTimeString();
 
  return (
    <>
      <form>
        {/* <input type="text" /> */}
        <select name="timezone" value={zone || ""} onChange={handleChange}>
          {allZones.map((zone, index) => (
            <option value={zone} key={index}>
              {zone}
            </option>
          ))}
        </select>
      </form>

      {!isLoading && !error && (
        <div>
          <p>current local time:{currentLocalTime}</p>
          <p>Time:{time}</p>
          <p>Date:{date}</p>
          <p>Time zone:{timeZone}</p>
          <p>
            Daylight savings status:{hasDayLightSaving ? "active" : "inactive"}
          </p>
          <p>
            Is Daylight saving active:
            {isDayLightSavingActive ? "active" : "inactive"}
          </p>
          {/* <p>Is Daylight saving active:{zoneData.isDayLightSavingActive}</p> */}
        </div>
      )}

      {isLoading && <Spinner />}
      {error && <p>{error}</p>}

      {/* <button onClick={fetchZone}>
      click me
    </button> */}
    </>
  );
};

export default AutomaticTimeZone;
