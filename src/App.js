import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((actualData) => {
        if (Array.isArray(actualData.users)) {
          setData(actualData.users);
        } else {
          console.error("API response does not contain an array of users.");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };
  
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td><img src={item.image} alt="image" /></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
