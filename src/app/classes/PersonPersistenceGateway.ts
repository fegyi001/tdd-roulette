import { Person } from './Person'

export interface PersonPersistenceGateway {
  save(person: Person): void
  load(id: number): Person
}
