const Footer = () => {
  const social = [
    {
      img: '/assets/youtube.svg',
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCjBWKPHYM_azisD60cO87xA',
    },
    {
      img: '/assets/twitter.png',
      name: 'twitter',
      url: 'https://twitter.com/obipolare',
    },
    {
      img: '/assets/instagram.svg',
      name: 'instagram',
      url: 'https://www.instagram.com/obipolare/',
    },
    {
      img: '/assets/twitch.png',
      name: 'twitch',
      url: 'https://www.twitch.tv/obipolare',
    },
    {
      img: '/assets/telegram.svg',
      name: 'telegram',
      url: 'https://t.me/obipolare',
    },
  ];
  return (
    <footer className="grid grid-cols-1 gap-4 px-4 py-6 transition duration-200 sm:grid-cols-3 sm:px-12 lg:px-28 bg-default-100">
      <div>
        <p className="text-2xl font-semibold">Obipolare 2021</p>
        <ul className="py-4">
          <li className="text-lg font-medium ">Website</li>
          <li className="text-lg font-medium ">Contact</li>
          <li className="text-lg font-medium ">Blog</li>
        </ul>
        <p>All rights Reserved © 2021</p>
      </div>
      <div className="grid grid-cols-3 col-span-1 gap-4 place-items-center sm:place-items-start sm:col-span-2 sm:grid-cols-6">
        <p className="col-span-3 text-2xl font-semibold sm:col-span-6">
          Social Media
        </p>
        {social.map(({ img, name, url }, idx) => {
          return (
            <a target="_blank" href={url} key={idx}>
              <figure className="w-12">
                <img src={img} alt={name} />
              </figure>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
