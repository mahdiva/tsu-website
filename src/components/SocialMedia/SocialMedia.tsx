import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SocialMediaIcon } from "./SocialMedia.styles";

export enum SocialMediaColor {
  Green = "Green",
  Gradient = "Gradient",
  Black = "Black",
}

interface SocialMediaProps {
  color: SocialMediaColor;
  link: string;
  icon: IconDefinition;
}

const SocialMedia = (props: SocialMediaProps) => {
  return (
    <SocialMediaIcon color={props.color} href={props.link}>
      <FontAwesomeIcon icon={props.icon} size="3x" />
    </SocialMediaIcon>
  );
};

export default SocialMedia;
