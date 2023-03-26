import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  info = [
    {
      title: 'Email',
      value: 'koeurnsereyvatanak@gmail.com',
      icon: 'fas fa-envelope',
    },
    {
      title: 'Mobile Number',
      value: '+855 98 915 099',
      icon: 'fas fa-mobile-alt',
    },
    {
      title: 'Bachelor',
      value: 'Software Engineering',
      icon: 'fas fa-user-graduate',
    },
    {
      title: 'Languages',
      value: 'Khmer, English, Japanese',
      icon: 'fas fa-globe-africa',
    },
    // {
    //   title: 'Date of Birth',
    //   value: 'October 04, 2000',
    //   icon: 'fas fa-birthday-cake'
    // },
    {
      title: 'Location',
      value: 'Phnom Penh, Cambodia',
      icon: 'fas fa-map-marker-alt',
    },
  ];

  socialIcons = [
    {
      title: 'Telegram',
      icon: 'fab fa-telegram-plane',
      link: 'https://t.me/vatanak100',
    },
    {
      title: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/in/vatanak10/',
    },
    // {
    //   title: 'Discord',
    //   icon: 'fab fa-discord',
    //   link: 'https://discord.com/users/588584785224400928',
    // },
    // {
    //   title: 'Twitter',
    //   icon: 'fab fa-twitter',
    //   link: 'https://twitter.com/vatanak100',
    // },
    // {
    //   title: 'Facebook',
    //   icon: 'fab fa-facebook-f',
    //   link: 'https://www.facebook.com/vatanak100/',
    // },
    {
      title: 'Skype',
      icon: 'fab fa-skype',
      link: 'https://join.skype.com/invite/xcYEQ8gvS1Oz',
    },
    {
      title: 'GitHub',
      icon: 'fab fa-github',
      link: 'https://github.com/vatanak10',
    },
    {
      title: 'GitLab',
      icon: 'fab fa-gitlab',
      link: 'https://gitlab.com/vatanak10',
    },
  ];
}
