import React, { Component } from "react";
import GonzImg from "../../images/Gonz.jpeg";
import RicImg from "../../images/Ric.jpg";
import EliImg from "../../images/Eli.jpg";
import ChrisImg from "../../images/Chris.jpg";
import DaveImg from "../../images/Dave.jpg";
import JoshImg from "../../images/Josh.jpg";
import "./history.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const members = [
      {
        name: `Gonzalo Topete`,
        image: GonzImg,
        title: `President and Co-Founder of GTR High`,
        background: `Bachelor of Science Business Administration, University of California, Riverside, 1997.`,
        hobbies: `Microsoft X-Box & sports.`,
        food: `Anything his wife, Lauri, makes.`,
        rides: `Vortech Intercooled Supercharged 2006 Mustang GT (465 RWHP), 1989 Mustang 5.0 LX, 1999 Camaro Z-28 (Yes, a Camaro?!), 2007 Tahoe.`
      },
      {
        name: `Ricardo Topete`,
        image: RicImg,
        title: `Vice-President and Co-Founder of GTR High`,
        background: ` Bachelor of Science Business Administration, University of California, Riverside, 1997. A.S.E Certified: A1 Engine Repair, A8 Engine Performance, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Braking Systems.`,
        hobbies: `Spending time with family, Traveling, Bicycling, Cruising in Mustangs & making horsepower!`,
        food: `Any dead and cooked animal is fair game`,
        rides: `Paxton Supercharged 2001 Mustang GT, Vortech Supercharged 1994 SVT Cobra (sold), 1992 Mustang GT (sold), 1964 1/2 Mustang 289, 2005 Ford F-150 SuperCrew, 2006 Infiniti G35 Coupe. (Ricardo doesn't know the meaning of "factory stock").`
      },
      {
        name: `Elisseos Patronas`,
        image: EliImg,
        title: `Sales Associate/ Customer Service / Installer`,
        background: `Started with GTR in 2002. In charge of shipping/receiving, fulfilling sales orders and parts sales in store. Eli ensures that your orders arrives accurately and promptly. Eli lends a hand in the shop and installs parts on a regular basis. Eli's hands-on experience is an advantage to you, our customer.`,
        hobbies: `Family, skateboarding, gym.`,
        food: `Gyros, lowfat yogurt & cottage cheese.`,
        rides: `Paxton Intercooled Supercharged 2000 Mustang GT. Has owned 5 Mustangs: 2 5.0 Mustang GT's, a 94 Mustang GT, a 99 Mustang GT and his current 2000 GT. He has so many speeding tickets, we call him "Ticket-Master".`
      },
      {
        name: `Chris Balster`,
        image: ChrisImg,
        title: `Technician/Installer`,
        background: `Universal Technical Institute graduate, 2005. Ford FACT graduate, 2006. A.S.E. certified Master Mechanic, A1 Engine Repair, A2 Automatic Transmission, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Brakes, A6 Electronic Systems, A7 Heating & Air Conditioning, A8 Engine Performance.`,
        hobbies: `Fishing.`,
        food: `Vietnamese Food.`,
        rides: `93 Ford F-350 460 big block, Ford Explorer, Toyota truck.`
      },
      {
        name: `Dave Chamberlain`,
        image: DaveImg,
        title: `Technician/Installer`,
        background: `Started with GTR in 2006. Specializes in 5.0 Mustangs and truck performance. Was owner/operator of Dave's Custom Motorsports (Upland, Ca) 1992-1996.`,
        hobbies: `Las Vegas and sleeping.`,
        food: `Chili cheese fries at The Hat.`,
        rides: `06 Chrysler 300C SRT8, 96 Chevy Impala SS, 04 Chevy Truck 2500. Previously owned 1986 Mustang GT & 1989 Mustang 5.0.`
      },
      {
        name: `Josh Felton`,
        image: JoshImg,
        title: `Marketing/Advertising/Web Site/Photography`,
        background: `Started working with GTR in 2002. Designs, updates, and maintains advertisements in magazines, web site, and promotional media such as calendars, flyers, brochures, etc...`,
        hobbies: `Family, and apparently, work.`,
        food: `Anything the majority of North Americans consider food is fine by me.
        `,
        rides: `2005 Dodge Magnum RT, 2005 Ford F-150 FX4 SuperCrew.
        `
      }
    ];

    return (
      <div id="historyContainer">
        {members.map(member => (
          <div id="cardContainer">
            <img id="portrait" src={member.image} alt="portrait" />
            <p className="spanCard">
              <span style={{ fontWeight: `bold` }}>Name: </span>
              {member.name}
            </p>
            <p className="spanCard">
              <span style={{ fontWeight: `bold` }}>Title {member.title}</span>
            </p>
            <p className="spanCard">
              <span style={{ fontWeight: `bold` }}>Background: </span>
              {member.background}
            </p>
            <p className="spanCard">
              <span style={{ fontWeight: `bold` }}>Hobbies: </span>
              {member.hobbies}
            </p>
            <p className="spanCard">
              <span style={{ fontWeight: `bold` }}>Food: </span>
              {member.food}`
            </p>
            <p className="spanCard">
              <span style={{ fontWeight: `bold` }}>Rides: </span>
              {member.rides}`
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default History;
