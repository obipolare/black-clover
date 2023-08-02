'use client';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

type Props = {
  id: number;
  name: string;
  img: string;
  birthdate: string;
  description: string;
};

export const CardCharacter = ({
  id,
  name,
  img,
  birthdate,
  description,
}: Props) => {
  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width="100%"
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-large">{name}</h4>
        <p className="">{description}</p>
        <small className="text-default-500">{birthdate}</small>
      </CardBody>
    </Card>
  );
};
