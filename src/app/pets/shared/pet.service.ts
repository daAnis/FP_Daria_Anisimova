import { Injectable } from '@angular/core';

import { PETS } from './mock-pets';

@Injectable()
export class PetService {
    getPets() {
        return Promise.resolve(PETS);
    }
}