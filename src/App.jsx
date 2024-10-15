import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    //esse localStorage faz com que mesmo que a pagina seja recarregada o conteudo persista.
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //  esse useEffect executa essa primeira função sempre que algum valor
  // que eu colocar dentro da lista que esta no colchetes for alterado
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //isso aqui converte a lista para string/
  }, [tasks]);

  // quando vc cria um useEffect com [] vazio, essa função só é utilizada uma vez
  // que é na primeira vez que o usuario entrar no seu site.

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     // CHAMAR A API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     // PEGAR OS DADOS QUE ELA RETORNA
  //     const data = await response.json();
  //     console.log (data);
  //     //ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
  //     setTasks(data);
  //   };
  // }, []);

  // //  Recebeu taskId para identificar qual tarefa foi clicada
  useEffect(() => {
    async function fetchTasks() {
      //CHAMAR A API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      // PEGAR OS DADOS QUE ELA RETORNA
      const data = await response.json();
      setTasks(data);
    }
    // ARMAZENAR/PERSISITR ESSES DADOS NO STATE
    fetchTasks();
  }, []);

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

  function onAddTaskSubmit(title, description) {
    const submitTask = {
      id: v4(),
      title,
      //  utilize short hand sintex, pois o nome da propriedade é o mesmo do parametro
      // vc pode deixar só title, e só description
      description: description,
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
