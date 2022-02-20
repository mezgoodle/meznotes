import Link from "next/link";
import Image from "next/image";
import icon from "../assets/add.svg";

const AddButton = () => {
  return (
    <Link href="note/new">
      <a className="floating-button">
        <Image src={icon} alt="Hello" />
      </a>
    </Link>
  );
};

export default AddButton;
