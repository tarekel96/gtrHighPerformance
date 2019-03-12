import React from "react";

const upgradeInfo = () => {
  const items = [
    {
      name: "Cold Air Induction Kits",
      id: 1,
      img: "",
      info: [
        "GTR carries a full line of various brand cold air induction and intake kits for late-model Mustangs.",
        "From simple, yet effective, no-frills intake kits to chrome-plated or carbon-fiber induction kits with custom programed computer tuners., Adding a cold air intake will improve power output and also render improved fuel mileage--you get the best of both worlds! Cold air kits are one of the most popular upgrades we offer because they flat-out work! Best of all, most cold air kits can be installed in as little as 20 minutes with basic tools and many are 50 state smog-legal. Put this on the top of your list if more power is what you are after. Contact GTR to help choose which cold air intake is right for your Mustang!"
      ],
      benefits: [
        "Improves horsepower and torque output between 7-25 HP (depending on application)",
        "Improves gas mileage due to increased efficiency of engine, Inlcudes re-usable, high-flow, lifetime air filter."
      ]
    },
    {
      name: "Performance Exhaust Systems",
      id: 2,
      img: "",
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
      img: "",
      info: "",
      benefits: ""
    },
    {
      name: "Differential Gears",
      id: 4,
      img: "",
      info: "",
      benefits: ""
    },
    {
      name: "Short-Throw Racing Shifters",
      id: 5,
      img: "",
      info: "",
      benefits: ""
    },
    {
      name: "Underdrive Power Pulleys",
      id: 6,
      img: "",
      info: "",
      benefits: ""
    },
    {
      name: "Performance Brake Upgrades",
      id: 7,
      img: "",
      info: "",
      benefits: ""
    },
    {
      name: "Fuel System Upgrades",
      id: 8,
      img: "",
      info: "",
      benefits: ""
    },
    {
      name: "High Performance Cooling System Upgrades",
      id: 9,
      img: "",
      info: "",
      benefits: ""
    }
  ];

  return (
    <main>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.info}</p>
          <h3>Benefits: </h3>
          <ul>
            <li>{item.benefits}</li>
          </ul>
        </div>
      ))}
    </main>
  );
};

export default upgradeInfo;
