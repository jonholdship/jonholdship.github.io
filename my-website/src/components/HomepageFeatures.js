import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Astrophysics',
    Svg: require('../../static/img/undraw_alien_science_nonm.svg').default,
    description: (
      <>
        I'm a PDRA at Leiden Observatory, working on the <a href="https://moppex.github.io">MOPPEX</a> project.
        I primarily focus on how we can obtain the fundamental physical properties of astrophysical objects from observations of molecules using chemical modelling and Bayesian inference.
      </>
    ),
  },
  {
    title: 'Healthcare',
    Svg: require('../../static/img/undraw_doctors_hwty.svg').default,
    description: (
      <>
        I work part time as a data scientist at Guy's and St Thomas' NHS Foundation Trust.
        My most exciting work involves using machine learning to predict which patients will need additional support. 
        Most clinical intervention relies on referrals from non-specialists and we can prevent patients being missed by flagging those who are at risk.
      </>
    ),
  },
  {
    title: 'Outreach',
    Svg: require('../../static/img/undraw_teaching_f1cm.svg').default,
    description: (
      <>
        I've long been interested in outreach. I've taken part in and co-ordinated the <a href="http://www.twinkle-spacemission.co.uk/orbyts/">ORBYTS</a> programme which places early career researchers and PhD students in secondary schools to lead GCSE and A-level students in original research.
        I'm also a regular at UCL's excellent <a href="https://www.ucl.ac.uk/physics-astronomy/outreach/science-centre-lectures">Science Centre Lectures series </a>. I'm always interested in being involved in outreach so please contact me!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
