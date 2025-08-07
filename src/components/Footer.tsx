import React from 'react';

type Props = {};

const Footer: React.FC<Props> = () => {
  const links = [
    { href: "https://code.visualstudio.com/", text: "Visual Studio Code", aria: "Visual Studio Code (opens in a new tab)" },
    { href: "https://nextjs.org/", text: "Next.js", aria: "Next.js (opens in a new tab)" },
    { href: "https://tailwindcss.com/", text: "Tailwind CSS", aria: "Tailwind CSS (opens in a new tab)" },
];

  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        This portfolio was built with{' '}
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <a
              href={link.href}
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.aria}
            >
              {link.text}
            </a>
            {index < links.length - 1 && ', '}
            {/* {index === links.length - 2 && ', and] '} */}
          </React.Fragment>
        ))}
        , and deployed with{' '}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>
        . Made with passion and attention to detail.
      </p>
    </footer>
  );
};

export default Footer;
