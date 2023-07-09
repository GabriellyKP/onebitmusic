import { Hamburguer } from "@/components/icons/hamburguer";
import { Logo } from "@/components/icons/logo";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center bg-home-img h-full w-full text-center">
      <header className="w-2/3 mt-7">
        <nav className="px-4 lg:px-6 py-2.5 w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl place-content-between">
            <div className="flex">
              <span className="text-white text-xl pr-2">
                onebit<span className="text-red text-xl">music</span>
              </span>
              <a href="#" className="flex items-center">
                <Logo />
              </a>
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
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white text-sm font-semibold hover:text-red lg:hover:bg-transparent lg:bg-transparent lg:text-primary-700 lg:p-0"
                    >
                      INÍCIO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white font-semibold text-sm hover:text-red lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      ARTISTAS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white text-sm font-semibold hover:text-red lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      PROGRAMAÇÃO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 text-white text-sm font-semibold hover:text-red lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      CONTATO
                    </a>
                  </li>
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

        <button className="bg-red text-white rounded-lg px-[2.125rem] py-[1.125rem]">
          Comecar
        </button>
      </div>
      <div>
        <h1 className="text-[9rem] font-extrabold text-transparent stroke-sky-900">
          5d 12h
        </h1>
      </div>
    </div>
  );
}
