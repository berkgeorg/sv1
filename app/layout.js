// layout.js

import './style.css';
import Nav from './components/nav';
import Footer from "./components/footer";

export const metadata = {
  title: 'Suplementos Venezuela',
  description: 'Suplementos Venezuela es tu tienda física y en línea de confianza para comprar suplementos de nutrición deportiva originales y certificados. Ofrecemos una amplia selección de proteínas, creatinas, aminoácidos, quemadores de grasa y más, de marcas originales americanas. Entrega rápida y segura a toda Venezuela.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
