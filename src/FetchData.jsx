import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState([]); //store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") //API request
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  /* show loading screen */
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }
  /* show error screen */
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        {/* heading */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          API Integrationa & Table Display
        </h3>

        <div className="flex justify-center">
          {/* table */}
          <table className="mt-10 min-w-full border-2 border-black border-collapse table-fixed">
            <thead>
              <tr>
                <th className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                  ID
                </th>
                <th className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                  Name
                </th>
                <th className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                  Email
                </th>
                <th className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                  City
                </th>
                <th className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                  Phone Number
                </th>
                <th className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                  Company Name
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                      {user.id}
                    </td>
                    <td className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                      {user.name}
                    </td>
                    <td className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                      {user.email}
                    </td>
                    <td className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                      {user.address.city}
                    </td>
                    <td className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                      {user.phone}
                    </td>
                    <td className="px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-sm border-2 border-black">
                      {user.company.name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FetchData;
