import { create } from "../services/taskServices"

async function seed() {
  create(
    'Create Spotify playlist',
    'This playlist will contain Metallica, Megadeth and Three Days the Grace songs',
    'pending',
    '12/02/2025'
  )
}

seed().then(() => console.log('Db seeded!'))