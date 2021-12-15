(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[192],{2950:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return h}});var o=a(2122),r=a(9756),n=(a(7294),a(3905)),i=["components"],s={slug:"chemulator",title:"Chemulator - Fast, accurate thermochemistry for dynamical models",tags:["Machine Learning","Astrochemistry"]},l={permalink:"/blog/chemulator",editUrl:"https://joholdship.github.io/blog/blog/2021-01-01.md",source:"@site/blog/2021-01-01.md",title:"Chemulator - Fast, accurate thermochemistry for dynamical models",description:"Authors:  Holdship, Jonathan; Viti, Serena; Haworth, Thomas; Ilee, John",date:"2021-01-01T00:00:00.000Z",formattedDate:"January 1, 2021",tags:[{label:"Machine Learning",permalink:"/blog/tags/machine-learning"},{label:"Astrochemistry",permalink:"/blog/tags/astrochemistry"}],readingTime:1.235,truncated:!1,prevItem:{title:"The Distribution and Origin of C2H in NGC 253 from ALCHEMI",permalink:"/blog/c2h"},nextItem:{title:"Observations of CH3OH and CH3CHO in a Sample of Protostellar Outflow Sources",permalink:"/blog/orbyts"}},m=[],c={toc:m};function h(t){var e=t.components,a=(0,r.Z)(t,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Authors:"),"  Holdship, Jonathan; Viti, Serena; Haworth, Thomas; Ilee, John",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Arxiv:")," ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2106.14789"},"https://arxiv.org/abs/2106.14789"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"DOI:")," ",(0,n.kt)("a",{parentName:"p",href:"https://doi.org/10.1051/0004-6361/202140357"},"https://doi.org/10.1051/0004-6361/202140357"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"GitHub:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/uclchem/Chemulator"},"https://github.com/uclchem/Chemulator"),"  "),(0,n.kt)("p",null,"Chemical modelling serves two purposes in dynamical models: accounting for the effect of microphysics on the dynamics and providing observable signatures. Ideally, the former must be done as part of the hydrodynamic simulation but this comes with a prohibitive computational cost that leads to many simplifications being used in practice. To counter this, we aimed to produce a statistical emulator that replicates a full chemical model capable of solving the temperature and abundances of a gas through time. This emulator should suffer only a minor loss of accuracy when compared to a full chemical solver and would have a fraction of the computational cost allowing it to be included in a dynamical model."),(0,n.kt)("p",null,"To achieve this, the gas-grain chemical code UCLCHEM was updated to include heating and cooling processes, and a large dataset of model outputs from possible starting conditions was produced. A neural network was then trained to map directly from inputs to outputs. Chemulator replicates the outputs of UCLCHEM with an overall mean squared error (MSE) of 1.7\u2005\xd7\u200510\u22124 for a single time step of 1000 yr, and it is shown to be stable over 1000 iterations with an MSE of 0.003 on the log-scaled temperature after one time step and 0.006 after 1000 time steps. Chemulator was found to be approximately 50 000 times faster than the time-dependent model it emulates but can introduce a significant error to some models."))}h.isMDXComponent=!0}}]);