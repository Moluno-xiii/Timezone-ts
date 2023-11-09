import React, { useEffect } from "react";
import { useState } from "react";
import { newZones } from "../../misc/array";
import Spinner from "../Loader";

interface zoneDataParam {
  abbreviation: string;
  datetime: string;
  timezone: boolean;
  week_number: boolean;
  day_of_week: number | null;
  day_of_year: number | null;
  client_ip: string;
}

const defaultZoneData: zoneDataParam = {
  abbreviation: "",
  datetime: "",
  timezone: false,
  week_number: false,
  day_of_week: null,
  day_of_year: null,
  client_ip: "",
};

const AutomaticTimeZone: React.FC = () => {
  const [zone, setZone] = useState<string | null>("Africa/Abidjan");
  const [zoneData, setZoneData] = useState<zoneDataParam>(defaultZoneData);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetch_url: string = `http://worldtimeapi.org/api/timezone/${zone}`;

  // const fetch_url = `https://api.allorigins.win/get?url=https://timeapi.io/api/TimeZone/zone?timeZone=${zone}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${fetch_url}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const resData = await response.json();
        // const data = JSON.parse(resData.contents);
        setZoneData({
          abbreviation: resData.abbreviation,
          datetime: resData.datetime,
          timezone: resData.timezone,
          week_number: resData.week_number,
          day_of_week: resData.day_of_week,
          day_of_year: resData.day_of_year,
          client_ip: resData.client_ip,
        });
        // console.log(zoneData.hasDayLightSaving);
        // console.log(zoneData);
        // console.log(data.contents);
      } catch (err: any) {

        setError(err.toString());
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [zone,fetch_url]);

  const fetchZones = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(`${fetch_url}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const resData = await response.json();
      // const data = JSON.parse(resData.contents);
      setZoneData({
        abbreviation: resData.abbreviation,
        datetime: resData.datetime,
        timezone: resData.timezone,
        week_number: resData.week_number,
        day_of_week: resData.day_of_week,
        day_of_year: resData.day_of_year,
        client_ip: resData.client_ip,
      });
      console.log(resData.abbreviation);
      console.log(zoneData);
      setZoneData(resData);
    } catch (err: any) {
      setError(err.toString());
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setZone(e.target.value);
    console.log(e.target.value);
  };

  const {
    abbreviation,
    datetime,
    week_number,
    timezone,
    day_of_week,
    day_of_year,
    client_ip,
  } = zoneData as zoneDataParam;

  const timestamp = new Date(datetime);
  const date: string = timestamp.toLocaleDateString();
  // const time: string = timestamp.toLocaleTimeString();

  const time: string = datetime.slice(11, 19);



  // const convTime = (time): string => {
  //   const food: number = time.slice(0, 2);

  //   if (food >= 12) {
  //      console.log(time);
  //     return `${time}PM`;
  //   } else {
  //      console.log(time);
  //     return `${time}AM`;
  //   }

  // };

  const convTime = (time): string => {
    const [hour, minute, second] = time.split(":");
    const hour12 = hour > 12 ? hour - 12 : hour;
    const format = hour12 < 12 && hour != 0 ? "PM" : "AM";
    const finalTime = `${hour12}:${minute}:${second} ${format}`;
    // console.log(finalTime);

    return finalTime;
  };

  const timeFunc = convTime(time);

  return (
    <>
      <form>
        <select name="timezone" value={zone || ""} onChange={handleChange}>
          {newZones.map((zone, index) => (
            <option value={zone} key={index}>
              {zone}
            </option>
          ))}
        </select>
      </form>

      {!isLoading && !error && (
        <div>
          <p>current local time: {datetime}</p>
          <p>Time: {time}</p>
          <p>12 hour format: {timeFunc}</p>
          <p>Date: {date}</p>
          <p>Time zone: {timezone}</p>
          <p>week number: {week_number}</p>
          <p>
            Abbreviation: {abbreviation}
          </p>
          <p>Your IP address : {client_ip}</p>
          <p>Day of week : {day_of_week}</p>
          <p>Day of year : {day_of_year}</p>
          {/* <p>Is Daylight saving active:{zoneData.isDayLightSavingActive}</p> */}
        </div>
      )}

      {isLoading && <Spinner />}
      {error && <p>{error}</p>}

      <button onClick={fetchZones}>Get time</button>
    </>
  );
};

export default AutomaticTimeZone;
