import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-4">
            <SingleInfo text="RaynaldoFrancis@outlook.com" Image={HiOutlineMail} />
            {/*<SingleInfo text="1-800-Raynaldo" Image={FiPhone} />*/}
            <SingleInfo text="New York, NY" Image={IoLocationOutline} />
        </div>
    );
};

export default ContactInfo;