import { useState } from 'react';
import Header from './components/Header';
import Selector from './components/Selector';
import TaskList from './components/TaskList';
const users = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Ana' },
  { id: 3, name: 'Luis' },
]
const allTasks = {
  1:["Comprar"],
  2: ["Pasear al Perro", "Estuduiar React", "Tomar Cursos de Python"],
}


function App(){
  const [currentUserId, setCurrentUserId] = useState(1);
  const currentUser = users.find((user)=> user.id == currentUserId);
  const tasks = allTasks[currentUserId] || [];
  console.log(tasks);
  return (
    <div className='bg-stone-100 w-screen h-screen'>
      <Header user = {currentUser}/>
      <Selector users = {users} setCurrentUserId = {setCurrentUserId}/>
      <TaskList tasks = {tasks}/>
    </div>
  );
}
export default App;