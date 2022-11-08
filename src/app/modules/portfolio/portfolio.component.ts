import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
      title: 'bongthom.com',
      imgLink: 'assets/images/png/bongthom.png',
      altImg: 'bongthom.com homepage',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://bongthom.com',
          tooltip: 'Visit Website'
        }
      ]
    },
    {
      title: 'iBOOK',
      imgLink: 'assets/images/portfolio/ibook.webp',
      altImg: 'ibook preview',
      icons: [
        {
          icon: 'fab fa-google-play',
          link: 'https://play.google.com/store/apps/details?id=com.bookmanagement.ibook',
          tooltip: 'Play Store'
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/incubation-center/Flutter-app---Group8',
          tooltip: 'GitHub'
        },
      ]
    },
    {
      title: 'fixh.me',
      imgLink: 'assets/images/portfolio/fixhme.webp',
      altImg: 'fixh.me homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://fixh.me/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'DOODHK.COM',
      imgLink: 'assets/images/portfolio/doodhk.webp',
      altImg: 'doodhk homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://doodhk.com/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'HK.FACKELMANN.ASIA',
      imgLink: 'assets/images/portfolio/fackelmann.webp',
      altImg: 'fackelmann homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://hk.fackelmann.asia/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'BIGBITE.HK',
      imgLink: 'assets/images/portfolio/bigbite.webp',
      altImg: 'bigbite.hk homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://bigbite.hk/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'erlicht.com',
      imgLink: 'assets/images/portfolio/erlicht.webp',
      altImg: 'erlicht.com homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://erlicht.com/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'bainmariehk.com',
      imgLink: 'assets/images/portfolio/bainmarie.webp',
      altImg: 'bainmariehk homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://bainmariehk.com/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'KIT Landing Page',
      imgLink: 'assets/images/portfolio/kit.webp',
      altImg: 'KIT Landing Page preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://neuporng.github.io/PrototypeLandingPage/',
          tooltip: 'Preview'
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/NeupOrng/PrototypeLandingPage',
          tooltip: 'GitHub'
        },
      ]
    },
    {
      title: 'dood.fr',
      imgLink: 'assets/images/png/doodfr.png',
      altImg: 'dood.fr homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://dood.fr/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'mkwong.com.hk',
      imgLink: 'assets/images/png/mkwong.png',
      altImg: 'mkwong.com.hk homepage preview',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://mkwong.com.hk/',
          tooltip: 'Visit Website'
        },
      ]
    },
    {
      title: 'Vatanak Portfolio Page',
      imgLink: 'assets/images/portfolio/portfolio.webp',
      altImg: 'Vatanak Portfolio Page',
      icons: [
        {
          icon: 'fa fa-link',
          link: 'https://vatanak10.github.io/portfolio',
          tooltip: 'Preview Page'
        },
        {
          icon: 'fab fa-github',
          link: 'https://github.com/vatanak10/portfolio',
          tooltip: 'GitHub'
        },
      ]
    },
  ];
}
