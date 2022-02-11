import { client, checkError } from './client';

export async function getPokemon(start, end, search) {
  if (!search) {
    const response = await client.from('pokedex').select().range(start, end);
    console.log(response);
    return checkError(response);
  } else {
    const response = await client
      .from('pokedex')
      .select()
      .range(start, end)
      .ilike('pokemon', `%${search}%`);
    // console.log('I have a search', checkError(response));
    return checkError(response);
  }
}

export async function getSinglePokemon(id) {
  const response = await client.from('pokedex').select().match({ id }).single();
  return checkError(response);
}
