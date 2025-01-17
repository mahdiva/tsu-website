import { ApplicationContent } from "./ApplySection.styles";

type ApplySectionProps = {
  role: string;
  description: string;
  status: string;
  applicationLink: string;
  closedStatus: string;
};

const ApplySection = (props: ApplySectionProps) => (
  <ApplicationContent data-aos="fade-down" data-aos-duration="1000">
    <li>
      <h2>{props.role}</h2>
      <p>{props.description}</p>
    </li>
    {props.status === "open" ? (
      <a href={props.applicationLink} target="_blank">
        <button className="applyPage__btn">Apply Now</button>
      </a>
    ) : (
      <h4 className="applyPage__closed">{props.closedStatus}</h4>
    )}
  </ApplicationContent>
);
export default ApplySection;
