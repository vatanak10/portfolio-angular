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

  projects: Project[] = []; // Initialize as an empty array

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
