import { SelectedPage, ClassType } from "../../shared/types";
import image1 from "../../assets/img/img1.png";
import image2 from "../../assets/img/img2.png";
import image3 from "../../assets/img/img3.png";
import image4 from "../../assets/img/img4.png";
import image5 from "../../assets/img/img5.png";
import image6 from "../../assets/img/img6.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Grills and bbq",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae numquam repellendus eligendi ad sed!",
    image: image1,
  },
  {
    name: "Delicious Pastries",
    image: image2,
  },
  {
    name: "Cupcakes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae numquam repellendus eligendi ad sed!",
    image: image3,
  },
  {
    name: "Buffet Services",
    image: image4,
  },
  {
    name: "More Pastries",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae numquam repellendus eligendi ad sed!",
    image: image5,
  },
  {
    name: "All kinds of cake",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae numquam repellendus eligendi ad sed!",
    image: image6,
  },
]


interface Props  {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="catalogue" className="w-full bg-primary-100 py-40">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Catalogue)}
        >
            <motion.div
              className="mx-auto w-5/6"
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.5, duration: 0.5}}
              variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1, x:0},
              }} >
                <div className="md:w-3/5">
                    <HText>Catalogue</HText>
                    <p className="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur minus eius cupiditate enim nam provident. Enim, natus quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, optio?</p>
                </div>
              </motion.div>
              <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
                <ul className="w-[2800px] whitespace-nowrap">
                  {classes.map((item: ClassType, index) => (
                    <Class 
                      key={`${item.name}-${index}`}
                      name={item.name}
                      description={item.description}
                      image={item.image}
                      />
                  ))}
                </ul>
              </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;