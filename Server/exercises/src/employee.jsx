import React, {useState, useEffect} from "react";



let Employee = () => {
  const [data, changeData] = useState([]);
  const getData=()=>{
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/tasks")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
     let employeeInfoComponent = res.map((activity) => {
        return (
          <div>
            <p>Activity: {activity.title}</p>
            <p>Status: {activity.status}</p>
          </div>
        );
      });
      changeData(employeeInfoComponent);
    });
  }

  useEffect(() => {
    getData();
  });

    
  return <div> {data} </div>;
};

export default Employee;
