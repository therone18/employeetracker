"use client";

import Link from "next/link";



export default function Home() {
  var employeeRender = [
    {
      id: "1",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "2",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "3",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "4",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "5",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "6",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
    {
      id: "7",
      name: "testName",
      position: "testPosition",
      status: "testStatus",
    },
  ];

  function handleDetails (employeeID: any){
    //console.log(employeeID);
    var urlLink = "/employeeDetails/" + employeeID
    //console.log(urlLink)
    window.location.href = urlLink
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>Employee Tracker</div>
      <div className="h-[700px] overflow-auto">
        {employeeRender.map((employee, index) => (
          <div className="flex border-solid border-4 border-black w-[1200px] h-[100px] my-2 drop-shadow-lg items-center p-5 justify-between">
            <div>{employee.id}</div>
            <div>{employee.name}</div>
            <div>{employee.position}</div>
            <div>{employee.status}</div>
            
              <button className="bg-blue-500 w-[200px] hover:bg-blue-600 rounded" onClick={() => handleDetails(employee.id)}>
                Details
              </button>
            
          </div>
        ))}
        
      </div>
      <Link href="/addEmployee">
          <div className="bg-green-500 w-[1200px] hover:bg-green-600 rounded p-5">
            ADD EMPLOYEE{" "}
          </div>
        </Link>
    </main>
  );
}
