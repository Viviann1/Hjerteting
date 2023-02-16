import { Inter } from '@next/font/google';
import Head from 'next/Head';
import Image from 'next/image';

import { Montserrat } from "@next/font/google";

import img1 from "../images/varmepute.jpg";
import img2 from "../images/varmepute2.jpg";

const montserrat = Montserrat({
  weight: "100",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Head>
      <title>h j e r t e t i n g</title>
      </Head>
      <main>
        <div className='p-3'>
          <div className='max-w-full p-4 tracking-widest bg-red-300 border-2 border-red-900 h-1/4'>
          <h1 className='ml-6 tracking-widest text-8xl text-zinc-100'>h j e r t e t i n g</h1>
          <p className='pt-4 mt-6 mb-6 ml-6'>Her finner du håndlagede produkter hvor hvert enkelt produkt er unikt. Hvert produkt er nøye designet for å fungere best mulig.</p>
          </div>
          
          <section className='gap-9 columns-3'>
          <div>
            <h2 className='text-4xl mb-7 mt-7'>Varmeputer nakke</h2>
            <Image src={img1} className='pl-2' alt="picture of heatpillow" />
            <Image src={img2} className='mt-7' alt="details of heatpillow"  />
            
          </div>
          
          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Varmepute barn</h2>
          </div>
          
          <div className='mt-11'>
          <h2  className='text-4xl mb-7 mt-7'>Ris og Lavendel</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Sovemaske</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Makeup pads</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Hårmote</h2>
          </div>
          
          <div className='mt-11'>
          <h2  className='text-4xl mb-7 mt-7'>Kaniner</h2>
          </div>
          
          <div className='mt-11'>
          <h2  className='text-4xl mb-7 mt-7'>Dukker</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Engler</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Vimpelrekker</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Hjerter</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Luer</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Pannebånd</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-4xl mb-7 mt-7'>Hals</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl text-red-900 mb-7 mt-7'>Smekker</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-4xl text-red-900 mb-7 mt-7'>Koseklut</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl text-red-900 mb-7 mt-7'>Varmepute små mager</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl text-red-900 m b-7 mt-7'>JUL</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-4xl text-red-900 mb-7 mt-7'>PÅSKE</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl text-red-900 mb-7 mt-7'>HALLOWEEN</h2>
          </div> 
          
          </section>
          
        </div>
      </main>
    </>
  ) 
}