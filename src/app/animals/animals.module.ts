import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AnimalItemComponent } from './components/animal-item';
import { AnimalListComponent } from './components/animal-list';


@NgModule({
  declarations: [
    AnimalItemComponent,
    AnimalListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [AnimalItemComponent, AnimalListComponent]
})
export class AnimalsModule { }
