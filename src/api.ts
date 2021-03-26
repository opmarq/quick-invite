
export interface IUser {
  firstName: string
  lastName: string
  email: string
  id: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const ErrorRegex = /error/gi

const Users = [
  {
    firstName: 'Tima',
    lastName: 'tom',
    id: (Math.random() * 1000).toString(),
    email: 'tima@mail.com'
  },
  {
    firstName: 'Tata',
    lastName: 'Toto',
    id: (Math.random() * 1000).toString(),
    email: 'tata@gmail.com'
  },
  {
    firstName: 'Jhone',
    lastName: 'doe',
    id: (Math.random() * 1000).toString(),
    email: 'joe@mail.com'
  },
  {
    firstName: 'Omar',
    lastName: 'Chajia',
    id: (Math.random() * 1000).toString(),
    email: 'omar@gmail.com'
  }
]

const normalize = (input: string): string => {
  return input.trim().toLowerCase()
}

export const searchUser = async (input: string): Promise<IUser[]> => {
  const normalized = normalize(input)

  await delay(200 + Math.random() * 200)

  if (normalized.match(ErrorRegex)) {
    throw new Error('Backend failed for some reasons.')
  }

  if (!normalized) {
    return []
  }

  return Users.filter(({ firstName, lastName, email }) => {
    if (email === normalized) {
      return true
    }

    if (normalize(firstName).startsWith(normalized)) {
      return true
    }

    if (normalize(lastName).startsWith(normalized)) {
      return true
    }

    return false
  })
}

export const sendInvitation = async (ids: Array<string>): Promise<string[]> => {
  await delay(200 + Math.random() * 200);
  return ids;
}