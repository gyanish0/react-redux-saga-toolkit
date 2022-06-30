import React from "react";
// https://www.omdbapi.com/?i=tt3896198&apikey=809d8ea6&t=marvel
// http://img.omdbapi.com/?apikey=809d8ea6&t=marvel
const Table = () => {
  return (
    <div>
      <table className="custom-border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Demo</td>
            <td>NA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
