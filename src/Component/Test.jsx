import React, { useState } from "react";
import Turnstone from "turnstone";

import axios from "axios";

const API_URL = `http://api.openweathermap.org/data/2.5/find?appid=d4e579ab675b8ccb867f00a43babdb06&type=like&q=`;

const SearchCity = () => {
  const [searchResults, setSearchResults] = useState([]);

  const turnstone = new Turnstone({
    // provide the search functionality
    search: async (query) => {
      const { data } = await axios.get(`${API_URL}${query}`);
      setSearchResults(data.list);
    },
    // provide the function to render the results
    render: (item, query) => {
      return `${item.name}, ${item.sys.country}`;
    },
  });

  return (
    <div>
      <Turnstone.Input
        onChange={turnstone.search}
        placeholder="Search for a City"
      />
      <Turnstone.Results data={searchResults} />
    </div>
  );
};
export default SearchCity;;

// import axios from "axios";

// const API_KEY = "d4e579ab675b8ccb867f00a43babdb06";
// const API_URL = `http://api.openweathermap.org/data/2.5/find?appid=d4e579ab675b8ccb867f00a43babdb06&type=like&q=`;

// const YourComponent = () => {
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API_URL}New York`)
//       .then((response) => {
//         setCities(response.data.list);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   // rest of your component code
// };
