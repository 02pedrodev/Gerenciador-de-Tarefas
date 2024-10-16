import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [descripition, setDescripition] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descripition}
        onChange={(event) => setDescripition(event.target.value)}
      />
      <button
        onClick={() => {
          // verificar se o titulo e a descricao estao preenchidos
          if (!title.trim() || !descripition.trim()) {
            return alert("Preencha o titulo e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, descripition);
          //   ao dar setTitle e setDescripition aqui voce limpa o que ta escrito nele
          setTitle("");
          setDescripition("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
