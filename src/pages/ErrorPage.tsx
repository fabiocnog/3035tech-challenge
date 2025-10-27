import { FrownIcon } from "lucide-react";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-center w-full px-4"><FrownIcon size={80} className="text-primary mx-auto" /></p>
      <h1 className="text-4xl font-bold">Ops! Algo deu errado.</h1>
      <p className="text-xl">Verifique se o link está correto ou <Link to="/" className="text-primary underline">clique aqui</Link> para voltar para página inicial.</p>
    </div>
  )
}