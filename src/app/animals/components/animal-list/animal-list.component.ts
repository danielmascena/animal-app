import { Component, OnInit } from '@angular/core';
import { Observable, of} from "rxjs";
import { AnimalService } from '../../services/animal.service';

import { Animal } from '../../models/Animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animals$: Observable<Animal[]> | undefined;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animals$ = this.animalService.getAnimals();
  }

  updateAnimals(): void {
    this.getAnimals();
    console.log('update')
  }

  trackByFn (index: number, item: Animal) {
    return item.id;
  }
}
