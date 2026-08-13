import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    { label: 'Langages', items: ['Java'] },
    { label: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'JPA / Hibernate'] },
    { label: 'Frontend', items: ['Angular', 'HTML', 'CSS', 'TypeScript'] },
    { label: 'DevOps', items: ['Docker', 'conteneurisation'] },
    { label: 'ETL & Data', items: ['Talend', 'CSV', 'Excel', 'flux ETL'] },
    { label: 'Bases de données', items: ['MySQL', 'Sybase'] },
    { label: 'Outils', items: ['Jira', 'Confluence'] },
    { label: 'Soft skills', items: ['Communication', 'Travail en équipe', 'Esprit d\'analyse', 'Adaptabilité', 'Organisation'] },
    { label: 'Langues', items: ['Arabe (natif)', 'Français (B2)', 'Anglais (B2)'] }
  ];
}
