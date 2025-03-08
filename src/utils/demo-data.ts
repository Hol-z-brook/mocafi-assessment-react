import { type CreateUserSchema } from '@/src/data/model/user/User.schema'

const firstNames = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'Ethan',
  'Sophia',
  'Mason',
  'Isabella',
  'William',
  'Mia',
  'James',
  'Charlotte',
  'Alexander',
  'Amelia',
  'Michael',
  'Harper',
  'Benjamin',
  'Evelyn',
  'Daniel',
]

const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Gonzalez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Moore',
  'Jackson',
  'Martin',
]

const domains = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'example.com',
  'company.com',
  'business.net',
  'tech.io',
  'mail.org',
]

const genders: Array<'Male' | 'Female' | 'Rather not say'> = [
  'Male',
  'Female',
  'Rather not say',
]

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function generateRandomUser(): CreateUserSchema {
  const firstName = getRandomItem(firstNames)
  const lastName = getRandomItem(lastNames)
  const domain = getRandomItem(domains)

  // Create email with firstName.lastName format, all lowercase
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`

  return {
    name: `${firstName} ${lastName}`,
    email,
    gender: getRandomItem(genders),
  }
}
