
export interface Animal {
  type: string;
  avatar: string;
  name: string;
  id: string;
}

export type AnimalResponse = {
 items: Animal[];
 success: boolean;
}

export enum AnimalType {
  CAT = "cat",
  FISH = "fish",
  CETACEAN = "cetacean",
  COW = "cow",
  BEAR = "bear",
  DOG = "dog",
  SNAKE = "snake",
  HORSE = "horse"
}

export type ErrorMessage = {
  error: { message: string; };
  status: any;
  message: any;
};
