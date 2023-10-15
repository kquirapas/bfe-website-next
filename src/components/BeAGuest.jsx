import { forwardRef } from 'react';
import Image from 'next/image';
import BeAGuestCards from '@/helpers/BeAGuestCards';

const BeAGuest = ({ title }, ref) => {

  return (
    <div ref={ref}>
      <div className='grid gap-12 pb-32 lg:pb-96 max-w-screen-xl mx-auto relative justify-center'>
        <Image className='absolute bottom-0 -right-24' src={"/BeAGuest/Logo.svg"} width={600} height={700} alt='about' />
        <Image className='absolute -bottom-96 -right-24' src={"/BeAGuest/Polygon_left.svg"} width={400} height={400} alt='about' />
        <p className='uppercase text-center font-bold text-2xl lg:text-5xl'>Start Listening leading to our podcast link or buzzsprout</p>
        <p className='text-center mx-2 lg:mx-52'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        <div className='flex flex-wrap justify-center lg:mx-32 gap-4'>
          <BeAGuestCards navigateTo={"#"} text="Web" imageSource="/BeAGuest/web.svg" />
          <BeAGuestCards navigateTo={"#"} text="RSS Feed" imageSource="/BeAGuest/rss-feed.svg" />
          <BeAGuestCards navigateTo={"#"} text="Apple Podcasts" imageSource="/BeAGuest/apple-podcast.svg" />
          <BeAGuestCards navigateTo={"#"} text="Google Podcasts" imageSource="/BeAGuest/google-podcast.svg" />
          <BeAGuestCards navigateTo={"#"} text="Ivoox" imageSource="/BeAGuest/ivoox.svg" />
          <BeAGuestCards navigateTo={"#"} text="Spotify" imageSource="/BeAGuest/spotify.svg" />
          <BeAGuestCards navigateTo={"#"} text="Youtube" imageSource="/BeAGuest/youtube.svg" />
        </div>
      </div>

    </div>
  );
}

export default forwardRef(BeAGuest);

