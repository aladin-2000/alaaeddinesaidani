import { Component } from '@angular/core';

interface RoleGroup {
  heading: string;
  items: string[];
}

interface Role {
  period: string;
  title: string;
  org: string;
  points?: string[];
  groups?: RoleGroup[];
  stack?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  roles: Role[] = [
    {
      period: 'Sept. 2024 — présent',
      title: 'Développeur Full Stack Java',
      org: 'Linedata — Tunis, Tunisie',
      groups: [
        {
          heading: 'Migration d\'un progiciel financier vers une architecture microservices',
          items: [
            'Participation à la migration d\'un outil de gestion de portefeuilles vers une architecture Web en microservices, au sein d\'une équipe travaillant en méthode SCRUM',
            'Analyse approfondie d\'un système legacy complexe (logiques métier imbriquées, procédures stockées volumineuses, dépendances inter-modules)',
            'Mise en place de la CI/CD et rédaction de la documentation technique du projet',
          ]
        },
        {
          heading: 'Générateur XML et automatisation de génération des écrans',
          items: [
            'Conception et développement d\'un générateur de fichiers XML basé sur les définitions de l\'application Desktop',
            'Automatisation de la configuration des écrans Web compatibles avec le framework 360',
            'Implémentation et gestion des mécanismes XSPE pour le contrôle dynamique des accès et des fonctionnalités'
          ]
        }
      ],
      stack: ['Java 17', 'Spring Boot', 'Microservices', 'REST API', 'Angular 16', 'Sybase', 'GitLab CI/CD', 'Confluence']
    },
    {
      period: 'Fév. 2024 — Août 2024',
      title: 'Développeur Full Stack (PFE)',
      org: 'Linedata — Tunis, Tunisie',
      points: [
        'Migration d\'un module de reporting financier depuis une application Desktop vers une architecture Web basée sur Spring, en assurant la reprise des règles métier et la cohérence des données',
        'Développement de jobs Talend pour le nettoyage (doublons, valeurs manquantes), la transformation et la normalisation des données',
        'Mise en place de flux ETL permettant de produire des données fiables et exploitables pour la génération de rapports'
      ],
      stack: ['Java', 'Spring Boot', 'Talend', 'ETL', 'Sybase']
    }
  ];
}
