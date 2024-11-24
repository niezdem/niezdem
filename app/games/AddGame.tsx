import { revalidatePath } from 'next/cache';
import { Button } from '@headlessui/react';

import { createGameItem, getUserInfo } from '@/app/games/utils';
import Text from '@/components/ui/Text';
import Input from '@/components/ui/Input';

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
      <fieldset disabled={!user} className="flex items-end gap-2">
        <Input
          label="Game's name"
          name="name"
          placeholder="e.g. Half-Life 3"
          type="text"
        />

        <select name="platform" id="platform">
          {platformTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <Input
          label="Date when I finished the game"
          name="finished_date"
          placeholder="e.g. Half-Life 3"
          type="date"
          defaultValue={currentDate}
        />

        <Button
          type="submit"
          className="h-[2.375rem] rounded bg-rose-500 px-4 py-2 text-sm text-white data-[active]:bg-rose-600 data-[hover]:bg-rose-400"
        >
          Add New Game
        </Button>
      </fieldset>
    </form>
  );
};

export default AddGame;
