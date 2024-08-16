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
      icon: 'assets/icons/logos/js.png',
    },
    {
      title: 'TypeScript',
      icon: 'assets/icons/logos/ts.png',
    },
    {
      title: 'Next JS',
      icon: 'assets/icons/logos/next.png',
    },
    {
      title: 'Nuxt JS',
      icon: 'https://static-00.iconduck.com/assets.00/nuxtjs-icon-2048x1372-xn6c49j2.png',
    },
    {
      title: 'React JS',
      icon: 'assets/icons/logos/react.png',
    },
    {
      title: 'Vue JS',
      icon: 'assets/icons/logos/vue.png',
    },
    {
      title: 'Angular',
      icon: 'assets/icons/logos/angular.svg',
    },
    {
      title: 'Laravel',
      icon: 'assets/icons/logos/laravel.png',
    },
    {
      title: 'Vuetify',
      icon: 'assets/icons/logos/vuetify.png',
    },
    {
      title: 'Tailwind CSS',
      icon: 'assets/icons/logos/tailwind.png',
    },
    {
      title: 'TWind CSS',
      icon: 'assets/icons/logos/twind.png',
    },
    {
      title: 'Bootstrap',
      icon: 'assets/icons/logos/bootstrap.png',
    },
  ];

  timeline = [
    {
      date: 'June 2023 - Present',
      position: 'Frontend Developer',
      company: 'Youding',
      duties: [
        'Write reusable, effective, and scalable TypeScript code.',
        'Implement front-end components with a progressive Vue.js framework.',
        "Translate the client's technical specifications into code.",
        'Write automated test cases to verify the functionalities.',
      ],
    },
    {
      date: 'January 2023 - June 2023',
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
