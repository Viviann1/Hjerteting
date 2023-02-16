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
          <p className='pt-4 mt-6 mb-6 ml-6'>her finner du håndlagede produkter hvor hvert enkelt produkt er unikt. Hvert produkt er nøye designet for å fungere best mulig.</p>
          </div>
          
          <section className='gap-9 columns-3'>
          <div>
            <h2 className='text-3xl mb-7 mt-7'>varmeputer nakke</h2>
            <Image src={img1} className='pl-2' alt="picture of heatpillow" />
            <Image src={img2} className='mt-7' alt="details of heatpillow"  />
            
          </div>
          
          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>varmepute barn</h2>
          </div>
          
          <div className='mt-11'>
          <h2  className='text-3xl mb-7 mt-7'>ris og Lavendel</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>sovemaske</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>makeup pads</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>hårmote</h2>
          </div>
          
          <div className='mt-11'>
          <h2  className='text-3xl mb-7 mt-7'>kaniner</h2>
          </div>
          
          <div className='mt-11'>
          <h2  className='text-3xl mb-7 mt-7'>dukker</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>engler</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>vimpelrekker</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>hjerter</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>luer</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>pannebånd</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-3xl mb-7 mt-7'>hals</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl text-red-900 mb-7 mt-7'>smekker</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-3xl text-red-900 mb-7 mt-7'>koseklut</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl text-red-900 mb-7 mt-7'>varmepute små mager</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-4xl text-red-900 m b-7 mt-7'>jul</h2>
          </div>
          
          <div className='mt-11'>
            <h2  className='text-3xl text-red-900 mb-7 mt-7'>påske</h2>
          </div>

          <div className='mt-11'>
            <h2  className='text-3xl text-red-900 mb-7 mt-7'>halloween</h2>
          </div> 
          
          </section>
          
        </div>
      </main>
    </>
  ) 
}