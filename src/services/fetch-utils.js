import { client, checkError } from './client';

export async function getPokemon(start, end, search) {
  if (!search) {
    const response = await client.from('pokedex').select().range(start, end);
    return checkError(response);
  } else {
    const response = await client
      .from('pokedex')
      .select()
      .range(start, end)
      .ilike('pokemon', `%${search}%`);
    return checkError(response);
  }
}

export async function getSinglePokemon(id) {
  const response = await client.from('pokedex').select().match({ id }).single();
  return checkError(response);
}
