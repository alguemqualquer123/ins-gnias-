import { useEffect } from "react";
import { Menu } from "./components/Menu";
import { TNuiMessage } from "./types/TNuiMessage";
import { useNavigate, Routes, Route } from "react-router-dom";
import Badge from "./components/Badge";
import Badge3D from "./components/Badge3D";

const insigneas = [
  {
    label: "Representantes Da Plataforma",
    icon: "/Ceo.png",
  },
  {
    label: "Primeiros 100 Comentarios na plataforma",
    icon: "/Pioneiro Digital.png",
  },
  {
    label: "Primeiro apoiador do seu seguidor favorito.",
    icon: "/Seguidor Fiel.png",
  },
];

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-800">
      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-20">
          {insigneas.map((insignea, index) => (
            <Badge3D key={index} label={insignea.label} icon={insignea.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
