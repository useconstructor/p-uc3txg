import Image from "next/image";

const drinks = [
  {
    name: "Smoked Maple Latte",
    description: "Double espresso, maple, sea salt, and silky oat milk.",
    price: "$6.50",
    tag: "House favorite",
  },
  {
    name: "Brown Sugar Cortado",
    description: "Equal parts espresso and steamed milk with raw brown sugar.",
    price: "$5.25",
    tag: "Rich & balanced",
  },
  {
    name: "Orange Blossom Cold Brew",
    description: "18-hour cold brew, orange blossom, and vanilla cold foam.",
    price: "$6.00",
    tag: "Bright & smooth",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream text-espresso">
      <section className="relative min-h-[760px] bg-espresso text-cream lg:min-h-screen">
        <Image
          src="/images/hero-coffee.jpg"
          alt="A carefully poured latte beside roasted coffee beans"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] opacity-55"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="noise absolute inset-0 opacity-25" />

        <header className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-12 lg:px-20">
          <a href="#top" aria-label="Roast and Brew home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-caramel/60">
              <span className="text-lg">☕</span>
            </span>
            <span className="font-display text-xl tracking-[0.04em]">Roast <i className="font-normal text-caramel">&</i> Brew</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[0.22em] md:flex">
            <a className="nav-link" href="#menu">Menu</a>
            <a className="nav-link" href="#story">Our story</a>
            <a className="nav-link" href="#visit">Visit</a>
          </nav>
          <a href="#visit" className="rounded-full border border-cream/50 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:bg-cream hover:text-espresso md:px-6">
            Find us
          </a>
        </header>

        <div id="top" className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] items-center px-6 pb-20 md:px-12 lg:px-20">
          <div className="max-w-[720px] pt-16 md:pt-8">
            <p className="mb-6 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-caramel">
              <span className="h-px w-10 bg-caramel" /> Small batch · thoughtfully made
            </p>
            <h1 className="font-display text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.055em]">
              Slow down.<br /><i className="font-normal text-caramel">Sip well.</i>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-8 text-cream/75 md:text-lg">
              Exceptional coffee, roasted with patience and served with warmth in the heart of the neighborhood.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#menu" className="group flex items-center gap-3 rounded-full bg-caramel px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-espresso transition hover:bg-cream">
                Explore our menu <ArrowIcon />
              </a>
              <span className="text-xs tracking-[0.12em] text-cream/60">Open daily · 7am—6pm</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-10 hidden border-l border-t border-cream/20 bg-espresso/55 px-10 py-7 backdrop-blur-md lg:block">
          <p className="text-[10px] uppercase tracking-[0.25em] text-caramel">Currently pouring</p>
          <p className="mt-2 font-display text-xl">Ethiopia · Guji Natural</p>
        </div>
      </section>

      <section id="menu" className="relative px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-caramel/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="grid items-end gap-8 border-b border-espresso/15 pb-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">From behind the bar</p>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-tight md:text-7xl">Worth lingering <i className="font-normal text-rust">over.</i></h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-espresso/65 md:justify-self-end md:text-base">
              Our menu follows the seasons. Every drink begins with responsibly sourced beans, roasted in small batches each week.
            </p>
          </div>

          <div className="grid gap-5 pt-10 lg:grid-cols-[1.3fr_1fr]">
            <article className="group relative min-h-[510px] overflow-hidden rounded-[2px] bg-espresso text-white">
              <Image src="/images/cappuccino.jpg" alt="Cappuccino with delicate latte art" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7 md:p-10">
                <div>
                  <span className="mb-4 inline-block rounded-full bg-cream px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-espresso">Barista&apos;s pick</span>
                  <h3 className="font-display text-4xl md:text-5xl">Honey Cinnamon<br />Flat White</h3>
                  <p className="mt-3 text-sm text-white/70">Wildflower honey · Ceylon cinnamon · $6.25</p>
                </div>
              </div>
            </article>
            <div className="flex flex-col bg-white/60 px-6 md:px-10">
              {drinks.map((drink) => (
                <article key={drink.name} className="border-b border-espresso/15 py-8 last:border-0">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-rust">{drink.tag}</p>
                      <h3 className="font-display text-2xl">{drink.name}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-espresso/60">{drink.description}</p>
                    </div>
                    <span className="font-display text-lg text-rust">{drink.price}</span>
                  </div>
                </article>
              ))}
              <a href="#visit" className="mt-auto mb-4 flex items-center gap-3 self-start py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-rust hover:text-espresso">View full menu <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-espresso px-6 py-24 text-cream md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="relative pb-8 pr-8">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/cafe-interior.jpg" alt="The warmly lit interior of Roast and Brew" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 grid h-32 w-32 place-items-center rounded-full bg-caramel text-center text-espresso md:h-40 md:w-40">
              <p className="font-display text-sm italic leading-5">Roasting with<br /><span className="text-3xl not-italic">care</span><br />since 2018</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-caramel">More than a morning ritual</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">Coffee with a <i className="font-normal text-caramel">conscience.</i></h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-cream/65">
              We started Roast & Brew with a simple belief: great coffee should feel good in every sense. That means knowing our farmers, paying fairly, and coaxing the very best from every bean.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-cream/65">
              Our space was built for unhurried mornings, afternoon ideas, and conversations that deserve another cup.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-cream/15 pt-8">
              <div><strong className="font-display text-3xl text-caramel">12</strong><p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/50">Farm partners</p></div>
              <div><strong className="font-display text-3xl text-caramel">100%</strong><p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/50">Traceable beans</p></div>
              <div><strong className="font-display text-3xl text-caramel">7</strong><p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-cream/50">Days a week</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-caramel/25 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden bg-cream shadow-[0_30px_80px_rgba(44,24,16,0.12)] lg:grid-cols-2">
          <div className="relative min-h-[380px]">
            <Image src="/images/croissant.jpg" alt="Fresh flaky croissants on a bakery tray" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16">
            <p className="eyebrow">Baked here, every morning</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Good coffee deserves a <i className="font-normal text-rust">proper pastry.</i></h2>
            <p className="mt-6 text-sm leading-7 text-espresso/65">Our bakers start before sunrise—folding cultured butter into croissants, glazing seasonal buns, and making sure your favorite is warm when you arrive.</p>
            <p className="mt-6 font-display text-xl italic text-rust">Try the brown butter morning bun.</p>
          </div>
        </div>
      </section>

      <section id="visit" className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Come stay awhile</p>
              <h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">Your corner<br />is <i className="font-normal text-rust">waiting.</i></h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="detail-label">Find us</p>
                  <address className="mt-3 text-sm not-italic leading-7 text-espresso/65">1428 Alder Street<br />Portland, OR 97205</address>
                  <a href="tel:+15035550184" className="mt-2 block text-sm text-rust">(503) 555-0184</a>
                </div>
                <div>
                  <p className="detail-label">Hours</p>
                  <p className="mt-3 text-sm leading-7 text-espresso/65">Mon—Fri&nbsp;&nbsp; 7am—6pm<br />Sat—Sun&nbsp;&nbsp; 8am—6pm</p>
                  <a href="mailto:hello@roastandbrew.com" className="mt-2 block text-sm text-rust">hello@roastandbrew.com</a>
                </div>
              </div>
            </div>
            <div className="relative min-h-[450px] overflow-hidden bg-[#dccdb9]">
              <div className="map-grid absolute inset-0 opacity-60" />
              <svg aria-hidden="true" viewBox="0 0 600 420" className="absolute inset-0 h-full w-full text-espresso/20" fill="none" stroke="currentColor">
                <path d="M-20 110C100 75 175 150 280 112S460 35 640 90M-30 320c130-90 210-45 315-85s177-28 340-140" strokeWidth="18" />
                <path d="M105-30c20 120-15 210 20 305s120 130 125 180M465-20c-60 120-25 205-75 280s-15 140 30 190" strokeWidth="8" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-espresso text-xl text-caramel shadow-xl">☕</div>
                <div className="mt-3 bg-cream px-5 py-3 shadow-lg"><p className="font-display text-lg">Roast & Brew</p><p className="text-[9px] uppercase tracking-[0.18em] text-rust">West End · Portland</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#21110c] px-6 pb-8 pt-20 text-cream md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 border-b border-cream/15 pb-16 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="font-display text-4xl md:text-5xl">A better morning,<br /><i className="font-normal text-caramel">in your inbox.</i></p>
              <p className="mt-4 text-sm text-cream/50">Seasonal drinks, fresh roasts, and good news. Occasionally.</p>
            </div>
            <form className="flex border-b border-cream/40" action="#" method="post">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" required placeholder="YOUR EMAIL ADDRESS" className="min-w-0 flex-1 bg-transparent py-5 text-xs tracking-[0.18em] text-cream outline-none placeholder:text-cream/35" />
              <button type="submit" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-caramel hover:text-cream">Join the list <ArrowIcon /></button>
            </form>
          </div>
          <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-2xl">Roast <i className="font-normal text-caramel">&</i> Brew</p>
            <div className="flex items-center gap-7 text-[10px] font-bold uppercase tracking-[0.18em] text-cream/55">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-caramel"><InstagramIcon /> Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-caramel">Facebook</a>
              <a href="mailto:hello@roastandbrew.com" className="hover:text-caramel">Email</a>
            </div>
            <p className="text-[9px] uppercase tracking-[0.15em] text-cream/35">© 2026 Roast & Brew</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
