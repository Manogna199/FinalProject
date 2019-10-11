import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Technologies } from '../models/technologies.model';
import { TechnologiesService } from './technologies.service';

@Component({
  templateUrl: './technologiespage.component.html'
})
export class TechnologiespageComponent {

  technologies: Technologies = new Technologies();

  constructor(private router: Router, private technologiesService: TechnologiesService) {

  }

  createTechnologies(): void {
    this.technologiesService.createUser(this.technologies)
        .subscribe( data => {
          alert("Technologies record created successfully.");
        });

  };

}
