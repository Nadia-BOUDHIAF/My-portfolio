import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  issued: string;
  showCredential: boolean;
  credentialUrl?: string;
  skills: string[];
  logo?: string;
  badge?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      id: 1,
      title: 'Angular Certified',
      issuer: 'Angular',
      issued: 'Nov 2024',
      showCredential: true,
      credentialUrl: 'https://certificates.dev/angular/certificates/b334b30b-37c0-4436-86f7-2c4fb397cd3d',
      skills: ['Angular'],
      logo: 'assets/svg/skills/angular.svg'
    },
    {
      id: 2,
      title: 'Kubernetes for App Developers',
      issuer: 'The Linux Foundation',
      issued: 'Nov 2024',
      showCredential: true,
      credentialUrl: 'https://www.credly.com/badges/6f62b0cb-46c4-4523-9fc7-ec8d1649f556/public_url',
      skills: ['Kubernetes', 'Docker'],
      badge: 'LF'
    },
    {
      id: 3,
      title: 'Level 1 Angular Certificate',
      issuer: 'Angular',
      issued: 'Oct 2023',
      showCredential: true,
      credentialUrl: 'https://certificates.dev/angular/certificates/4bb2fccb-4a3f-4159-b3be-2766dca4eea5',
      skills: ['Angular'],
      logo: 'assets/svg/skills/angular.svg'
    }
  ];
}
