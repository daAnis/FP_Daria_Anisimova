import { Component, OnInit } from '@angular/core';
import { PetService } from './shared/pet.service';
import { Pet } from './shared/pet.model';

@Component({
  selector: 'pets',
  standalone: true,
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) {};

  ngOnInit() {
    this.petService.getPets()
      .then(pets => this.pets = pets);
  };

  selectedPetId = 0;

  onSelectPet(id: number) {
    if (this.selectedPetId == id) {
      this.selectedPetId = 0;
    } else {
      this.selectedPetId = id;
    }
  };

  catsOn = true;

  toogleCats() {
    this.catsOn = !this.catsOn;
  };

}