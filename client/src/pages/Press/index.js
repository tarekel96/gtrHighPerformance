import React, { Component } from "react";
import ArticleT from "../../components/Press/ArticleT/index.js";
import YouTubeCom from "../../components/Customers/YouTube/index.js";
import { Button } from "react-bootstrap";

class Press extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: false
    };
  }

  showArticles = () => {
    this.setState(prevState => ({
      table: !prevState.table
    }));
  };

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 2
      }
    };
    return (
      <div id="mainContent">
        <h3 className="text-center"> GTR High Performance in the Press</h3>
        <div className="d-flex justify-content-center">
          <YouTubeCom videoId={"OSJpSXdeWMs"} opts={opts} />
        </div>
        <Button className="mx-auto d-flex" onClick={this.showArticles}>
          Show Articles
        </Button>
        <ArticleT table={this.state.table} />
        <p>&nbsp;</p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=9oVsKMVmuCg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GTR guest appearance on Dan's Garage Episode 4</strong>
          </a>
        </p>
        <p>
          <a
            href="http://www.mustang50magazine.com/eventcoverage/1311_big_stang_stampede_at_gtr_high_performance/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              The Big 'Stang Stampede at GTR High Performance - carshow review
              by KJ Jones of 5.0 Mustang Magazine
            </strong>
          </a>
        </p>
        <p>
          <a
            href="http://blogs.mustang50magazine.com/6349756/miscellaneous/gtr-hosts-mustangs-and-enthusiasts-at-its-annual-show-and-dyno-day/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              KJ Jones from 5.0 &amp; Super Fords blog on the 2008 GTR Customer
              Appreciation Day.
            </strong>
          </a>
        </p>
        <p>
          <a
            href="http://blogs.mustang50magazine.com/6421680/mustang-tech-articles/these-parts-prove-it-doesnt-take-a-lot-to-hop-up-a-stock-stang/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>KJ Jones Bolt on Bonanza</strong>
          </a>
        </p>
        <p>
          <a
            href="http://www.mustang50magazine.com/techarticles/m5lp_0610w_v6_mustang_bolt_on_test/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>S197 V6 Bolt-On Test in 5.0 &amp; Super Fords</strong>
          </a>
        </p>
        <p>
          <a
            href="http://www.mustang50magazine.com/techarticles/m5lp_0703_s197_mustang_bolt_ons/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>S197 GT Bolt-On Test in 5.0 &amp; Super Fords</strong>
          </a>
        </p>
        <p>
          <a
            href="http://www.mustang50magazine.com/techarticles/m5lp_0902_s197_mustang_side_mirrors/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              S197 Mustang Side Mirror Upgrade in 5.0 &amp; Super Fords
            </strong>
          </a>
        </p>
        <p>
          <a
            href="http://www.mustang50magazine.com/techarticles/m5lp_0710_fox_turbo_upgrade/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              HP Turbo System on Fox Body in 5.0 &amp; Super Fords
            </strong>
          </a>
        </p>
        <p>
          <a
            href="http://www.mustang50magazine.com/techarticles/m5lp_0710_fox_mustang_5_lug_swap/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              Five-lug upgrade on Fox Body in 5.0 &amp; Super Fords
            </strong>
          </a>
        </p>
        <p>
          <a
            href="http://www.mustang50magazine.com/techarticles/m5lp_0701_acts_clutch_kit/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Fox Body Clutch Swap in 5.0 &amp; Super Fords</strong>
          </a>
        </p>
        <p>
          <a
            href="http://blogs.mustang50magazine.com/6441094/mustang-tech-articles/new-meaning-for-the-phrase-take-it-all-off/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>5.0 &amp; Super Fords "Strip Club" Article</strong>
          </a>
        </p>
        <p>
          <a
            href="http://50mustangsuperfords.automotive.com/85768/m5lp-0810-mustang-gauge-installation/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>5.0 &amp; Super Fords Gauge Installation Article</strong>
          </a>
        </p>
      </div>
    );
  }
}

export default Press;
