import { Image } from '@nextui-org/react';
import { CardCharacter } from '../components/CardCharacter';

export const metadata = {
  title: 'Black Clover / Characters',
};

export default async function Page() {
  const loading = false;

  const url = new URL(
    'https://my-json-server.typicode.com/obipolare/json-db/db'
  );
  const res = await fetch(url.href);
  const { characters } = (await res.json()) as {
    characters: {
      id: number;
      name: string;
      img: string;
      birthdate: string;
      description: string;
    }[];
  };

  return (
    <section className="grid w-11/12 grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3">
      {/* // <section className="mt-12 pinterest-container"> */}
      {loading ? (
        <figure className="flex items-center justify-center w-full h-screen col-span-3">
          <img width={180} src="/assets/loading.svg" alt="Imagen de loading" />
        </figure>
      ) : (
        characters.map(({ id, name, img, birthdate, description }) => {
          return (
            <CardCharacter
              id={id}
              key={id}
              name={name}
              img={img}
              birthdate={birthdate}
              description={description}
            />
          );
        })
      )}
    </section>
  );
}
