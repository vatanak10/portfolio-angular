import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skills = [
    {
      title: 'JavaScript',
      icon: 'js.png',
    },
    {
      title: 'TypeScript',
      icon: 'ts.png',
    },
    {
      title: 'Next JS',
      icon: 'next.png',
    },
    {
      title: 'Nuxt JS',
      icon: 'nuxt.png',
    },
    {
      title: 'React JS',
      icon: 'react.png',
    },
    {
      title: 'Vue JS',
      icon: 'vue.png',
    },
    {
      title: 'Angular',
      icon: 'angular.svg',
    },
    {
      title: 'Laravel',
      icon: 'laravel.png',
    },
    {
      title: 'Vuetify',
      icon: 'vuetify.png',
    },
    {
      title: 'Tailwind CSS',
      icon: 'tailwind.png',
    },
    {
      title: 'TWind CSS',
      icon: 'twind.png',
    },
    {
      title: 'Bootstrap',
      icon: 'bootstrap.png',
    },
  ];

  // skillGroups = [
  //   {
  //     group: 'Programming Languages',
  //     items: [
  //       {
  //         title: 'JavaScript',
  //         icon: 'js.png',
  //       },
  //       {
  //         title: 'TypeScript',
  //         icon: 'ts.png',
  //       },
  //     ],
  //   },
  //   {
  //     group: 'Frontend Frameworks',
  //     items: [
  //       {
  //         title: 'Next JS',
  //         icon: 'next.png',
  //       },
  //       {
  //         title: 'Nuxt JS',
  //         icon: 'nuxt.png',
  //       },
  //       {
  //         title: 'React JS',
  //         icon: 'react.png',
  //       },
  //       {
  //         title: 'Vue JS',
  //         icon: 'vue.png',
  //       },
  //       {
  //         title: 'Angular',
  //         icon: 'angular.svg',
  //       },
  //       {
  //         title: 'Vuetify',
  //         icon: 'vuetify.png',
  //       },
  //       {
  //         title: 'Laravel',
  //         icon: 'laravel.png',
  //       },
  //     ],
  //   },
  //   {
  //     group: 'CSS Frameworks',
  //     items: [
  //       {
  //         title: 'Tailwind CSS',
  //         icon: 'tailwind.png',
  //       },
  //       {
  //         title: 'TWind CSS',
  //         icon: 'twind.png',
  //       },
  //       {
  //         title: 'Bootstrap',
  //         icon: 'bootstrap.png',
  //       },
  //     ],
  //   },
  // ];

  timeline = [
    {
      date: 'January 2023 - Present',
      position: 'Frontend Developer',
      company: 'Kirirom Digital Cambodia',
      duties: [
        'Designed and updated layouts to meet usability and performance requirements.',
        'Transformed native applications into mobile-friendly products.',
        'Implemented Payment Gateway Integration',
      ],
    },
    {
      date: 'June 2022 - January 2023',
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
