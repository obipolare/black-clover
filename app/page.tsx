'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { Image } from '@nextui-org/react';

export const metadata = {
  title: 'Black Clover / Home',
};

export default function Home() {
  return (
    <section className="duration-200 grid grid-cols-2 transtision place-items-center">
      <div className="flex flex-col gap-4">
        <article className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold">Black Clover</h1>
          <p className="font-semibold text-lg">¿Qué personajes buscas?</p>
        </article>
        <article className="flex">
          <p className="text-lg">
            Esta pagina te ayudara a conocer tus personajes favoritos de Black
            Clover , ademas te entaras de las Curiosidades que no sabias de este
            maravilloso Anime
          </p>
        </article>
        <div className="flex gap-4">
          <Link href="/characters">
            <Button color="primary">Personajes</Button>
          </Link>
          <Link href="/characters">
            <Button color="primary">Secretos</Button>
          </Link>
        </div>
      </div>

      <figure>
        <Image
          src="/assets/liebe.jpg"
          className="w-full"
          alt="Liebe"
          width={600}
        />
      </figure>
    </section>
  );
}
