import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import { WorkItems, EducationItems } from "../../data/_About";

function ResumeItem({ location, link, position, period, description }) {
  return (
    <div className={styles.resumeItem}>
      <h3>
        <a href={link}>{location}</a>
      </h3>
      <p>
        <b>{position}</b>
        <br />
        <i>{period}</i>
      </p>
      <div>{description}</div>
    </div>
  );
}

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h1 className="underlineColorSuccess">About</h1>
      </header>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row padding-bottom--lg">
              <div className={clsx("col col--3", styles.profilePic)}>
                <img src={useBaseUrl("img/jon.png")} />
              </div>
              <div className="col col--9">
                <h1>Jon Holdship</h1>
                <p>
                I'm a London-based Astrophysicist, mixing numerical modelling with observational work and data science techniques. 
                Following a couple of industry fellowships, I have begun to apply my data science knowledge, working part time as a data scientist for a major London NHS trust.
                I'm also a huge fan of outreach and teaching.
                </p>
                <p>
                Away from science, I'm a keen runner, programmer and tabletop gamer. 
                I've included a couple of <Link to={useBaseUrl("projects/")}>projects</Link> around these hobbies on my other projects page.
                </p>
                <div className="button-group button-group--block wideBodyMaxWidth">
                  <Link
                    className="button button--outline button--success"
                    to={useBaseUrl("#experience")}
                  >
                    My experience
                  </Link>{" "}
                  <Link
                    className="button button--outline button--success"
                    to={useBaseUrl("#education")}
                  >
                    My education
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div id="experience" className="row padding-vert--lg">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorWarning">Experience</h2>
              </div>
              <div className="col col--9">
                {WorkItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
            <div id="education" className="row padding-vert--lg">
              <div className={clsx("col col--3", styles.aboutSectionHeader)}>
                <h2 className="underlineColorDanger">Education</h2>
              </div>
              <div className="col col--9">
                {EducationItems.map((props, idx) => (
                  <ResumeItem key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
      </main>
    </Layout>
  );
}

export default About;