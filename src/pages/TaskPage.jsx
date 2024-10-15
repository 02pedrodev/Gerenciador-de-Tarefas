import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
//  aqui eu passo query params para minha url e mudo a pagina
// /task?title=pedro&description=naosei    esse foi o usado como exemplo
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative">
          <button
            // eu passei o navigate -1 que me faz voltar para tela anterior
            // não podemos passar o navigate direto pq se não vai bugar o site
            // na hora que o button for renderizado a função navigate seria executada
            // por isso temos q passar ela por meio da arrow function =>
            // que chama uma outra função dentro da função navigate
            // ou criar uma função que faça isso e passar ela em baixo
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title> Detalhes da Tarefa </Title>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
