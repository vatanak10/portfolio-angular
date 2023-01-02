import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  timeline = [
    {
      date: 'June 2022 - Present',
      position: 'Web Application Developer',
      company: 'Bongthom.com',
      duties: [
        'Present and defend work and key milestone deliverables to the development team, management, and stakeholders',
        'Web Application Development. Build reusable code and libraries for future use.',
        'Optimize application for maximum speed and scalability',
      ],
    },
    {
      date: 'October 2021 - June 2022',
      position: 'Junior Web Developer',
      company: 'DOOD LIMITED',
      duties: [
        'Provided front-end website development using WordPress, Hubspot, and other editing software.',
        'Drafted customized layout and wireframes based on predetermined parameters and expectations.',
        'Customized re-design with HTML, CSS, PHP',
      ],
    },
    {
      date: 'December 2021 - April 2022',
      position: 'Web Application Developer',
      company: 'KIT',
      duties: [
        'Identify the Problems and Propose the solution to the problem.',
        'Decide on Technology Stack required to build the Web Application.',
        'Works on Development and Maintenance of Applications and User Interface.',
      ],
    },
    {
      date: 'July 2021 - January 2022',
      position: 'Website Maintainer',
      company: 'fixh.me',
      duties: [
        'Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.',
        'Developed designs to meet specific requirements such as quick-loading sites with particular layouts.',
        'Conceived and built optimized landing pages in Vuetify for cross-browser compatibility.',
        'Designed and updated layouts to meet usability and performance requirements.',
      ],
    },
    {
      date: 'May 2020 - Januray 2021',
      position: 'Web Development Lead',
      company: 'megnit',
      duties: [
        'Designed, implemented, and monitored web pages and sites for continuous improvement.',
        'Created eye-catching and functional digital design concepts across various platforms.',
        'Represented web team at meetings with executives and discussed project goals and milestones.',
        'Researched new technologies, software packages, and hardware products for use in website projects.',
      ],
    },
  ];
}
