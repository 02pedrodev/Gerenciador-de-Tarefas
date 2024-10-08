import { ChevronRightIcon, TrashIcon } from "lucide-react";

// ao inves de colocar props dentro da funÇÃO 'tasks', chamei diretamente cada Uma,
// através do javascript, isso se chama destructure
function Tasks({ tasks, onTaskClick, onClickDelete }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      {/* /* essa funçao quer dizer que para cada props.task ira renderizar um li com o title */
      /* que no caso são apenas 3 */}
      {tasks.map((task) => (
        // quando vc quer utilizar uma lista e cada item vai renderizar um elemento voce precisa botar uma key na sua li, div, p  ou o que seja.
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={` bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.Iscompleted && "line-through"
            }`}
          >
            {" "}
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onClickDelete(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
