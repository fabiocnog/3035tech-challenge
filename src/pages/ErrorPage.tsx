import { FrownIcon } from "lucide-react";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-20 px-8">
      <p className="text-center w-full px-4"><FrownIcon size={80} className="text-primary mx-auto" /></p>
      <h2 className="text-2xl lg:text-4xl font-bold text-center">Ops! Algo deu errado.</h2>
      <p className="text-sm lg:text-xl text-center">Verifique se o link está correto ou <Link to="/" className="text-primary underline">clique aqui</Link> para voltar para página inicial.</p>
    </div>
  )
}