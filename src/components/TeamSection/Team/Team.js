import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Profile from './Profile/Profile';
import './Team.css';

const Team = props => {

    const [containerState] = useState({
        members: props.teamMembers // array of objects
    });

    /**
     * The following if conditions are for setting the layout of the team section
     * according to the number of members for a default screen width.
     */
    let containerClasses = ["Container"]; // default layout of members
    if (containerState.members.length === 4) containerClasses.push("Container--size4");
    else if (containerState.members.length === 7) containerClasses.push("Container--size7");
    else if (containerState.members.length === 8) containerClasses.push("Container--size8");
    else if (containerState.members.length === 10) containerClasses.push("Container--size10");

    return (
        props.defaultView === true ?
            <div className={containerClasses.join(' ')}>
                {
                    containerState.members.map((member, i) => {
                        return (
                            <Profile
                                key={i}
                                member={member}
                                class={`Profile--${containerState.members.length}`}
                                col={containerState.members.length}
                                profilePic={member.image}
                                alt={[`member_${i}`]}
                            />
                        );
                    })
                }
            </div>
            :
            <Carousel className="Carousel">
                {containerState.members.map((member, i) =>
                    <Profile
                        className="Profile"
                        key={i}
                        member={member}
                        class={`Profile-${containerState.members.length}`}
                        col={containerState.members.length}
                        carouselView={true}

                        profilePic={member.image}
                        alt={[`member_${i}`]}
                    />)}
            </Carousel>
    );
};

export default Team;