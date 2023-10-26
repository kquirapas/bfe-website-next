import { forwardRef } from 'react';
import Image from 'next/image';


const About = ({ title }, ref) => {
  const blur = "data:image/jpeg;base64,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"

  return (
    <div ref={ref}>
      <div className="h-max mt-32 mb-32 flex flex-col align-center justify-center">
        <div className='grid gap-36 relative justify-center'>
          <Image className='absolute brightness-200 top-0 -right-52' src={"/About/Ellipse.svg"} width={700} height={700} alt='about' />
          <Image className='absolute brightness-50 z-10 -top-10 -right-52 scale-y-[-1]' src={"/About/Polygon_right.svg"} width={400} height={300} alt='about' />
          <div className='rounded-[1.5rem] backdrop-contrast-50 bg-[#292932] grid lg:grid-cols-2 grid-cols-1 items-center lg:mx-32 mx-36 md:mx-48 py-16 lg:py-24 px-6 lg:px-8 gap-10'>
            <Image className='mx-auto md:w-full w-64' src={"/About/Logo.png"} width={1000} height={1000} alt='about' />
            <div className='grid justify-start lg:mx-14 mx-0 gap-10'>
              <p className='uppercase lg:text-start text-center text-2xl lg:text-4xl font-bold'>About the BFE</p>
              <p>Blockchain for Executives is a podcast on tech and business made for entrepreneurs. This podcast tackles the possible usecase and how business-minded people can leverage blockchain for their business.</p>
            </div>
          </div>
          <div className='grid justify-center lg:px-0 px-32 gap-8'>
            <p className='uppercase text-center text-shadow-white text-2xl lg:text-5xl font-bold'>MEET THE TEAM</p>
            <p className='text-center lg:mb-2 mb-8 mx-12 lg:mx-6'>This team consist of people who love to talk and share about the amazing usecase of blockchain technology</p>
            <div className='flex flex-wrap text-lg lg:xl 2xl:text-2xl w-full justify-center gap-12 px-4 2xl:px-16 lg:gap-4'>
              <div placeholder="blur" className='relative xl:h-[250px] h-52 w-80 xl:w-[370px] flex items-center justify-end'>
                <Image className='absolute bottom-0 left-0 z-10' src={"/About/Kristian_profile.png"} width={250} height={250} alt='about' />
                <span className='uppercase font-bold pr-2 text-black z-10 text-center'>
                  <p className="lg:text-2xl text-xl lg:leading-5 leading-4">Kristian</p>
                  <p className="lg:text-2xl text-xl lg:leading-5 leading-4">Quiparas</p>
                </span>
                <Image placeholder="blur" blurDataURL={blur} className='absolute bottom-0 left-0 ' src={"/About/Team_bg.svg"} width={380} height={180} alt='about' />
              </div>
              <div className='relative xl:h-[250px] h-52 w-80 xl:w-[370px] flex items-center justify-end'>
                <Image placeholder="blur" blurDataURL={blur} className='absolute bottom-0 left-0 z-10' src={"/About/Alvin_profile.png"} width={264} height={250} alt='about' />
                <span className='uppercase font-bold pr-8 text-black z-10 text-center'>
                  <p className="lg:text-2xl text-xl lg:leading-5 leading-4">Alvin</p>
                  <p className="lg:text-2xl text-xl lg:leading-5 leading-4">Reyes</p>
                </span>
                <Image placeholder="blur" blurDataURL={blur} className='absolute bottom-0 left-0 ' src={"/About/Team_bg.svg"} width={380} height={180} alt='about' />
              </div>
              <div className='relative xl:h-[250px] h-52 w-80 xl:w-[370px] flex z-10 items-center justify-end'>
                <Image placeholder="blur" blurDataURL={blur} className='absolute bottom-0 left-0 z-10' src={"/About/Warvin_profile.png"} width={291} height={250} alt='about' />
                <span className='uppercase font-bold pr-2 text-black z-10 text-center'>
                  <p className="lg:text-2xl text-xl lg:leading-5 leading-4">Warvin</p>
                  <p className="lg:text-2xl text-xl lg:leading-5 leading-4">Gonzaga</p>
                </span>
                <Image placeholder="blur" blurDataURL={blur} className='absolute bottom-0 left-0 ' src={"/About/Team_bg.svg"} width={380} height={180} alt='about' />
              </div>
            </div>
          </div>
          <div className='relative flex items-center justify-center'>
            <Image className='absolute -top-56 w-32 lg:w-max right-14' src={"/About/Dots.svg"} width={140} height={100} alt='about' />
            <Image className='absolute -top-16 lg:w-max w-44 left-0 z-10 opacity-80' src={"/About/BG_Elements.svg"} width={650} height={500} alt='about' />
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-36 md:mx-44 lg:mx-20 gap-8 items-center rounded-[1.5rem] p-6 backdrop-brightness-50 bg-[#1d1d27]'>
              <div className='grid gap-6'>
                <p className='uppercase text-2xl lg:text-start text-center lg:text-5xl font-bold'>Mission</p>
                <p>“To educate entrepreneurs on how they can leverage blockchain technology for their business”</p>
              </div>
              <div className='relative w-full h-full'>
                <Image className='absolute top-0 left-0 right-0 bottom-0 z-50 w-full h-full rounded-20px' src={"/About/mission.png"} alt='blog' layout='fill' objectFit='cover' />
                <Image className='z-10' src={"/About/Placeholder_image.svg"} width={1300} height={1300} alt='about' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default forwardRef(About);
