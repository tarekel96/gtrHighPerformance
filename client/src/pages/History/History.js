import React, { Component } from "react";
import historyMust from "../../images/history.jpg";
import "./history.css";

class History extends Component {
  constructor(props) {
    super(props);
    // this.title = props.title;
    // this.history = props.history;
    // this.showHistory = this.showHistory.bind(this); --> if define a ES5 method, must bind like this
    this.state = {
      header: this.props.titleInitial,
      histParOne: this.props.historyInitialOne,
      histParTwo: this.props.historyInitialTwo,
      histParThree: this.props.historyInitialThree
    };
  }

  // displayHistory = array => {
  //   array.map(
  //     <col md={6} lg={10}>
  //       {array}
  //     </col>
  //   );
  // };

  showHistory = () => {
    this.setState({
      header: "The History of GTR High Performance",
      histParOne: `Founded in 1997, GTR High Performance was created by two
         long-time Mustang enthusiasts, Gonzalo & Ricardo Topete. The
         concept was simple: to create a positive and rewarding Mustang
         shop experience. With a courteous, professional, and
         knowledgeable staff, GTR High Performance has emerged as one
         of the premier Mustang performance shops in the country.
         Regular appearances and features in national Mustang
         publications such as: 5.0 Mustangs & SuperFords Magazine,
         Mustang Enthusiast Magazine and media such as PowerTV are a
         testament to the quality of work available at GTR High
         Performance.`,
      histParTwo: `Originating from a modest 1000 sq./ft. shop with one bay for
           installations and a tiny office, GTR High Performance forged a
           strong reputation for quality workmanship, excellent customer
           service, and competetive pricing. Over the course of a decade,
           GTR High Performance expanded its services by offering a
           larger line of top-quality performance parts and accessories
           for Mustangs. The increased growth created the need for a
           larger facility. GTR High Performance, now in its 3rd
           location, offers the Mustang enthusiast the ultimate toy
           store. Comprised of over 8500 sq./ft. of Mustang paradise
           featuring a fully stocked parts warehouse, showroom, customer
           waiting room and state-of-the-art installation center. The
           highlight of GTR's installation shop is a DynoJet 224X chassis
           dynomometer. Capable of registering up to 1500 horsepower and
           reaching speeds up to 200 mph, it can tame even the wildest
           Pony! Contact GTR High Performance to schedule your dyno test
           or tuning session.`,
      histParThree: `Next time you are in the market for Mustang performance parts
           and accessories or installation help or simply a dyno-test,
           contact GTR High Performance. You and your Mustang will be
           treated with the respect and attention to detail you deserve
           and expect. Remember, whether you plan on building a Mustang
           for the drag strip, road-course, show-circuit, or simply fun
           on the street, GTR High Performance IS your Mustang Race
           Place!`
    });
  };

  render() {
    return (
      <div id="masterHistory">
        <div id="classicShelbyCon">
          <img
            src={historyMust}
            style={{
              height: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "none",
              backgroundSize: "cover"
            }}
            alt="Avarar"
            className="image"
          />
          <div />
        </div>
        <button className="histButton" onClick={this.showHistory}>
          Click to Learn More About Our History
        </button>
        <div id="historyInfo" className="justify paddingPars">
          <header>
            <h3 id="title">{this.state.header}</h3>
          </header>
          <section className="padPar">
            <p>{this.state.histParOne}</p>
            <p>{this.state.histParTwo}</p>
            <p>{this.state.histParThree}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default History;
