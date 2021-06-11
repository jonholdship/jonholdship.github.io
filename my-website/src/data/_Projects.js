import React from "react";

const projects = [
  {
    category: "Science Project",
    title: "UCLCHEM",
    slug: "#uclchem",
    imageUrl: "img/projects/uclchem.png",
    subtitle:
      "A gas-grain code for astrochemical modelling.",
    period: "Jan 2021",
    tech: "Python, Fortran, Numerical Modelling",
    team: [
      {
        name: "Jon Holdship",
      },
      {
        name: "Serena Viti",
        link: "https://vitigroup.github.io",
      },
      {
        name: "Izaskun Jimenez-Serra",
        link: "https://cab.inta-csic.es/personal/izaskun-jimenez-serra/",
      },
      {
        name: "Felix Priestley"
      },
      {
        name: "Tomas James"
      },
    ],
    description: (
      <>
        <p>
          UCLCHEM is a model for astrochemical modelling, considering gas and grain surface reactions for a point in space.
           I wrote this version of UCLCHEM during my PhD, rewriting my supervisor's previous model and have been maintaining it ever since.
           The main goal of this project is to provide the astrochemical community with an easy to use, adaptable and open source chemical model.
        </p>
        <p>
          UCLCHEM is well documented, with 
          <a href="https://uclchem.github.io/docs">
          our docs 
          </a>
          including information on how to run the model, astrochemical modelling in general and how to use our code with python.
        </p>
        <p>
          UCLCHEM uses interchangeable physics modules to model a variety of different environments. For example, we have physics modules to 
          model clouds of gas, prestellar cores, hot cores and MHD shocks. The code can be used to post-process hydrodynamical models.
        </p>
      </>
    ),
    links: [
      {
        name: "uclchem.github.io",
        link: "https://uclchem.github.io",
      },
      {
        name: "Github Repo",
        link: "https://github.com/uclchem/UCLCHEM",
      },
    ],
  },
  {
    category: "Tool",
    title: "SpectralRadex",
    slug: "#spectralradex",
    bgColor: "alternate",
    subtitle: "A Python library for Radex and spectral modelling.",
    period: "Feb 2020",
    tech: "Python, Fortran, Numerical Modelling",
    description: (
      <>
        <p>
         RADEX is an extraordinarily useful and simple radiative transfer model which many people would like to run through Python. 
         As a result, there are many python implementations available. However, I found none of these were quite as simple and easy to use as I wanted.
         Moreover, many claimed that the use of Fortran COMMON blocks prevented multiprocessing. 
        </p>
        <p>
          I wrote{" "}
          <a
            href="https://spectralradex.readthedocs.io">
            SpectralRadex
          </a>
          {" "}by converting the RADEX source code to Modern Fortran and adding a Python wrap so it can be compiled as a Python library. 
          It is well documented, can be installed through Pypi, and is fully parallelizable.
        </p>
        <p>
          I then found that for my extra-galactic observational work, line intensities were not sufficient as my lines overlapped.
          I therefore extended the library to include the ability to create model spectra to fit observations.
        </p>
      </>
    ),
    links: [
      {
        name: "ReadTheDocs",
        link: "https://spectralradex.readthedocs.io",
      },
      {
        name: "GitHub",
        link: "https://github.com/uclchem/SpectralRadex",
      },
    ],
  },
  {
    category: "Website",
    title: "Nassus Site",
    slug: "#nassus-stores",
    subtitle: "A  website for my D&D game.",
    period: "March 2020",
    tech: "Python, Flask, HTML, CSS",
    description: (
      <>
        <p>
          Since my PhD, I've played D&D with friends. Looking for a change of pace, we started
          an unusual campaign where we take turns to run the game and create the world together.
          We needed a place to organize our thoughts and the Nassus website does just that using 
          Python/Flask skills I picked up during my UCL CDT mini-fellowship.
        </p>
        <p>
          The website hosts our latest campaign map, pulls a list of open adventures people are 
          ready to run from our google sheet, and generates randomized store inventories to keep
          the game fair as we each take over the GM position.
        </p>
      </>
    ),
    links: [
      {
        name: "Nassus Site",
        link: "https://jonholdship.pythonanywhere.com",
      },
      {
        name: "GitHub Marketplace",
        link: "https://github.com/marketplace/actions/mongo-action",
      },
    ],
  },
  {
    category: "Science Project",
    title: "Chemulator",
    slug: "#chemulator",
    subtitle:
      "Fast, accurate chemistry for hydrodynamical models through emulation.",
    period: "June 2021",
    tech: "Python, Tensorflow",
    team: [
      {
        name: "Jon Holdship",
      },
      {
        name: "Serena Viti",
        link: "https://vitigroup.github.io",
      },
      {
        name: "Thomas Haworth",
        link: "https://www.qmul.ac.uk/spa/people/academics/profiles/haworth-thomas.html",
      },
      {
        name: "John Ilee",
        link: "https://johnilee.github.io/",
      },
    ],
    description: (
      <>
        <p>
          Chemistry is an important part of dynamical models as it sets the temperature. 
          However, including complex chemical networks can be computationally intensive leading people to
          reduce their networks or even assume chemical equilibrium.
          Either of these approaches can affect the accuracy of the temperature and therefore the dynamics.
        </p>
        <p>
          Chemulator is a first attempt at using neural networks to give both speed and accuracy.
          We train a neural network to produce the same output as a chemical model for a given input.
          However, evaluating a neural network takes much less time than numerically solving the chemistry and radiative transfer problem.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/uclchem/chemulator",
      },
      {
        name: "Arxiv",
        link: "https://dscnustech.github.io/",
      },
    ],
  },
  {
    category: "Tool",
    title: "ArxivFilter",
    slug: "#arxivfilter",
    bgColor: "alternate",
    subtitle: "A script to filter Arxiv's daily summaries.",
    period: "September to November 2019",
    tech: "Python, Automation",
    description: (
      <>
        <p>
          Arxiv's daily emails can be a little long and often 90% of the papers from that day are of no interest
          to any given researcher. Looking for a way to filter those summaries down, I found {""}
          <a href="https://github.com/gkahn13/arxiv-filter">
            arxiv-filter
          </a>
          {" "}and forked it. I've been improving it since, updating to the newer Arxiv API and adding my own tweaks.
        </p>
        <p>
          ArxivFilter will email you with all of the abstracts since its last email which have one or more of your keywords somewhere in the
          title, abstract or author list. With a simple crontab line, you can have it email you every day or week with everything that might interest you.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/jonholdship/arxiv-filter",
      },
    ],
  },  

];

export default projects;