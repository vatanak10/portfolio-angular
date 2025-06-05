import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/supabase.service';

export interface Action {
  icon: string;
  link: string;
  tooltip: string;
}

export interface Project {
  title: string;
  imgLink: string;
  altImg: string;
  actions: Action[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  projects = [
    {
      title: 'CICCA Donation Website',
      imgLink: '../../../assets/images/portfolio/cicca-donation.webp',
      altImg: 'CICCA Donation Website',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://cicca.vatanak.com/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'Association of Organization Management',
      imgLink: '../../../assets/images/portfolio/moi.webp',
      altImg: 'Association of Organization Management',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://langoregister.interior.gov.kh/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'Kirirom Digital',
      imgLink: '../../../assets/images/portfolio/kdj.webp',
      altImg: 'Kirirom Digital homepage',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://www.kirirom-digital.com/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'wetype.store',
      imgLink: '../../../assets/images/portfolio/wetype.webp',
      altImg: 'wetype.store banner',
      actions: [],
    },
    {
      title: 'BoxShipper',
      imgLink: '../../../assets/images/portfolio/boxshipper.webp',
      altImg: 'BoxShipper Homepage',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://boxshipper.khmum.com/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'bongthom.com',
      imgLink: '../../../assets/images/portfolio/bongthom.webp',
      altImg: 'bongthom.com homepage',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://bongthom.com',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'iBOOK',
      imgLink: '../../../assets/images/portfolio/ibook.webp',
      altImg: 'ibook preview',
      actions: [
        {
          icon: 'fab fa-google-play',
          link: 'https://play.google.com/store/apps/details?id=com.bookmanagement.ibook',
          tooltip: 'Play Store',
        },
      ],
    },
    {
      title: 'fixh.me',
      imgLink: '../../../assets/images/portfolio/fixhme.webp',
      altImg: 'fixh.me homepage preview',
      actions: [],
    },
    {
      title: 'DOODHK.COM',
      imgLink: '../../../assets/images/portfolio/doodhk.webp',
      altImg: 'doodhk homepage preview',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://doodhk.com/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'HK.FACKELMANN.ASIA',
      imgLink: '../../../assets/images/portfolio/fackelmann.webp',
      altImg: 'fackelmann homepage preview',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://hk.fackelmann.asia/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'BIGBITE.HK',
      imgLink: '../../../assets/images/portfolio/bigbite.webp',
      altImg: 'bigbite.hk homepage preview',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://bigbite.hk/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'erlicht.com',
      imgLink: '../../../assets/images/portfolio/erlicht.webp',
      altImg: 'erlicht.com homepage preview',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://erlicht.com/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'bainmariehk.com',
      imgLink: '../../../assets/images/portfolio/bainmarie.webp',
      altImg: 'bainmariehk homepage preview',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://bainmariehk.com/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'KIT Landing Page',
      imgLink: '../../../assets/images/portfolio/kit.webp',
      altImg: 'KIT Landing Page preview',
      actions: [],
    },
    {
      title: 'dood.fr',
      imgLink: '../../../assets/images/portfolio/doodfr.webp',
      altImg: 'dood.fr homepage preview',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://dood.fr/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'mkwong.com.hk',
      imgLink: '../../../assets/images/portfolio/mkwong.webp',
      altImg: 'mkwong.com.hk homepage preview',
      actions: [
        {
          icon: 'fa fa-link',
          link: 'https://mkwong.com.hk/',
          tooltip: 'Visit Website',
        },
      ],
    },
    {
      title: 'Vatanak Portfolio Page',
      imgLink: '../../../assets/images/portfolio/portfolio.webp',
      altImg: 'Vatanak Portfolio Page',
      actions: [],
    },
  ];

  async getProjects(): Promise<void> {
    try {
      const { data, error } = await this.supabase.getProjects();
      if (error) {
        throw error;
      }

      const mappedData: Project[] = data.map((item: any) => ({
        title: item.name,
        imgLink: item.image_url,
        altImg: item.alt_img || item.name,
        actions: item.actions || [],
      }));

      this.projects = mappedData;
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }
}
