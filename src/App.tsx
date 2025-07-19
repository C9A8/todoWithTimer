import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState<string[]>([]);
  const [timer,setTimer] = useState(0);

  // timer jazz
   useEffect(()=>{
    setInterval(() => {
      setTimer(prev=>prev+1)
      
},1000);
   },[])






  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-200 via-sky-200 to-purple-200">
      <div className="flex justify-center text-4xl font-extrabold text-purple-700 drop-shadow-lg mt-8">Todo List With Timer</div>
      <div className="flex justify-center mt-5 text-lg text-sky-700 font-semibold">
        Build a todo list where each task has its own timer that can be started, paused, and reset.
      </div>
      <div className="border-4 border-pink-400 rounded-xl bg-white/80 w-full max-w-2xl max-h-lg mt-12 shadow-2xl">
        <div className="text-left ml-5 mt-4 text-xl font-bold text-pink-600">Todo with Timer</div>
        <div>
          <div className='flex justify-center items-center'>
            <input 
              type="text"
              placeholder='Add Todo'
              value={input}
              className='border-2 border-pink-200 rounded bg-white m-2 focus:outline-pink-400 w-133 h-12 p-3 text-lg'
              onChange={(e)=>{setInput(e.target.value)}} 
            />
            <button 
              onClick={()=>{
                if(input.trim()){
                  setTodo(prev=> [...prev,input])
                  setInput("");
                }
              }}
              className='border border-pink-500 rounded bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 ml-2 h-12 cursor-pointer hover:from-pink-500 hover:to-purple-500 font-bold shadow flex items-center'
            >
              Add
            </button>
          </div>
          {todo.length > 0 ? (
            <div className='text-lg font-bold'>
              <Component input={input} todo={todo} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}

type ComponentProps = {
  input: string;
  todo: string[];
};

function Component({ todo }: ComponentProps) {
  return (
    <div>
      <div>
        {todo.map((items, idx) => (
          <div key={idx} className='ml-5 mr-3 mt-3 mb-3 border-2 rounded-xl border-purple-300 bg-gradient-to-r from-sky-100 to-pink-100 shadow'>
            <div className='ml-5 text-purple-700 font-semibold'>{items}</div>
            <div className='ml-3'>
              <button onClick={()=>{}} className='border border-white bg-pink-400 text-white rounded mt-2 ml-2 mb-2 p-2 font-bold shadow hover:bg-pink-500 transition'>Start</button>
              <button onClick={()=>{}} className='border border-white bg-purple-400 text-white rounded mt-2 ml-2 mb-2 p-2 font-bold shadow hover:bg-purple-500 transition'>Reset</button>
              <button onClick={()=>{}} className='border border-white bg-yellow-400 text-white rounded mt-2 ml-2 mb-2 p-2 font-bold shadow hover:bg-yellow-500 transition'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
