import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";
import "./upgrade.css";
class upgradeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Cold Air Induction Kits",
          id: 1,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info:
            "GTR carries a full line of various brand cold air induction and intake kits for late-model Mustangs. From simple, yet effective, no-frills intake kits to chrome-plated or carbon-fiber induction kits with custom programed computer tuners. Adding a cold air intake will improve power output and also render improved fuel mileage--you get the best of both worlds! Cold air kits are one of the most popular upgrades we offer because they flat-out work! Best of all, most cold air kits can be installed in as little as 20 minutes with basic tools and many are 50 state smog-legal. Put this on the top of your list if more power is what you are after. Contact GTR to help choose which cold air intake is right for your Mustang!",
          benefits: [
            "Improves horsepower and torque output between 7-25 HP (depending on application)",
            "Improves gas mileage due to increased efficiency of engine",
            "Inlcudes re-usable, high-flow, lifetime air filter."
          ]
        },
        {
          name: "Performance Exhaust Systems",
          id: 2,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info: [
            "It is almost an unwritten rule that a Mustang must have a deep, powerful exhaust tone. Swapping out the wimpy stock exhaust part(s) in favor of a less restrictive, larger diameter exhaust system will not only wake up your Mustang with an authoratative growl, but also reward your ride with more power and torque. Furthermore, due to the improved efficiency levels, gas mileage will also be increased. A win-win situation.",
            "GTR carries numerous top-quality exhaust systems for Mustangs that offer a throaty sound and more power. GTR offers everything required to replace your stock exhaust in pieces or as a whole. Performance parts such as headers, H-Pipes, X-pipes, and muffler systems are all available to suit your performance needs and your budget.",
            "Contact GTR for help in choosing a winning exhaust combination for your Mustang."
          ],
          benefits: [
            "Improved horsepower, torque, and performance",
            "Improved gas mileage",
            "Deep, muscular, aggressive exhaust tone",
            "Available in high-quality, lifetime warranty stainless steel",
            'Many parts are easy "bolt-on" items and 50-state smog legal'
          ]
        },
        {
          name: "Performance Suspension & Chassis Parts",
          id: 3,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info: [
            "GTR offers a wide assortment of quality performance suspension and chassis upgrades for late-model Mustang. Everything your pony could ever want to improve its handling and stability is under our roof. Parts such as lowering springs, drag-racing springs, control arms, shocks and struts, bushings, caster/camber plates, subrame connectors, strut tower braces, etc...If you stop and think about it, the bassis of a high performance car, begins with the foundation, which is its suspension and chassis. In order to harness and control the power of a vehicle, you must be able to put that power down to the ground. Whether in a straight line or around corners, suspension and chassis play a huge part in making a Mustang gallop at full speed. GTR has years of experience testing high performance street and race suspension and chassis parts. We can help you choose a complete suspension to achieve your goals or give you sound technical information. Contact GTR for help in selecting your first or next suspension modification. Regardless of whether you need a complete suspension and chassis system or basic bushings, count on GTR for the best advice and service!"
          ],
          benefits: [
            "Greatly improve traction, grip and stability under performance driving conditions",
            "Better vehicle control leads to more driver confidence allowing you to drive harder and safer",
            "Specific upgrades available for street performance, road-racing, drag-racing or something in between",
            "Reduce or eliminate chassis and suspension flex or distortion for quicker steering response, better braking, flatter corner and just plain more fun!"
          ]
        },
        {
          name: "Differential Gears",
          id: 4,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info:
            "By far, one of the most popular modifications for Mustangers to do to their cars. Changing the differential (rear) gears allows much quicker acceleration. Installing performance differential gears allows the rear tires to rotate and spin at a faster rate, thereby accelerating the car faster. Significant drops in 0-60mph and 1/4 mile times will be seen, not to mention the fun-factor will be raised. The most popular gears for Mustangs are 3.55, 3.73, 3.90 and 4.10 gears, although others are available. GTR carries top quality, strong gear sets for V6 and V8 Mustangs along with all the necessary parts that are required for a complete installation, such as: installation kits, bearings, seals, axles, synthetic gear oil, friction modifier, speedometer calibrators, etc...If you are having a tough time figuring out which is the best gear ratio for you car, contact GTR's knowledgeable staff for suggestions.",
          benefits: [
            "Much improved acceleration and passing power",
            "Quicker quarter mile times and reduces lap times in competition",
            "The equivalent in performance as adding 30-40 horsepower"
          ]
        },
        {
          name: "Short-Throw Racing Shifters",
          id: 5,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info: [
            "One of the biggest complaints among Mustang enthusiasts is the factory stock shifter. In stock form, it feels vague, rubbery and the throws into gear are long and innacurate. Ever tried speed-shifting from 2nd to 3rd gear and not been able to hit the target? Or wost, end up losing a race because of the missed shift? If so, a short throw racing shifter is just what your Mustang's manual transmission needs. GTR carries several different brand of industry-leading short throw racing shifters to suit your needs and budget. All of them, including the value-minded shifters will be much stronger than the wimpy stock piece and offer more precise, accurate and shorter throws to help get your Stang in gear faster. Think about it: the less time you spend in between gears, the faster the car will accelerate! Short throw racing shifters are one of those rare upgrades that will have you wondering how you ever drove or raced your Mustang with the stock shifter. It truly changes the whole driving experience and rewards you with crisp, quick shifts. Contact a GTR representative for help in selecting a shifter that works for your pony."
          ],
          benefits: [
            "Increased durability and strength.",
            "Quick, accurate shifts--No more missed shifts!",
            "Affordable upgrade and easy installation in about an hour"
          ]
        },
        {
          name: "Underdrive Power Pulleys",
          id: 6,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info:
            "Underdrive power pulleys slow down engine-driven accessories (water pump, alternator, power steering, etc...) which reduces parasitic drag on the motor. This reduction on parasitic drag translates into extra horsepower that is freed, which gets transferred to the rear wheels. Normal gains for power pulleys are about 10 rear wheel horsepower and 10 lb.ft. torque! In addition, the motor is made more efficient by the power pulleys because of the saved power (remember that the engine doesn't have to work as hard), you will improve gas mileage too! Talk about a win-win upgrade. GTR High Performance carries power pulleys from MAC Products, BBK Performance, ASP, and STEEDA. Consult GTR to find out which is best for your Mustang.",
          benefits: [
            "Gain 10+ horsepower and torque",
            "Easy bolt-on that can be installed in about an hour",
            "Most Mustangs can re-use the stock/factory belt",
            "One of the best bang-for-the-buck modifications available for Mustangs!"
          ]
        },
        {
          name: "Performance Brake Upgrades",
          id: 7,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info:
            "GTR understands the need for more horsepower and faster acceleration, but we also understand that having the ability to slow down and stop your Mustang is even MORE important! The Mustang's stock braking system are, in many cases, inadequate for performance driving or heavy-usage. That is why GTR offers all the top name brand manufacturers in the brakes industry. Names such as Baer, Brembo, Powerslot, Hawk Racing, StopTech, etc...all make direct replacement brake parts to give your pony more stopping power. Whether you are looking for a simple, yet effective brake upgrade with brakes pads and replacment rotors, or you want to really take it up a notch or two with a big brake kit, such as those offered by Baer and Brembo, GTR has you covered. GTR can tailer a brake package desgined to fit your needs and budget to ensure you get the best possible combination for your hard-earned dollar. Contact us today and start enjoying greater stopping power and enhanced safety for your Mustang.",
          benefits: [
            "Much improved stopping power for better safety",
            "Easy bolt on brake parts and complete systems available for all Mustangs",
            "Performance brake parts for any budget, need or competition level",
            "Performance brake rotors and calipers give the car a sporty look"
          ]
        },
        {
          name: "Fuel System Upgrades",
          id: 8,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info:
            "Everybody knows that you can't make horsepower without fuel...it really is that simple. GTR High Performance carries a wide assortment of fuel system components to feed your beast. From high flow fuel pumps, to larger capacity fuel injectors to adjustable fuel pressure regulators to help fine-tune your Mustang's fuel demands, GTR has you covered. Not sure exactly how much fuel flow is required to optimize your current or future modifications, call us and put our vast experience to use. Having tested and installed virtually every fuel system upgrade on the market, we know what works best on Mustangs.",
          benefits: [
            "High flow fuel components support elevated horsepower levels",
            "High capacity fuel components prevent engine-destroying detonation",
            "Majority of items available in direct-replacement, bolt-on parts"
          ]
        },
        {
          name: "High Performance Cooling System Upgrades",
          id: 9,
          render: false,
          img: "assets/images/CAI_Cropped.jpg",
          info:
            "The importance of a high capacity cooling system for your Mustang's engine shoulde be obvious. The more horsepower an engine creates, the more heat an engine will also create. The increase in an engine's heat requires a high performance cooling system to avoid engine damaging overheating problems. GTR carries everything your Mustang needs to run cool even in the dead of summer and when being driven hard. From Fluidyne aluminum racing radiators to low-temperature thermostats to high flow water pumps, GTR has it. All performance cooling parts GTR carries are direct replacement, and bolt on to their stock, factory counterpart. Ask a GTR representative if you need help choosing cooling parts that will best fit your needs.",
          benefits: [
            "High flow, high capacity cooling system parts help prevent engine-killing overheating conditions",
            "Allow continuous hard-driving, even under the most extreme racing conditions or bumper-to-bumper driving",
            "Many cooling system upgrades available to cool down any horsepower level from mild to wild"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <main id="exp-main">
        <Container fluid>
          {this.state.items.map(item => (
            <Row className="exp-row">
              <Col lg={9}>
                <Jumbotron className="exp-jumbo">
                  <h2>{item.name}</h2>

                  <div className="exp-images-div">
                    <Image src={item.img} className="exp-images" />
                  </div>

                  <div className="exp-benefits-div" key={item.id}>
                    <h3>Benefits: </h3>

                    <ul>
                      {item.benefits.map(benefit => (
                        <li>{benefit}</li>
                      ))}
                    </ul>
                    {item.render && <p className="exp-info">{item.info}</p>}
                  </div>
                  <div className="exp-button-div">
                    <Button>More Info</Button>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          ))}
        </Container>
      </main>
    );
  }
}

export default upgradeInfo;
