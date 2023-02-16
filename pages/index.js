import { Inter } from '@next/font/google';
import Head from 'next/Head';
import Image from 'next/image';
import img1 from "../images/varmepute.jpg";
import img2 from "../images/varmepute2.jpg";

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
          <div className='flex flex-col pt-x 6'>
          <div className='mt-11'>
            <h2 className='text-4xl'>Varmeputer nakke</h2>
            <Image src={img1} className='mt-7' alt="picture of heatpillow" />
            <Image src={img2} className='mt-7' alt="details of heatpillow"  />
            
          </div>
          
          <div className='mt-11'>
            <h2>Varmepute barn</h2>
          </div>
          
          <div className='mt-11'>
          <h2>Ris og Lavendel</h2>
          </div>

          <div className='mt-11'>
            <h2>Sovemaske</h2>
          </div>

          <div className='mt-11'>
            <h2>Makeup pads</h2>
          </div>

          <div className='mt-11'>
            <h2>Hårmote</h2>
          </div>
          
          <div className='mt-11'>
          <h2>Kaniner</h2>
          </div>
          
          <div className='mt-11'>
          <h2>Dukker</h2>
          </div>

          <div className='mt-11'>
            <h2>Engler</h2>
          </div>

          <div className='mt-11'>
            <h2>Vimpelrekker</h2>
          </div>

          <div className='mt-11'>
            <h2>Hjerter</h2>
          </div>
          
          <div className='mt-11'>
            <h2>Luer</h2>
          </div>

          <div className='mt-11'>
            <h2>Pannebånd</h2>
          </div>
          
          <div className='mt-11'>
            <h2>Hals</h2>
          </div>

          <div className='mt-11'>
            <h2>Smekker</h2>
          </div>
          
          <div className='mt-11'>
            <h2>Koseklut</h2>
          </div>

          <div className='mt-11'>
            <h2>Varmepute små mager</h2>
          </div>

          <div className='mt-11'>
            <h2>JUL</h2>
          </div>
          
          <div className='mt-11'>
            <h2>PÅSKE</h2>
          </div>

          <div className='mt-11'>
            <h2>HALLOWEEN</h2>
          </div>
          
          </div>
          
        </div>
      </main>
    </>
  ) 
}