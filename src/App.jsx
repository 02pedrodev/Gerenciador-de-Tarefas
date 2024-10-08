import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      descripition: "Estudar sobre React",
      Iscompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      descripition: "Estudar sobre verbos",
      Iscompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matematica",
      descripition: "Estudar sobre Lógica de Programação",
      Iscompleted: false,
    },
  ]);
  // //  Recebeu taskId para identificar qual tarefa foi clicada
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, Iscompleted: !task.Iscompleted };
      }
      // // Não preciso atualizar essa tarefa
      return task;
    });
    setTasks(newTasks);
  }
  function onClickDelete(taskId) {
    const deleteTasks = tasks.filter((task) => {
      if (task.id === taskId) {
        return;
      }
      return task;
    });
    setTasks(deleteTasks);
  }

  function onAddTaskSubmit(title, descripition) {
    const submitTask = {
      id: tasks.length + 1,
      title,
      //  utilize short hand sintex, pois o nome da propriedade é o mesmo do parametro
      // vc pode deixar só title, e só descripition
      descripition,
      Iscompleted: false,
    };
    setTasks([...tasks, submitTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onClickDelete={onClickDelete}
        />
      </div>
    </div>
  );
}

export default App;
