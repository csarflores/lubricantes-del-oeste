export default function Head() {
  return (
    <>
      {/*Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-CZJF2HP0F7`}

        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CZJF2HP0F7');
      `,
        }}
      />
      <title>Lubricantes del Oeste</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/images/favicon.ico" />

    </>
  );
}
