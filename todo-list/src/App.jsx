import React from "react";

function App() {
  return (
    <>
      <TodoList 
        val1="Learn React"
        val2="Build a To-Do List"
        val3="Master JavaScript"
        val4="Apply for Jobs"
        btn1="Add"
        btn2="Delete"
      />
    </>
  );
}

function TodoList(props) {
  return (
    <>
      <main className="flex justify-center">
        <section className="pt-20"> 
          <header className="text-center text-2xl font-bold mb-5">To-Do List</header>
          <div>
            <div className="w-200 flex gap-2 border-b-2 border-b-black mb-3">
              <input type="checkbox" className="w-5 h-5 border-black"/> 
              <label>{props.val1}</label>
            </div>
            <div className="w-200 flex gap-2 border-b-2 border-b-black mb-3">
              <input type="checkbox" className="w-5 h-5 border-black"/> 
              <p>{props.val2}</p>
            </div>
            <div className="w-200 flex gap-2 border-b-2 border-b-black mb-3">
              <input type="checkbox" className="w-5 h-5 border-black"/> 
              <p>{props.val3}</p>
            </div>
            <div className="w-200 flex gap-2 border-b-2 border-b-black mb-3">
              <input type="checkbox" className="w-5 h-5 border-black"/> 
              <p>{props.val4}</p>
            </div>
          </div>
          <div className="w-203 flex justify-end">
            <button className="pl-3 pr-3 pt-2 pb-2 rounded-sm mr-3 bg-blue-600 text-white">{props.btn1}</button>
            <button className="pl-3 pr-3 rounded-sm mr-3 bg-red-600 text-white">{props.btn2}</button>
          </div>
          <div className="flex justify-center mt-10">
            <table className="border-2">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2">
                  <td className="px-4 py-2">Andrei Vibar</td>
                </tr>
                <tr className="border-2">
                  <td className="px-4 py-2">Josh Apinado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  ); 
}

export default App;