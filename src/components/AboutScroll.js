import React, { Component } from "react";

export default class RadarGraph extends Component {
  state = {

  }
  isBottom(element) {
    return element.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  trackScrolling = () => {
    const toxicElement = document.getElementById('toxic');
    const severeToxicElement = document.getElementById('severeToxic');
    const obsceneElement = document.getElementById('obscene');
    const threatElement = document.getElementById('threat');
    const insultElement = document.getElementById('insult');
    const identityElement = document.getElementById('identityHate');
    if (this.isBottom(toxicElement)) {
      this.setState({ whichVisible: 'toxic' });
    }
    if (this.isBottom(severeToxicElement)) {
      this.setState({ whichVisible: 'severeToxic' });
    }
    if (this.isBottom(obsceneElement)) {
      this.setState({ whichVisible: 'obscene' });
    }
    if (this.isBottom(threatElement)) {
      this.setState({ whichVisible: 'threat' });
    }
    if (this.isBottom(insultElement)) {
      this.setState({ whichVisible: 'insult' });
    }
    if (this.isBottom(identityElement)) {
      this.setState({ whichVisible: 'identityHate' });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log("the string send to backend", this.state.input)
    event.preventDefault();}


  render() {
    const { whichVisible } = this.state;
    return (
        <div className='tryItPage'>
        <div className="classificationSection">
          <div className="classificationFlexContainer" id="toxic">
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "toxic"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Toxic
              </h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "toxic"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Toxic is a measure of text being emotionally abusive and
                psychologically harmful towards others.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="severeToxic">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "severeToxic"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Severe Toxic rates text for the same metrics as Toxic, but on an
                extreme scale.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "severeToxic"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Severe Toxic
              </h1>
            </div>
          </div>
          <div className="classificationFlexContainer" id="obscene">
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "obscene"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Obscene
              </h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "obscene"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Obscenity measures the offensive nature of text, with weight
                towards cursing and foul language.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="threat">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "threat"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Threat is a measure of the hostility of text and intent to
                inflict physical harm on others.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "threat"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Threat
              </h1>
            </div>
          </div>
          <div className="classificationFlexContainer" id="insult">
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "insult"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Insult
              </h1>
            </div>
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "insult"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Insult measures abusive language targeted at someone or
                something.
              </p>
            </div>
          </div>
          <div className="classificationFlexContainer" id="identityHate">
            <div className="classificationTextContainer">
              <p
                className={
                  whichVisible === "identityHate"
                    ? "classificationText is-visible"
                    : "classificationText"
                }
              >
                Identity Hate measures the bias of text through prejudice on the
                basis of race, religion, sexual orientation, or other grounds.
              </p>
            </div>
            <div className="classificationTitleContainer">
              <h1
                className={
                  whichVisible === "identityHate"
                    ? "classificationTitleSelected"
                    : "classificationTitle"
                }
              >
                Identity Hate
              </h1>
            </div>
          </div>
        </div>
      </div>
        )
  }
}