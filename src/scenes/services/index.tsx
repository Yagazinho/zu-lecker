import { BoltIcon, TruckIcon, BanknotesIcon } from "@heroicons/react/20/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Services";
import BenefitsPageGraphic from "../../assets/img/heroimg.png";
import ActionButton from "../../shared/ActionButton";

interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
        icon: <BoltIcon className="w-6 h-6"/>,
        title: "Super fast delivery",
        description: "vero ratione repellat ipsa? Voluptatibus porro inventoreab aut molestias dolorum corporis voluptate dolor architecto nisi quisquam autem.",
    },
    {
        icon: <BanknotesIcon className="w-6 h-6"/>,
        title: "Pocket friendly transactions",
        description: "libero vel inventore. Dignissimos unde cum maiores laudantium officia incidunt, atque reprehenderit provident quis eum.",
    },
    {
        icon: <TruckIcon className="w-6 h-6"/>,
        title: "Nationwide Distribution",
        description: "mollitia fuga harum, quis expedita delectus ut quod nesciunt quaerat vel adipisci ab! Asperiores nam eligendi voluptatem optio",
    },
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
     id="services"
     className="mx-auto min-h-full w-5/6 py-20"  
    >
     <motion.div
     onViewportEnter={() => setSelectedPage(SelectedPage.Services)}     
     >
        {/* header */}
      <motion.div
       initial='hidden'
       whileInView='visible'
       viewport={{once: true, amount: 0.5}}
       transition={{delay:0.5, duration: 0.5}}
       variants={{
         hidden: {opacity:0, x: -50},
         visible: {opacity:1, x:0},
       }} >
        <HText>Our Services</HText>
        <p className="my-5 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, voluptatem iure? Quam quaerat eaque similique beatae asperiores. Omnis odit sunt, ullam repudiandae fugit asperiores vel deleniti cumque quis! Adipisci, veritatis?</p>
      </motion.div>

      {/* benefits */}
      <motion.div 
      className="md:flex items-center justify-between gap-8 mt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount:0.5}}
      variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              title={benefit.title}
              setSelectedPage={setSelectedPage} />
        ))}
      </motion.div>

       {/* Graphics and Description */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
        {/* graphic */}
        <img 
         className="mx-auto"
         src={BenefitsPageGraphic} 
         alt="benefits-page-graphic" />
        {/* description */}
        <div>
           {/* Title */}
           <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.5, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x: -50},
                  visible: {opacity:1, x:0},
                }}
                >
                <HText>
                  Where Every Dish Tells a Story - Your Culinary Odyssey{" "} <span className="text-primary-500">Begins Now</span>
                </HText>
              </motion.div>
            </div>
           </div>
            {/* Desc */}
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.22, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x: 50},
                  visible: {opacity:1, x:0},
                }}>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est sed, natus blanditiis recusandae adipisci perferendis placeat distinctio sunt? Reiciendis, incidunt quas. Nemo, nam minus suscipit fugiat culpa minima nobis itaque vel provident incidunt debitis est magnam eveniet repellendus deleniti ex eaque omnis quo tempore vitae odio dolor quas illum dignissimos! Harum veniam minima dolorem!.</p>

                <p className="mb-5">Nemo, nam minus suscipit fugiat culpa minima nobis itaque vel provident incidunt debitis est magnam eveniet repellendus deleniti ex eaque omnis quo tempore vitae odio dolor quas illum dignissimos! Harum veniam minima dolorem!</p>
              </motion.div>
          {/* Button */}
            <div className="relative mt-16">
               <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                 Order
                </ActionButton>
               </div>
            </div>
        </div>
      </div>
     </motion.div>
    </section>
  )
}

export default Benefits