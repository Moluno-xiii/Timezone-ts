import React, { SetStateAction, Dispatch, useState } from "react";
// import Spinner from "../Spinner";

interface Bool {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface ipDataParam {
  abbreviation: string;
  day_of_week: number;
  day_of_year: number;
  timezone: string;
  datetime: string;

}

const IpAddress: React.FC<Bool> = ({ isLoading, setIsLoading }) => {
  const [ipData, setIPData] = useState<ipDataParam | string> ('');
  const Base_url: string = "http://worldtimeapi.org/api/ip";
  const tramp: boolean = false;
  // interface Post {
  //     id: string;
  // }

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(Base_url);
      const data = await response.json();
      console.log(data);
      setIPData(data);
      return data;
    } catch (err) {
      console.error(err);
      throw new Error();
    } finally {
      setIsLoading(false);
    }
  }
  const { datetime, day_of_week, day_of_year, timezone, abbreviation } = ipData as ipDataParam
  return (
    <div>
      {/* {tramp && <Spinner />} */}
      {isLoading && <p>Loading...</p>}

      {ipData && (
        <ul>
          <li>timezone : {`${abbreviation} ${timezone}`}</li>
          <li>Your time : {datetime}</li>
          <li>Day of week : {day_of_week}</li>
          <li>Day of year : {day_of_year}</li>
        </ul>
      )}
      <button onClick={fetchData}>Get Local time</button>
    </div>
  );
};

export default IpAddress;
