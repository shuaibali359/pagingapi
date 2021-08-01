import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
     var [records, setCount] = useState([]);
    var [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
          fetch(`https://reqres.in/api/users?page=${currentPage}`)
              .then(response => response.json())
              .then(data => {
                setCount(data.data);
              })
    }, [currentPage]);
    const incrementPageNumber = () => setCurrentPage(prevPage => prevPage + 1);
    const decrementPageNumber = () => {
  if(currentPage <= 1) return; 
  setCurrentPage(prevPage => prevPage - 1);
}
    return (
       <div>
        <div className="main-div">
           <h2>List of GitHub Users</h2>
        <div className="child-div">
          {
            records.map((record) => {
              return (
            <div key={record.id}>
              <div className="card">
                  <div className="image">
                    <img src={record.avatar} alt="" className="rounded" width="155" />
                  </div>
                  <div className="detail">
                              <p>Email : {record.email}</p>
                              <p>Name : {record.first_name}&nbsp;{record.last_name}</p>
                  </div>
              </div>
            </div>  
                )
            })
                    }
                    </div>
          <div className="btn">
            <button onClick={decrementPageNumber}>Prev</button>
            <button onClick={incrementPageNumber}>Next</button>
          </div>
      </div>
    </div> 
    );
}
export default App;