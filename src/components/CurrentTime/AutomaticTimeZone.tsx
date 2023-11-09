import React, { useEffect } from "react";
import { useState } from "react";
import { allZones } from "../../misc/array";



const AutomaticTimeZone: React.FC = () => {
  const [zone, setZone] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

const fetch_url: string = `https://timeapi.io/api/Time/current/zone?timeZone=${zone}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${fetch_url}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data)
      } catch (err : any) {
        setError(err.toString());
        console.error(err);
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, []);
  return (
    <form>
      <input type="text" />
      <select name="timezone" value="">
        {allZones.map((zone, index) => (
            <option value={zone} key={index}>
                {zone}
            </option>
        ))}
      </select>
    </form>
  );
};

export default AutomaticTimeZone;
