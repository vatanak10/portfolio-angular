import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/supabase.service';

export interface Experience {
  date: string; // This will be a formatted string like "May 2020 - Present"
  position: string;
  company: string;
  logo: string; // URL to the company logo
  duties: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(): void {
    this.fetchExperiences();
  }

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

  timeline: Experience[] = [];

  formatDate(date: string): string {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(parsedDate);
  }

  async fetchExperiences(): Promise<void> {
    try {
      const { data, error } = await this.supabase.fetchExperiences();
      if (error) {
        throw error;
      }

      const mappedData: Experience[] = data.map((item: any) => ({
        date:
          this.formatDate(item.start_date) +
          ' - ' +
          (item.end_date ? this.formatDate(item.end_date) : 'Present'),
        position: item.position,
        company: item.company_name,
        logo: item.company_profile_url,
        duties: item.duties || [],
      }));

      this.timeline = mappedData;
    } catch (error) {
      console.error('Error fetching work experiences:', error);
    }
  }
}
