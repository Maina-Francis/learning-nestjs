import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interfaces';

@Injectable() //The @Injectable() decorator marks a class as a provider.
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
