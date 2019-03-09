import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';


const PROJECTS: Project[] = [
  {
    id: '0',
    name: 'UAlbany Hangout',
    image: '/assets/images/bg.png',
    category: 'Academic Project',
    featured: true,
    label: ' ',
    // tslint:disable-next-line:max-line-length
    description: ' '
  },
  {
    id: '1',
    name: 'Miles',
    image: '/assets/images/Picture1.png',
    category: 'Academic Project',
    featured: false,
    label: '',
    description: ' '
  },
  {
    id: '2',
    name: 'Face Recognition',
    image: '/assets/images/facial-recognition.jpg',
    category: 'Academic Project',
    featured: false,
    label: ' ',
    description: ' '
  },
  {
    id: '3',
    name: 'Portfolio Website',
    image: '/assets/images/123.jpg',
    category: 'Academic Project',
    featured: false,
    label: '',
    description: ' '
  }
 ];


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    projects = PROJECTS;
  
    selectedProject = PROJECTS[0];
  
  constructor() { }

  ngOnInit() {
  }

}
