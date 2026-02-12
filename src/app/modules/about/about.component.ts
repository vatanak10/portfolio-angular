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
      icon: 'assets/icons/logos/nuxt.png',
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
      date: 'Jan 2025 - Present',
      position: 'Senior Frontend Developer',
      company: 'AIBODIA',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzxqYvqbk7XWpsEvfkxbyaR4_cLF6fO8NuA&s',
      duties: [
        'Develop and maintain user-facing features using latest frontend technologies.',
        'Optimize applications for maximum speed and scalability.',
        'Implement responsive design principles.',
        'Collaborate with other team members and stakeholders.',
      ],
    },
    {
      date: 'June 2023 - May 2025',
      position: 'Frontend Developer',
      company: 'Youding',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQHbeiEtmt1m1A/company-logo_200_200/company-logo_200_200/0/1704957057573/youding_logo?e=2147483647&v=beta&t=BToifYOS-nDk8TjATQHt7nDxaglltBfVp5aqBe9U6Dk',
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
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQFKCsUioFiBPg/company-logo_200_200/company-logo_200_200/0/1679989931415/kirirom_digital_cambodia_logo?e=2147483647&v=beta&t=O9nrLHzelpou9QsPB1ANrlkcQBpZt2bKCy6kosCain8',
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
      logo: 'https://play-lh.googleusercontent.com/wdam3aaKtVTWByzuYRl4XlcdRwZ3fWqxh_SrO9U0SlAP8bVX0qF_3zO_MV8zGja7R3A',
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
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHUlqOGg0CS5g/company-logo_200_200/company-logo_200_200/0/1707215283106/dood_limited_logo?e=2147483647&v=beta&t=BDLdp34WagV14qNAewhe-ayJ90uMeQutOUmnWXPecVM',
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
      logo: 'https://static.wixstatic.com/media/f81f50_53b2aa541fdb4b00ba68cfc8eb59aaa0~mv2.png/v1/fill/w_978,h_921,al_c/f81f50_53b2aa541fdb4b00ba68cfc8eb59aaa0~mv2.png',
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
