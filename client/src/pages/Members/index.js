import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./members.css";
import Gonz from "../../components/Members/Gonz/index.js";
import Ric from "../../components/Members/Ric/index.js";
import Eli from "../../components/Members/Eli/index.js";
import Chris from "../../components/Members/Chris/index.js";
import Dave from "../../components/Members/Dave/index.js";
import Josh from "../../components/Members/Josh/index.js";
import Fade from "react-reveal/Fade";

const Members = () => {
  return (
    <main id="staffContainer">
      <Container id="members-container">
        <Row id="members-row-one">
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Gonz />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Ric />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Eli />
            </Fade>
          </Col>
        </Row>
        <Row id="members-row-two">
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Chris />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Dave />
            </Fade>
          </Col>
          <Col lg="4" className="members-spacing">
            <Fade clear>
              <Josh />
            </Fade>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

// const memberData = [
//   {
//     name: `Gonzalo Topete`,
//     id: 1,
//     title: `President and Co-Founder of GTR High`,
//     background: `Bachelor of Science Business Administration, University of California, Riverside, 1997.`,
//     hobbies: `Microsoft X-Box & sports.`,
//     food: `Anything his wife, Lauri, makes.`,
//     rides: [
//       `2006 Mustang GT Vortech Intercooled Supercharged (465 RWHP)`,
//       `1989 Mustang 5.0 LX, 1999 Camaro Z-28 (Yes, a Camaro?!)`,
//       `2007 Tahoe`
//     ],
//     show: false
//   },
//   {
//     name: `Ricardo Topete`,
//     id: 2,
//     title: `Vice-President and Co-Founder of GTR High`,
//     background: ` Bachelor of Science Business Administration, University of California, Riverside, 1997. A.S.E Certified: A1 Engine Repair, A8 Engine Performance, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Braking Systems.`,
//     hobbies: `Spending time with family, Traveling, Bicycling, Cruising in Mustangs & making horsepower!`,
//     food: `Any dead and cooked animal is fair game`,
//     rides: [
//       `2001 Mustang GT Paxton Supercharged`,
//       `1994 SVT Cobra Vortech Supercharged (sold)`,
//       `1992 Mustang GT (sold)`,
//       `1964 1/2 Mustang 289`,
//       `2005 Ford F-150 SuperCrew`,
//       `2006 Infiniti G35 Coupe`,
//       `Ricardo doesn't know the meaning of "factory stock.`
//     ]
//   },
//   {
//     name: `Elisseos Patronas`,
//     id: 3,
//     title: `Sales Associate/ Customer Service / Installer`,
//     background: `Started with GTR in 2002. In charge of shipping/receiving, fulfilling sales orders and parts sales in store. Eli ensures that your orders arrives accurately and promptly. Eli lends a hand in the shop and installs parts on a regular basis. Eli's hands-on experience is an advantage to you, our customer.`,
//     hobbies: `Family, skateboarding, gym.`,
//     food: `Gyros, lowfat yogurt & cottage cheese.`,
//     rides: [
//       `2000 Mustang GT Paxton Intercooled Supercharged`,
//       `94 Mustang GT`,
//       `99 Mustang GT`,
//       `2000 Mustang GT (current)`,
//       `He has so many speeding tickets, we call him "Ticket-Master".`
//     ]
//   },
//   {
//     name: `Chris Balster`,
//     id: 4,
//     title: `Technician/Installer`,
//     background: `Universal Technical Institute graduate, 2005. Ford FACT graduate, 2006. A.S.E. certified Master Mechanic, A1 Engine Repair, A2 Automatic Transmission, A3 Manual Drivetrains, A4 Suspension & Steering, A5 Brakes, A6 Electronic Systems, A7 Heating & Air Conditioning, A8 Engine Performance.`,
//     hobbies: `Fishing.`,
//     food: `Vietnamese Food.`,
//     rides: [`93 Ford F-350 460 Big Block`, `Ford Explorer`, `Toyota Truck`]
//   },
//   {
//     name: `Dave Chamberlain`,
//     id: 5,
//     title: `Technician/Installer`,
//     background: `Started with GTR in 2006. Specializes in 5.0 Mustangs and truck performance. Was owner/operator of Dave's Custom Motorsports (Upland, Ca) 1992-1996.`,
//     hobbies: `Las Vegas and sleeping.`,
//     food: `Chili cheese fries at The Hat.`,
//     rides: [
//       `06 Chrysler 300C SRT8`,
//       `96 Chevy Impala SS`,
//       `04 Chevy Truck 2500`,
//       `1986 Mustang GT (previous)`,
//       `1989 Mustang 5.0. (previous)`
//     ]
//   },
//   {
//     name: `Josh Felton`,

//     id: 6,
//     title: `Marketing/Advertising/Web Site/Photography`,
//     background: `Started working with GTR in 2002. Designs, updates, and maintains advertisements in magazines, web site, and promotional media such as calendars, flyers, brochures, etc...`,
//     hobbies: `Family, and apparently, work.`,
//     food: `Anything the majority of North Americans consider food is fine by me.
//        `,
//     rides: [`2005 Dodge Magnum RT`, `2005 Ford F-150 FX4 SuperCrew`]
//   }
// ];

export default Members;
