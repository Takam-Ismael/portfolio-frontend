// src/app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'BTP Sarl System',
      date: '2024 - 2025',
      description: 'Monitors and manages construction sites. Manage Inventory construction stock. A comprehensive system for construction site management and inventory tracking.',
      technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'GitLab'],
      url: 'https://gitlab.com/djanilorene/isi3_english_project.g'
    },
    {
      title: 'Agribind Application',
      date: '2025 - Present',
      description: 'Develop the relationship between farmers, cooperate and the government. A platform connecting agricultural stakeholders.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      url: 'https://gitlab.com/Takam-Ismael/agribind-platform.g'
    },
    {
      title: 'MeetIn Application',
      date: '2025 - Present',
      description: 'A booking system to monitor the availability of a specific room and the said room can be reserved. Room reservation and management system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'CI/CD'],
      url: 'https://meetin-room.github.io/MeetIn-frontend/all-rooms'
    }
  ];
}