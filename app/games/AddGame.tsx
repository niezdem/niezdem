import { revalidatePath } from 'next/cache';
import { createGameItem, getUserInfo } from '@/app/games/utils';

const platformTypes = ['PC', 'Xbox', 'PlayStation', 'Steam Deck', 'Nintendo'];

const AddGame = async () => {
  const user = await getUserInfo();

  const addGame = async (formData: FormData) => {
    'use server';
    const name = formData.get('name');
    const finishedDate = formData.get('finished_date');
    const platform = formData.get('platform') as any;

    if (name && finishedDate) {
      await createGameItem({
        name: name.toString(),
        platform,
        finishedDate: finishedDate.toString(),
      });
      revalidatePath('/games');
    }
  };

  const date = new Date();
  const currentDate = date.toISOString().slice(0, 10);

  return (
    <form action={addGame} className="text-black">
      <fieldset disabled={!user}>
        <input name="name" placeholder="Game's name" defaultValue="" />

        <select name="platform" id="platform">
          {platformTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <input
          name="finished_date"
          type="date"
          placeholder="Date when I finished the game"
          defaultValue={currentDate}
        />

        <button type="submit" className="bg-rose-500">
          add new game
        </button>
      </fieldset>
    </form>
  );
};

export default AddGame;
