import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    },
  ];

  ngOnInit(): void {
    const section = document.getElementById('home');
    section?.classList.add('active');
  }

  toggleTheme() {
    document.body.classList.toggle('light-mode');
  }

  toggleActiveBtn(e: any) {
    // remove active class from all buttons
    const controls = document.querySelectorAll('.control');
    controls.forEach((control) => {
      control.classList.remove('active-btn');
    });

    // add active class to the clicked button
    e.target.classList.add('active-btn');

    // remove active class from all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.classList.remove('active');
    });

    // add active class to the clicked section
    const section = document.getElementById(e.target.dataset.id);
    section?.classList.add('active');
  }
}
