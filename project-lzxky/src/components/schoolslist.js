import {React, useEffect, useState} from 'react';
import { fetchSchools } from '../data';
import { Redirect } from 'react-router-dom';

const SchoolsList = () => {
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        const getSchools = async () => {
            try{
                fetchSchools().then((schools) => setSchools(schools));
            } catch (error) {
                console.error(error);
            }
        };
        getSchools();
    }, [schools]);
  return (
    <div class="mt-3 w-full h-full flex flex-col">
        {schools && schools.map((school) => {
            return (
            <div className="mx-auto my-3 bg-white w-2/3 rounded-xl shadow-md overflow-hidden b-2 border border-slate-400">
                <div className="md:flex md:flex-row">
                    <img className="h-48 w-full md:w-1/3 md:h-full object-cover
                      text-lg text-wrap" src={school.imageURL} alt={"Image of "+school.name} />
                    <div className="p-8 w-full md:w-2/3 h-full flex flex-col justify-between
                      content-begin">
                        <h3 className="text-2xl font-bold text-left">{school.name}</h3>
                        <p className="text-lg text-left whitespace-pre-line">{school.description}</p>
                        <form className="flex flex-row justify-end mt-auto"
                          onSubmit={
                            (e) => {
                              e.preventDefault();
                              window.location.href = `/edit?id=${school.id}`;
                            }
                          }>
                            <button className="bg-blue-500 text-white px-5 py-2 rounded-md mt-3 hover:mt-2.5 hover:bg-blue-600 hover:text-gray-300"
                              type="submit">Edit</button>
                            <button className="bg-red-500 text-white px-5 py-2 rounded-md mt-3 ml-3 hover:mt-2.5 hover:bg-red-600 hover:text-gray-300"
                              onClick={
                                (e) => {
                                  e.preventDefault();
                                  // prompt user to confirm delete
                                  if (!window.confirm("Are you sure you want to delete this school?")) return;
                                  // delete school
                                  fetch("/api/delete", {
                                    method: "DELETE",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ id: school.id }),
                                  })
                                  .then((response) => response.json())
                                  .then((data) => {
                                    console.log("Success:", data);
                                    setSchools([]);
                                  })
                                  .catch((error) => {
                                    console.error("Error:", error);
                                  });
                                }
                              }>Delete</button>
                      </form>
                </div>
            </div>
          </div>
        );
        })}
    </div>
  );
}
export default SchoolsList;