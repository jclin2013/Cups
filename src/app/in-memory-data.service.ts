import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const cups = [
      {
        id: 1,
        name: 'Starbucks',
        material: 'glass',
        display: 'large'
      },
      {
        id: 2,
        name: 'Dunkin Donuts',
        material: 'paper',
        display: 'medium'
      },
      {
        id: 3,
        name: 'Krispy Kreme',
        material: 'ceramic',
        display: 'small'
      },
      {
        id: 4,
        name: 'Panera Bread',
        material: 'paper',
        display: 'medium'
      },
      {
        id: 5,
        name: "McDonald's",
        material: 'paper',
        display: 'large'
      },
      {
        id: 6,
        name: "Wendy's",
        material: 'paper',
        display: 'small'
      },
      {
        id: 7,
        name: "Coffee Heaven",
        material: 'glass',
        display: 'large'
      },
      {
        id: 8,
        name: 'Burger King',
        material: 'ceramic',
        display: 'small'
      },
      {
        id: 9,
        name: 'Folgers',
        material: 'glass',
        display: 'medium'
      },
      {
        id: 10,
        name: '7-Eleven',
        material: 'paper',
        display: 'large'
      }
    ];
    return {cups};
  }
}
