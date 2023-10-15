import Image from 'next/image';
import SocialMediaIcons from '@/helpers/SocialMediaIcons';
import Link from 'next/link';

const Footer = ({ setViewPort }) => {
    const handleScrollToSection = (reference) => {
        setViewPort(reference)
    }

    return (
        <div className='border-t relative bg-[#11111b]'>
            <Image className='absolute bottom-0' height={1500} width={1500} src={"/Footer/Looper_bg.svg"} alt='bg' />
            <div className='grid lg:mx-28 pt-10 lg:py-32'>
                <div className={`lg:flex grid lg:items-end justify-center lg:justify-between`}>
                    <div className={`grid gap-6`}>
                        <div className='flex justify-center'>
                            <Image height={180} width={180}
                                onClick={() => handleScrollToSection("homeRef")}
                                src={"/Footer/Footer_Logo.png"} alt='logo' />
                        </div>
                        <div className='flex justify-center'>
                            <p className='w-64 text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='flex justify-center flex-wrap gap-6'>
                            <SocialMediaIcons width={28} height={28} navigateTo={"/"} srcImage={"/Footer/Facebook_logo.svg"} alt={"fb"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"/"} srcImage={"/Footer/Instagram_logo.svg"} alt={"Instagram"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"/"} srcImage={"/Footer/Tiktok_icon.svg"} alt={"tiktok"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"/"} srcImage={"/Footer/Youtube_logo.svg"} alt={"Yt"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"/"} srcImage={"/Footer/Linkedin_logo.svg"} alt={"linkedin"} />
                        </div>
                    </div>
                    <div className='grid gap-2 justify-center'>
                        <p>Listen to episodes on your fav platform:</p>
                        <div className='flex gap-6'>
                            <SocialMediaIcons navigateTo={"#"} width={100} height={20} srcImage={"/Footer/Google_Podcast_logo.svg"} alt={"Google"} />
                            <SocialMediaIcons navigateTo={"#"} width={100} height={20} srcImage={"/Footer/Spotify_Text_logo.svg"} alt={"Spotify"} />
                            <SocialMediaIcons navigateTo={"#"} width={100} height={20} srcImage={"/Footer/Youtube_Text_logo.svg"} alt={"Youtube"} />
                        </div>
                        <div className='grid gap-4'>
                            <div className='flex gap-6'>
                                <SocialMediaIcons navigateTo={"#"} width={94} height={22} srcImage={"/Footer/Horizontal_path.svg"} alt={"Extra"} />
                                <SocialMediaIcons navigateTo={"#"} width={94} height={22} srcImage={"/Footer/Horizontal_path.svg"} alt={"Extra"} />
                                <SocialMediaIcons navigateTo={"#"} width={94} height={22} srcImage={"/Footer/Horizontal_path.svg"} alt={"Extra"} />
                            </div>
                            <div className='flex gap-6'>
                                <SocialMediaIcons navigateTo={"#"} width={94} height={22} srcImage={"/Footer/Horizontal_path.svg"} alt={"Extra"} />
                                <SocialMediaIcons navigateTo={"#"} width={94} height={22} srcImage={"/Footer/Horizontal_path.svg"} alt={"Extra"} />
                                <SocialMediaIcons navigateTo={"#"} width={94} height={22} srcImage={"/Footer/Horizontal_path.svg"} alt={"Extra"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-gray-500 border-t text-sm mt-10 mx-6 lg:mx-32 py-10'>©2023 Blockchain For Executives, All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
