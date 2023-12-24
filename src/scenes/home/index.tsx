import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../../shared/ActionButton';
import { SelectedPage } from '../../shared/types';
import HomePageText from '../../assets/img/homepagetextz.png';
import HomeCake from '../../assets/img/homecake1.png';
import SponsorRedBull from '../../assets/img/SponsorRedBull.png';
import SponsorForbes from '../../assets/img/SponsorForbes.png';
import SponsorSamsung from '../../assets/img/samsung.png';
import SponsorBinance from '../../assets/img/bsc.png';
import SponsorDell from '../../assets/img/dell.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

interface Props  {
    setSelectedPage: (value:SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return <section
  id='home'
  className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
  >
{/* image and main header */}
<motion.div 
  className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
  onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
  {/* main header */}
  <div className='z-10 mt-32 md:basis-3/5'>
    {/* Headings */}
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once: true, amount: 0.5}}
    transition={{delay:0.5, duration: 0.5}}
    variants={{
      hidden: {opacity:0, x: -50},
      visible: {opacity:1, x:0},
    }} 
    className='md:-mt-20'>
      <div className='relative'>
        <div className='before:absolute before:-top-10 before:-left-20 before:z-[-1] md:before:content-zuleckertext'>
          <img alt='Home-page-text' src={HomePageText} />
        </div>
      </div>
      <p className='mt-8 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eum dolores odio nulla minus delectus enim ratione reprehenderit tempora rem deserunt, placeat voluptates dolorem ex incidunt et fuga molestias eos?</p>
    </motion.div>
    {/* Actions */}
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{once: true, amount: 0.5}}
    transition={{ delay:0.5, duration: 0.5}}
    variants={{
      hidden: {opacity:0, x: -50},
      visible: {opacity:1, x:0},
    }}
       className='mt-8 flex items-center gap-8 md:justify-start'>
      <ActionButton setSelectedPage={setSelectedPage}>Order</ActionButton>
      <AnchorLink
      className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  </div>

  {/* image */}
  <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
    <img alt='home-pageGraphic' src={HomeCake} />
  </div>
</motion.div>
{/* sponsors */}
{isAboveMediumScreens && (
  <div className='h-[150px] w-full bg-primary-100 py-10'>
    <div className='mx-auto w-5/6'>
      <div className='flex w-3/5 items-center justify-between gap-8'>
        <img alt='binance-spnsor' src={SponsorBinance} />
        <img alt='dell-spnsor' src={SponsorDell} />
        <img alt='redbull-spnsor' src={SponsorRedBull} />
        <img alt='samsung-spnsor' src={SponsorSamsung} />
        <img alt='forbes-spnsor' src={SponsorForbes} />
      </div>
    </div>
  </div>
)}
  </section>
}

export default Home;