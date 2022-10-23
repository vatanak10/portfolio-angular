import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';

  menu = [
    {
      id: 'home',
      name: 'Home',
      icon: 'fas fa-home',
    },
    {
      id: 'about',
      name: 'About Me',
      icon: 'fas fa-user',
    },
    {
      id: 'portfolio',
      name: 'My Portfolio',
      icon: 'fas fa-briefcase',
    },
    // {
    //   id: 'blogs',
    //   name: 'Read Blogs',
    //   icon: 'fas fa-newspaper',
    // },
    {
      id: 'contact',
      name: 'Contact Me',
      icon: 'fas fa-envelope',
    }
  ]

  toggleTheme() {
    document.body.classList.toggle('light-mode');
  }

  toggleActiveBtn(e: any) {
    const controls = document.querySelectorAll('.control');
    controls.forEach((control) => {
      control.classList.remove('active-btn');
    });

    e.target.classList.add('active-btn');
  }
}
