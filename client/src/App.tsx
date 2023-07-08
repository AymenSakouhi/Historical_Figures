import React from "react";
import "./App.css";

function App() {
  return <div className="h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl text-blue-500">Events or Figures</h1>
    <main className="flex items-start justify-center space-x-4 p-2">
      <div>
        <div className="grid grid-cols-6 gap-x-2">
          <h2 className="col-span-2">Search below for an event:</h2>
          <input type="text" className="col-span-2" placeholder="France"/>
          <input type="button" className="bg-slate-500 border rounded-md col-span-2" value={`Search`} />
        </div>
      </div>
      <hr className="w-1 h-48 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      <div>
        <h2>Search below for a figure:</h2>
      </div>
    </main>
  </div>;
}

export default App;
