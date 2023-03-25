import React, { useEffect, useState } from "react";

const DataTable = () => {
  // const [user, setUser] = useState([]);
  // const { page, setPage } = useState(1);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);

  // const userData = async () => {
  //   let url = "https://give-me-users-forever.vercel.app/api/users/0/next";
  //   let res = await fetch(url);
  //   let data = await res.json();
  //   setUserId(data.users);
  // };

  useEffect(() => {
    fetch(`https://give-me-users-forever.vercel.app/api/users/${userId}/next`)
      .then(response => response.json())
      .then(data => setUsers(data.users));
  }, [userId]);

  
  const handlePrevClick = () => {
    if (userId >= 10) {
      setUserId(userId - 10);
    }
  };

  const handleNextClick = () => {
    setUserId(userId + 10);
  };

  return (
    <div className="table">
      <div className="tableSection">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>JobTitle</th>
              <th>EmailAddress</th>
              <th>FistNameLastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0,10).map((obj, index) => {
              return (
                <tr key={index}>
                  <td>{obj.ID}</td>
                  <td>{obj.JobTitle}</td>
                  <td>{obj.EmailAddress}</td>
                  <td>{obj.FirstNameLastName}</td>
                  <td>{obj.Email}</td>
                  <td>{obj.Phone}</td>
                  <td>{obj.Company}</td>
                </tr>
              );
            })}
            
          </tbody>
        </table>
       
      </div>
      <div className="button-container">
              <button onClick={handlePrevClick}>Previous</button>
              <button onClick={handleNextClick}>Next</button>
         </div>
      
    </div>
  );
};

export default DataTable;
