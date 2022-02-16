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

  animals$: Observable<Animal[]> = of([]);
  //animals: Animal[] = [];
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animals$ = this.animalService.getAnimals();
    //this.animalService.getAnimals().subscribe( (animal: Animal[]) => this.animals = animal);
  }

  getAnimals($event: any): void {
    const res = this.animalService.getAnimals();
    console.log(this.animals$ === res, $event);
  }

  trackByFn (index: number, item: Animal) {
    return item.id;
  }
}
