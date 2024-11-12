import React from 'react'
import SocialIcons from './SocialIcons'
import { ReactComponent as MailIcon} from "../../assets/svg/mail.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svg/smartphone.svg";
import { ReactComponent as BirthdayIcon } from "../../assets/svg/celebration.svg";
import { ReactComponent as LocationIcon } from "../../assets/svg/location.svg";
import { ReactComponent as LinkedINIcon } from "../../assets/svg/linkedin.svg";
import { SocialIconsProps } from '../../interface';


function SocialInfo() {

    const socialIconsData: SocialIconsProps[] = [
        {
          title: "EMAIL",
          icon: MailIcon,
          data: "kannanvishalac@gmail.com",
        },
        {
          title: "PHONE",
          icon: PhoneIcon,
          data: "+91 8754881911",
        },
        {
          title: "BIRTHDAY",
          icon: BirthdayIcon,
          data: "September 12, 2001",
        },
        {
          title: "LOCATION",
          icon: LocationIcon,
          data: "Namakkal, TamilNadu, India",
        },
        {
          title: "LINKEDIN",
          icon: LinkedINIcon,
          data: "https://www.linkedin.com/in/kannan-ac",
        },
      ];
      
      return (
        <div>
          {socialIconsData.map((data, index) => (
            <SocialIcons key={index} data={data.data} title={data.title} icon={data.icon} />
          ))}
        </div>
      );
}

export default SocialInfo