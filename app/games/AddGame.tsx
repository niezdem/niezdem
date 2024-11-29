import { revalidatePath } from 'next/cache';

import { createGameItem, getUserInfo } from '@/app/games/utils';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

const platformTypes = [
  { name: 'PC', value: 'PC' },
  { name: 'Xbox', value: 'Xbox' },
  { name: 'PlayStation', value: 'PlayStation' },
  { name: 'Steam Deck', value: 'Steam Deck' },
  { name: 'Nintendo', value: 'Nintendo' },
];

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
    <form action={addGame} className="mb-8">
      <fieldset
        disabled={!user}
        className="flex flex-col gap-2 sm:flex-row sm:items-end"
      >
        <Input
          label="Game's name"
          name="name"
          placeholder="e.g. Half-Life 3"
          type="text"
        />

        <Select label="Platform" name="platform" options={platformTypes} />

        <Input
          label="Date when I finished the game"
          name="finished_date"
          placeholder="e.g. Half-Life 3"
          type="date"
          defaultValue={currentDate}
        />

        <Button type="submit">Add New Game</Button>
      </fieldset>
    </form>
  );
};

export default AddGame;
