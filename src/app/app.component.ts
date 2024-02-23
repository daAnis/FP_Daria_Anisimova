import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { PetsComponent } from './pets/pets.component';
import { PetService } from './pets/shared/pet.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PetsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PetService]
})
export class AppComponent {
  title = 'animal-search-app';
}
