import { User } from './model/user/User.model'

// Declare a global type for our store
declare global {
  var __store: {
    users: User[]
    nextId: number
  }
}

// Initialize the store in global scope if it doesn't exist
if (!global.__store) {
  global.__store = {
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        gender: 'Male',
        status: 'active',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        gender: 'Female',
        status: 'active',
      },
    ],
    nextId: 3,
  }
}

function logUsers(operation: string) {
  console.log(`\n[Store ${operation}] Current users:`)
  console.table(global.__store.users)
  console.log(`Total users: ${global.__store.users.length}`)
}

// Log initial state
logUsers('Initial State')

// CRUD operations
export const store = {
  // Create
  createUser: (user: Omit<User, 'id' | 'status'>): User => {
    const newUser: User = {
      ...user,
      id: global.__store.nextId++,
      status: 'active',
    }
    global.__store.users.push(newUser)
    logUsers('Create')
    return newUser
  },

  // Read
  getUsers: (): User[] => {
    logUsers('Read')
    return [...global.__store.users] // Return a copy to prevent direct mutations
  },

  getUserById: (id: number): User | undefined => {
    const user = global.__store.users.find((user) => user.id === id)
    console.log(`\n[Store GetById] Fetching user ${id}:`, user)
    return user
  },

  // Update
  updateUser: (
    id: number,
    updates: Partial<Omit<User, 'id'>>
  ): User | undefined => {
    const index = global.__store.users.findIndex((user) => user.id === id)
    if (index === -1) return undefined

    global.__store.users[index] = { ...global.__store.users[index], ...updates }
    logUsers('Update')
    return global.__store.users[index]
  },

  // Delete
  deleteUser: (id: number): boolean => {
    const index = global.__store.users.findIndex((user) => user.id === id)
    if (index === -1) return false

    global.__store.users.splice(index, 1)
    logUsers('Delete')
    return true
  },
}
