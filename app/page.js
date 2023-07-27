import Presentation from "./components/presentation"
import Products from "./components/products"
import Public from "./components/public"
import Supplements from "./components/supplements"
import Categories from "./components/categories"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className='flex flex-col bg-white'>
      <div className="fixed right-10rem bottom-10rem z-50 flex justify-start items-end w-full h-full p-4 sm:p-6">
        <a className="cursor-pointer" href="https://api.whatsapp.com/send?phone=584140124810&text=+Hola+requiero+m%C3%A1s+informaci%C3%B3n%3A%0D%0A%0D%0A%2Adesde+su+web%3A%2A+https%3A%2F%2Fsuplementosvenezuela.com+">
          <div className="w-16 h-16 sm:w-24 sm:h-24 relative animate-pulse">
            <Image
              className="object-contain w-full h-full"
              src="/assets/images/whatsapp-icon.ico"
              alt="WhatsApp Icon"
              layout="fill"
            />
          </div>
        </a>
      </div>
      <Presentation />
      <Supplements />
      <Categories />
      <Public />
      {/* <Products /> */}
      

    </section>
  )
}
