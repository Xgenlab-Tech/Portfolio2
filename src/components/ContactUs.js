import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                <a href="https://www.linkedin.com/in/harshit-sharma-339b58177/">Linkedin</a>
                 </h4>
                 <h5><a href="https://github.com/harshitsharma32145">Github</a></h5>
                 <p>Copyright 2022 @ Harshit Sharma</p>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}