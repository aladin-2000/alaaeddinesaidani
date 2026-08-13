import { Component } from '@angular/core';

interface Project {
  year: string;
  tag?: string;
  title: string;
  org?: string;
  desc: string;
  points: string[];
  stack: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      year: 'Janv. 2026 — Août 2026',
      tag: 'mission freelance',
      title: 'MediSync — Plateforme de gestion de rendez-vous médicaux',
      org: 'Client externe — Remote, Tunis, Tunisie',
      desc: 'Développement full-stack, en autonomie pour un client externe, d\'une plateforme complète : interface médecin, interface délégué médical et back-office d\'administration.',
      points: [
        'Authentification & autorisation via Spring Security et JWT, gestion des rôles (médecin, délégué, administrateur, laboratoire)',
        'Module délégué : recherche des médecins, prise de rendez-vous, calendrier de planification des visites, historique des visites et suivi client',
        'Module médecin : gestion des créneaux de disponibilité, calendrier de planification, consultation de l\'historique des visites médicales',
        'Module d\'administration : validation des comptes médecins, gestion des inscriptions des laboratoires partenaires',
        'Frontend Angular 20 en composants standalone, gestion d\'état réactive (RxJS) et interfaces responsive'
      ],
      stack: ['Java 17', 'Spring Boot 3.5', 'Spring Security', 'JWT', 'MySQL', 'Angular 20', 'RxJS']
    },
    {
      year: '2024',
      title: 'Analyse de cybersécurité — API Shodan',
      desc: 'Application web permettant l\'analyse d\'adresses IP à partir de sources ouvertes.',
      points: [
        'Intégration de l\'API Shodan pour collecter des métadonnées sur des hôtes connectés',
        'Tableau de bord interactif : services exposés, ports ouverts, géolocalisation'
      ],
      stack: ['C#', '.NET', 'Shodan API', 'MySQL', 'Angular', 'Angular Material']
    },
    {
      year: '2022 — 2023',
      title: 'Projet de fin d\'année (Projet académique)',
      desc: 'Conception d\'une plateforme web pour faciliter la recherche de stages et la gestion des candidatures.',
      points: [
        'Soumission des candidatures par les étudiants et gestion centralisée des offres de stage',
        'Les entreprises peuvent consulter les candidatures et sélectionner les profils pertinents'
      ],
      stack: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST API', 'MySQL', 'Angular']
    }
  ];
}
