import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
      { id: '11', name: 'Dr Nice', gender:'男',description:'aaaaa'},
      { id: '12', name: 'Narco', gender:'男',description:'bbbbb' },
      { id: '13', name: 'Bombasto', gender:'男',description:'ccccc' },
      { id: '14', name: 'Celeritas' , gender:'男',description:'ddddd'},
    ];
    return {persons};
  }
}
