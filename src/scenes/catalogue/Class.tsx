
interface Props  {
    name: string;
    description?: string;
    image: string;
}

const Class = ({name, description, image}: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-secondary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className="mx-5 relative inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img alt={`$image`} className="rounded-md" src={image} />
    </li>
  )
}

export default Class