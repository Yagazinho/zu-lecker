interface Prop  {
    currDate: string;
}

const FooterProp = ({currDate}: Prop) => {
  return (
    <p>&copy; {currDate} All Rights Reserved</p>
  )
}

export default FooterProp