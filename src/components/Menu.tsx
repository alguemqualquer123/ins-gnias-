import { useEffect } from "react";
import { useFetch } from "../lib/useFetch";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate()
  function close() {
    useFetch("removeFocus", {}, true).then(resp => {
      if (resp) navigate("/")
    })
  }
  useEffect(() => {
    const handleKeyDown = (e: { keyCode: any }) => {
      if (e.keyCode === 27) close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <main  className="">
      
    </main>
  );
};