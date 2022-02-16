import { Component, OnInit, Input } from '@angular/core';

import { Animal } from '../../models/Animal.model';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent implements OnInit {

  @Input() animal: Animal | null = null;

  constructor() { }

  ngOnInit(): void {}

}
