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
                <div className={`lg:flex grid lg:items-end justify-center lg:justify-between gap-10`}>
                    <div className={`grid gap-6`}>
                        <div className='flex justify-center'>
                            <Image height={180} width={180}
                                onClick={() => handleScrollToSection("homeRef")}
                                src={"/Footer/Footer_Logo.png"} alt='logo' />
                        </div>
                        <div className='flex justify-center'>
                            <p className='w-64 text-center text-sm'>Podcast on tech and business made for Entrepreneurs</p>
                        </div>
                        <div className='flex justify-center items-center flex-wrap gap-7'>
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://www.facebook.com/BlockchainforExecutives"} srcImage={"/Footer/Facebook_logo.svg"} alt={"fb"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://twitter.com/BlockForExec"} srcImage={"/Footer/TwitterX_logo.svg"} alt={"twitter"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://www.instagram.com/blockchainforexecutives"} srcImage={"/Footer/Instagram_logo.svg"} alt={"Instagram"} />
                            <SocialMediaIcons width={25} height={25} navigateTo={"https://www.tiktok.com/@blockchainforexecutives"} srcImage={"/Footer/Tiktok_icon.svg"} alt={"tiktok"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://www.youtube.com/channel/UC1PgxSpIp3oUoLvppwbra3g"} srcImage={"/Footer/Youtube_logo.svg"} alt={"Yt"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://www.linkedin.com/company/blockchain-for-executives"} srcImage={"/Footer/Linkedin_logo.svg"} alt={"linkedin"} />
                        </div>
                    </div>
                    <div className='grid gap-3 justify-center mx-2'>
                        <p>Listen to episodes on your fav platform:</p>
                        <div className='flex gap-5'>
                            <SocialMediaIcons width={150} height={22} srcImage={"/Footer/spotify.svg"} alt={"Spotify"} />
                            <SocialMediaIcons width={150} height={22} srcImage={"/Footer/youtube.svg"} alt={"Youtube"} />
                            <SocialMediaIcons width={150} height={22} srcImage={"/Footer/amazon_music.svg"} alt={"Amazon Music"} />
                        </div>
                        <div className='grid gap-3'>
                            <div className='flex gap-5'>
                                <SocialMediaIcons width={150} height={22} srcImage={"/Footer/podchaser.svg"} alt={"Podchaser"} />
                                <SocialMediaIcons width={150} height={22} srcImage={"/Footer/deezer.svg"} alt={"Deezer"} />
                                <SocialMediaIcons width={150} height={22} srcImage={"/Footer/player_fm.svg"} alt={"Player FM"} />
                            </div>
                            <div className='flex gap-5'>
                                <SocialMediaIcons width={150} height={22} srcImage={"/Footer/podcast_index.svg"} alt={"Podcast Index"} />
                                <SocialMediaIcons width={150} height={22} srcImage={"/Footer/podcast_addict.svg"} alt={"Podcast Addict"} />
                                <SocialMediaIcons width={150} height={22} srcImage={"/Footer/pocket_casts.svg"} alt={"Pocket Casts"} />
                            </div>
                            <div className='flex gap-5'>
                                <SocialMediaIcons width={150} height={22} srcImage={"/Footer/listen_notes.svg"} alt={"Listen Notes"} />
                                {/* <SocialMediaIcons navigateTo={"#"} width={150} height={22} srcImage={"/Footer/rss_feed.svg"} alt={"RSS Feed"} /> */}
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
