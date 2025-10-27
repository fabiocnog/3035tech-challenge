import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./components/navbar";

export default function Layout(){
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
    </div>
  )
}