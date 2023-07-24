"use client";
import { Hamburguer, Logo, Play } from "@/components/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const menuOptions = [
    { name: "INÍCIO" },
    { name: "ARTISTAS" },
    { name: "PROGRAMAÇÃO" },
    { name: "CONTATO" },
  ];

  const [timer, setTimer] = useState("00:00:00");
  const [openVideo, setOpenVideo] = useState<boolean>(false);

  const getTimeRemaining = () => {
    const total = new Date("07/30/2023").getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    setTimer(
      `${days.toString()}d ${hours.toString()}h ${minutes
        .toString()
        .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`
    );
  };

  useEffect(() => {
    // Atualiza o temporizador a cada segundo
    const intervalId = setInterval(() => {
      getTimeRemaining();
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  if (typeof window !== "undefined") {
    const modal = document.getElementById("video-modal");
    modal?.addEventListener("click", function (e) {
      if (e.target == this) {
        setOpenVideo(false);
      }
    });
  }

  return (
    <section className="flex justify-center flex-col items-center bg-home-img h-full w-full text-center">
      <header className="w-2/3 mt-7">
        <nav className="px-4 lg:px-6 py-2.5 w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl place-content-between">
            <div className="flex">
              <p className="text-white text-xl pr-2">
                onebit<span className="text-red text-xl">music</span>
              </p>
              <Link href="#" className="flex items-center">
                <Logo />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center lg:order-2">
                <button className="ml-[3.125rem] text-black bg-white rounded-lg hover:bg-red hover:text-white px-[2.125rem] py-[1.125rem] font-semibold text-base lg:px-5 lg:py-2.5 mr-2">
                  COMPRAR INGRESSOS
                </button>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-white lg:hidden hover:bg-gray-100"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <Hamburguer />
                </button>
              </div>
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {menuOptions.map((option) => (
                    <li key={option.name}>
                      <Link
                        href="#"
                        className="block py-2 pr-4 pl-3 text-white text-sm font-semibold hover:text-red lg:hover:bg-transparent lg:bg-transparent lg:text-primary-700 lg:p-0"
                      >
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex justify-center items-center flex-col w-1/2 mt-28">
        <h1 className="text-7xl font-bold text-white text-center">
          A Sua Melhor Experiência{" "}
          <span className="text-7xl text-red font-bold">Musical Digital</span>
        </h1>
        <p className="text-white my-10 text-center">
          Prepare-se para uma experiência incrível e envolvente, onde a arte se
          une à performance para criar momentos inesquecíveis. Nossos shows
          artísticos são projetados para encantar, inspirar e transportar você
          para um mundo de criatividade e expressão.
        </p>

        <div className="flex">
          <button className="bg-red text-white rounded-lg px-[2.125rem] py-[1.125rem] mr-10">
            Começar
          </button>
          <div className="flex items-center">
            <button
              className="bg-transparent"
              onClick={() => setOpenVideo(true)}
            >
              <Play />
            </button>
            <h4 className="text-xl font-extrabold text-white ml-5">
              Assistir vídeo
            </h4>
          </div>
        </div>
      </div>
      <div>
        <h1
          className="text-[9rem] font-extrabold text-transparent"
          style={{ WebkitTextStroke: "0.1rem white" }}
        >
          {timer}
        </h1>
      </div>

      {openVideo && (
        <div
          id="video-modal"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg p-5 shadow-xl w-1/2">
            <video controls width="100%" autoPlay>
              <source src="/The_Rose.mkv" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
