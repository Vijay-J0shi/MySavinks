// src/App.jsx
import './App.css';

function App() {
  return (

<div className="mb-20 mx-auto w-full max-w-6xl">
  <h2 className="text-2xl font-bold mb-6">🧩 3x3 Grid Alignment Examples</h2>

  {/* place-items-center: All items centered (X & Y) */}
  <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-4 bg-gray-200 p-4 border border-black h-[400px] mb-10">
    <div className="bg-red-400 p-2 w-20 h-16 text-center">1</div>
    <div className="bg-green-400 p-2 w-20 h-20 text-center">2</div>
    <div className="bg-blue-400 p-2 w-20 h-24 text-center">3</div>
    <div className="bg-red-500 p-2 w-20 h-16 text-center">4</div>
    <div className="bg-green-500 p-2 w-20 h-20 text-center">5</div>
    <div className="bg-blue-500 p-2 w-20 h-24 text-center">6</div>
    <div className="bg-red-600 p-2 w-20 h-16 text-center">7</div>
    <div className="bg-green-600 p-2 w-20 h-20 text-center">8</div>
    <div className="bg-blue-600 p-2 w-20 h-24 text-center">9</div>
  </div>

  {/* Custom: justify-items-start + items-end */}
  <div className="grid grid-cols-3 grid-rows-3 justify-items-start items-end gap-4 bg-yellow-100 p-4 border border-yellow-600 h-[400px] mb-10">
    <div className="bg-yellow-300 p-2 w-20 h-16 text-center">A</div>
    <div className="bg-yellow-400 p-2 w-20 h-20 text-center">B</div>
    <div className="bg-yellow-500 p-2 w-20 h-24 text-center">C</div>
    <div className="bg-yellow-600 p-2 w-20 h-16 text-center">D</div>
    <div className="bg-yellow-700 p-2 w-20 h-20 text-center">E</div>
    <div className="bg-yellow-800 p-2 w-20 h-24 text-center">F</div>
    <div className="bg-yellow-900 p-2 w-20 h-16 text-center">G</div>
    <div className="bg-amber-600 p-2 w-20 h-20 text-center">H</div>
    <div className="bg-amber-700 p-2 w-20 h-24 text-center">I</div>
  </div>

  {/* Mixed with self alignment overrides */}
  <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-4 bg-teal-100 p-4 border border-teal-600 h-[400px]">
    <div className="bg-teal-300 p-2 w-20 h-16 text-center self-start">Top</div>
    <div className="bg-teal-400 p-2 w-20 h-20 text-center">Center</div>
    <div className="bg-teal-500 p-2 w-20 h-24 text-center self-end">Bottom</div>
    <div className="bg-teal-600 p-2 w-20 h-16 text-center">Box</div>
    <div className="bg-teal-700 p-2 w-20 h-20 text-center self-stretch">Stretch</div>
    <div className="bg-teal-800 p-2 w-20 h-24 text-center">Box</div>
    <div className="bg-cyan-500 p-2 w-20 h-16 text-center">Box</div>
    <div className="bg-cyan-600 p-2 w-20 h-20 text-center self-center">Center</div>
    <div className="bg-cyan-700 p-2 w-20 h-24 text-center">Box</div>
  </div>
</div>




  )
}

export default App;
