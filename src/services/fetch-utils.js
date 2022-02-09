import { client, checkError } from './client';

export async function getPokemon(from = 0, to = 50, search) {
  if (!search) {
    const response = await client.from('pokedex').select().range(from, to);
    console.log(response);
    return checkError(response);
  } else {
    const response = await client
      .from('pokedex')
      .select()
      .range(from, to)
      .ilike('pokemon', `%${search}%`);
    console.log('I have a search', checkError(response));
    return checkError(response);
  }
}

export async function getSinglePokemon(id) {
  const response = await client.from('pokedex').select().match({ id }).single();
  return checkError(response);
}
