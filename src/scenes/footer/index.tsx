import Logo from "../../assets/img/logoz.png";
import FooterProp from "./FooterProp";

const Footer = () => {
  const currDate = new Date().getFullYear().toString()
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
              <img alt="logo" src={Logo}/>
              <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi officiis fugiat suscipit, est commodi quia tempore id error dolorem corporis neque, veritatis qui molestias ex perspiciatis similique quidem quaerat? Error.</p>
              <FooterProp currDate={currDate} />
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
             <h4 className="font-bold">Links</h4>
             <p className="my-5">Massa Orsi Selectus</p>
             <p className="my-5">sit amet consectetur</p>
             <p>Fugit vel, ratione.</p>
            </div>
            <div>
            <div className="mt-16 basis-1/4 md:mt-0">
             <h4 className="font-bold">Contact Us</h4>
             <p className="my-5">distinctio quam corrupti suscipit, eaque consequatur.</p>
             <p>(+234)810-3895-2241</p>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer