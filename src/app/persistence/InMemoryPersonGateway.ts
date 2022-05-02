import { Person } from '../classes/Person'
import { PersonPersistenceGateway } from '../classes/PersonPersistenceGateway'
import { PersonNotFoundError } from './PersonNotFoundError'

export class InMemoryPersonGateway implements PersonPersistenceGateway {
  protected persons: Person[] = []

  public load(id: number): Person {
    const existingPersonIndex = this.existingPersonId(id)
    if (existingPersonIndex !== -1) {
      return this.persons[existingPersonIndex]
    } else {
      throw new PersonNotFoundError(`${id}`)
    }
  }

  public save(person: Person): void {
    const existingIndex = this.existingPersonId(person.id)
    if (existingIndex !== -1) {
      this.persons[existingIndex] = person
    } else {
      this.persons.push(person)
    }
  }

  private existingPersonId(personId: number) {
    return this.persons.findIndex((p) => p.id === personId)
  }
}
