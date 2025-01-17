import { highlightedEvents, pastEvents } from "./EventInformation";
import Event from "./Event/Event";
import * as S from "./EventsSection.styles";

const EventsSection = () => {
  return (
    <S.EventsSectionContainer>
      <p className="regularText" style={{ marginBottom: "10%" }}>
        Every semester, Tech Start UCalgary organizes and hosts a range of
        events, both online and on campus. We cover a wide array of topics, from
        technical workshops to panel discussions with successful entrepreneurs
        to interviews with industry leaders. If you're interested in the
        intersection of technology and startups, make sure to follow our social
        media and sign up for our upcoming events! Almost all events are open to
        the public - no club membership is required!
      </p>

      <S.EventsContainer pastEvent={false} style={{ textAlign: "left" }}>
        {highlightedEvents.map((event, i) => {
          return (
            <Event
              key={i}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              image={event.image}
              link={event.link}
              pastEvent={false}
            />
          );
        })}
      </S.EventsContainer>

      <h2
        className="thiccSubheading"
        style={{ marginTop: "5%", marginBottom: "0%" }}
      >
        Check out events we've hosted in the past:
      </h2>

      <S.EventsContainer pastEvent={true}>
        {pastEvents.map((event, i) => {
          return (
            <Event
              key={i}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              image={event.image}
              link={event.link}
              pastEvent={true}
            />
          );
        })}
      </S.EventsContainer>
    </S.EventsSectionContainer>
  );
};

export default EventsSection;
