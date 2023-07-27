'use client'
import React, {useState} from "react";
import Image from "next/image";

export default function Produtos() {
  return (
    <>
      <div className="w-screen flex flex-col bg-black">
        <div className=" mt-16 w-full">
          <Image className="w-full" src="/assets/images/SV_FONDO_LINEAS.png" width={500} height={500}/>
        </div>
        <nav className="bg-black w-screen">
          <div className=" w-screen-xl flex p-5">
            <form className="w-full flex flex-col lg:flex-row " method="POST" action="">
              <div className="w-full lg:w-1/4 flex flex-col my-5 lg:mr-3">
                <input className="rounded-lg w-full h-7 text-sm border-collapse " type="text" name="buscar" maxlength="50" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,23}" title="Busqueda de Producto" /> 
              </div>
              <div className="w-full lg:w-1/2 flex flex-col lg:flex-row my-5">
                <label className="w-full lg:w-1/4 text-white text-sm lg:text-lg" for="filtrar">Filtrar</label>
                <select className="w-full rounded-lg lg:w-1/2 mt-5 lg:mt-0 lg:mr-3" name="filtrar" id="">
                  <option value="filtrar por fategoria">Filtrar por Categoria</option>
                  <option value="aminoacidos">Aminoacidos</option>
                  <option value="cooper">Cooper</option>
                  <option value="creadores de peso">Creadores de Peso</option>
                  <option value="creatinas">Creatinas</option>
                  <option value="precursores de testosterona">Precursores de Testosterona</option>
                  <option value="proteinas">Proteínas</option>
                  <option value="quemadores de grasa">Quemadores de Grasa</option>
                  <option value="sars">SARS</option>
                </select>
                <select className="w-full rounded-lg lg:w-1/2 mt-5 lg:mt-0 lg:mr-3" name="filtrar" id="">
                  <option value="filtrar por fategoria">Filtrar por Marca</option>
                  <option value="hi tech pharma">HI-TECH PHARMA</option>
                  <option value="nutrex">Nutrex</option>
                  <option value="nutricost">Nutricost</option>
                  <option value="purely inspired">Purely Inspired</option>
                  <option value="musclemeds">MuscleMeds</option>
                  <option value="muscletech">MuscleTech</option>
                  <option value="naturol">Naturol</option>
                  <option value="universal">Universal</option>
                </select>
              </div>
            </form>
          </div>
        </nav>
        <div className="grid gap-1 grid-cols-1 lg:gap-4 lg:grid-cols-3 w-screen h-auto">
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2 ">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-1 grid-cols-1 lg:gap-4 lg:grid-cols-3 w-screen h-auto">
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2 ">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-1 grid-cols-1 lg:gap-4 lg:grid-cols-3 w-screen h-auto">
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2 ">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-amber-500">
            <div className="flex w-full flex-row">
              <div className="flex flex-col w-1/2 pl-20 pt-0 lg:pt-10">
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">26G</h2>
                  <h2 className="text-white text-sm">Proteina</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">50</h2>
                  <h2 className="text-white text-sm">Servicios</h2>
                </div>
                <div className="w-20 h-20 p-1 mb-2 text-center bg-amber-500 lg:-left-1/2">
                  <h2 className="text-white text-xl font-semibold">5.6G</h2>
                  <h2 className="text-white text-sm">BCAAs</h2>
                </div>
                <div>
                  <button className="-ml-10 w-4/5 h-10 bg-white border-collapse text-black rounded-lg text-lg font-semibold" type="submit">Agregar</button>
                </div>
              </div>
              <div className=" w-1/2">
                <Image className="w-full " src="/assets/images/suplemento1.webp" width={100} height={100} />
              </div>
            </div>
            <div className="w-full flex flex-row mt-2">
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Hipercalorico / incrementa la masa muscular</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Derivado de la carne roja</p>
              </div>
              <span className=" bg-white w-1 h-full"></span>
              <div className=" w-1/3 px-3 pt-4">
                <p className="text-white text-sm">Libre de lactosa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}