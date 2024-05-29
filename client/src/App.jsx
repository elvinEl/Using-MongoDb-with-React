import React, { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState("");
  console.log(item);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000");
      const data = response.json().then((res) => setItem(res.items));
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {item &&
        item.map((item, index) => {
          return (
            <div key={index}>
              <h1>
                {item.name}:{item.age}
              </h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;
