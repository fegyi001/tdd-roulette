import { Person } from '../classes/Person'
import { InMemoryPersonGateway } from './InMemoryPersonGateway'
import { PersonNotFoundError } from './PersonNotFoundError'

describe('InMemoryPersonGateway test', () => {
  it('Dummy test', () => {
    expect(true).toBe(true)
  })

  it('save new person', () => {
    const gateway = new InMemoryPersonGatewaySpy()
    const person: Person = {
      id: 1,
      name: 'Person Name',
      balance: 0
    }
    expect(gateway.getAll().length).toEqual(0)
    gateway.save(person)
    const persons = gateway.getAll()
    expect(persons.length).toEqual(1)
    expect({ ...persons[0] }).toEqual({ ...person })
  })
})

it('save two persons', () => {
  const gateway = new InMemoryPersonGatewaySpy()
  const person1: Person = {
    id: 1,
    name: 'Person Name 1',
    balance: 0
  }
  gateway.save(person1)
  const person2: Person = {
    id: 2,
    name: 'Person Name 2',
    balance: 100
  }
  gateway.save(person2)
  const persons = gateway.getAll()
  expect(persons.length).toEqual(2)
  expect(persons.map((p) => p.id).includes(person1.id)).toBe(true)
  expect(persons.map((p) => p.id).includes(person2.id)).toBe(true)
})

it('save existing person', () => {
  const gateway = new InMemoryPersonGatewaySpy()
  const person: Person = {
    id: 1,
    name: 'Original Name ',
    balance: 0
  }
  gateway.save(person)
  const updatedPerson = { ...person, name: 'Modified Name', balance: 100 }
  gateway.save(updatedPerson)
  const persons = gateway.getAll()
  expect(persons.length).toEqual(1)
  expect({ ...persons[0] }).toEqual({ ...updatedPerson })
})

it('load non-existing person throws error', () => {
  const gateway = new InMemoryPersonGateway()
  expect(() => gateway.load(1)).toThrowError(PersonNotFoundError)
})

it('load existing person', () => {
  const gateway = new InMemoryPersonGateway()
  const person: Person = {
    id: 1,
    name: 'Person Name',
    balance: 0
  }
  gateway.save(person)
  const loadedPerson = gateway.load(person.id)
  expect({ ...loadedPerson }).toEqual({ ...person })
})

export class InMemoryPersonGatewaySpy extends InMemoryPersonGateway {
  getAll(): Person[] {
    return this.persons
  }
}
