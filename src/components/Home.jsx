import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StoriesCards from '@/helpers/StoriesCards';


const Home = ({ }, ref) => {

  return (
    <div ref={ref}>
      <div className="h-max grid gap-24 justify-center pt-52">
        <div className={`grid sm:grid-cols-1 lg:gap-0 gap-16 md:grid-cols-2`}>
          <div className='p-4 flex items-center'>
            <div className='relative lg:ml-24 z-30'>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: 'spring' }}
                className='lg:text-4xl text-2xl text-shadow-black uppercase font-bold'>Your Favorite
                <span className='lg:text-5xl text-2xl gap-2 font-extrabold flex'>
                  <p className='text-[#2f36ab] text-shadow-blue'>Blockchain </p><p>Podcast</p>
                </span>
                IS Available Now</motion.h1>
              <p className='my-10 text-sm lg:mx-0 lg:text-xl z-30 text-shadow-white'>Podcast on tech and business made for Entrepreneurs</p>
              <a href={"https://www.buzzsprout.com/2252861"}
                className='rounded-full absolute -bottom-16 w-max flex items-center text-xl px-8 py-4 bg-[#2e840d]'>
                Listen Now
              </a>
            </div>
          </div>
          <div className='relative flex px-10 justify-center'>
            <Image className='absolute -right-6 -bottom-36 pb-10' src={"Home/Sound_Waves_icon.svg"} width={348} height={348} alt='blog' />
            <Image className='z-30 absolute right-14 lg:w-max w-20 lg:right-32 top-3' src={"Home/Headset_Mic.svg"} width={100} height={100} alt='blog' />
            <div className='relative flex justify-center items-center'>
              <Image className='z-20 w-72 lg:w-max' src={"/Home/Group_5.png"} width={506} height={660} alt='blog' />
              <div className="absolute flex items-center justify-center">
                <Image className='z-20 w-56 lg:w-max rounded-full' src={"/Home/Frame.png"} width={400} height={400} alt='blog' />
                <Image className='z-20 w-56 lg:w-max rounded-full absolute' src={"/Home/alvin_hero_section.PNG"} layout='fill' objectFit='cover' alt='blog' />
              </div>
            </div>
            {/* <Image className='absolute lg:-left-14 left-6 z-30 bottom-14 lg:bottom-24 w-64 lg:w-max' src={"Home/Horizontal_Music_Home.svg"} width={323} height={85} alt='blog' /> */}
          </div>
        </div>
        <div className='grid gap-6 relative justify-center'>
          <div className='flex flex-wrap text-shadow-white text-2xl lg:text-5xl font-extrabold justify-center gap-2 uppercase'>
            <p className='text-[#2f36ab]'>Stories</p>
            <p>that</p>
            <p className='whitespace-nowrap'>help you</p>
            <p className='whitespace-nowrap'> grow your</p>
            <p className='text-[#2e840d]'>mind</p>
          </div>
          <p className='text-center px-4'>Learn different use case of blockchain in different industry in every episode</p>
          <div className='grid justify-center z-10 lg:p-10 px-8 py-4 gap-2 lg:gap-8'>
            <div className='lg:flex grid gap-2 lg:gap-12'>
              <StoriesCards navigateTo={"https://www.buzzsprout.com/2252861/13698379"}
                srcImage={"/Home/Podcast/episode_1.svg"}
                width={530}
                height={140}
                alt={"Stories cards"} />
              <StoriesCards navigateTo={"https://www.buzzsprout.com/2252861/13797534"}
                srcImage={"/Home/Podcast/episode_3.svg"}
                width={530}
                height={140}
                alt={"Stories cards"} />
            </div>
            <div className='lg:flex grid gap-2 lg:gap-12'>
              <StoriesCards navigateTo={"https://www.buzzsprout.com/2252861/13761818"}
                srcImage={"/Home/Podcast/episode_2.svg"}
                width={530}
                height={140}
                alt={"Stories cards"} />
              <StoriesCards navigateTo={"https://www.buzzsprout.com/2252861/13843407"}
                srcImage={"/Home/Podcast/episode_4.svg"}
                width={530}
                height={140}
                alt={"Stories cards"} />
            </div>
          </div>
          <Image className='absolute left-0 lg:-left-20 lg:w-max w-44 -bottom-20 lg:-bottom-60' src={"Home/Sound_Waves.svg"} width={300} height={300} alt='blog' />
        </div>
      </div>

    </div >
  );
}

export default forwardRef(Home);

