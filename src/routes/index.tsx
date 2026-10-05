import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Menu,
  X,
  Droplets,
  Sparkles,
  Gem,
  ShieldCheck,
  ArrowRight,
  Instagram,
  MapPin,
  Mail,
  CheckCircle2,
} from "lucide-react";
import marbleHero from "@/assets/marble-hero.jpg";
import resinTexture from "@/assets/resin-texture.jpg";
import logoAsset from "@/assets/serresina-logo-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SERRESINA — L’Avenir du Design en Résine Époxy" },
      {
        name: "description",
        content:
          "SERRESINA — Résine époxy haute qualité, pigments métalliques dorés, finitions effet marbre et vernis céramique anti-rayures. Demandez votre devis personnalisé.",
      },
      { property: "og:title", content: "SERRESINA — L’Avenir du Design en Résine Époxy" },
      {
        property: "og:description",
        content:
          "Surfaces de luxe en résine époxy : pigments métalliques, effet marbre, vernis céramique. Devis personnalisé.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Scroll-reveal ---------- */

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ---------- Header ---------- */

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À Propos" },
  { id: "produits", label: "Produits" },
  { id: "devis", label: "Devis" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-2 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.8)]" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <button
          onClick={() => go("accueil")}
          className="flex shrink-0 items-center"
          aria-label="SERRESINA — retour à l’accueil"
        >
          <img src={logoAsset} alt="SERRESINA" className="h-10 w-auto sm:h-12" />
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="story-link text-[0.8rem] font-medium tracking-[0.22em] text-foreground/80 uppercase transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => go("devis")} className="btn-gold rounded-full px-6 py-2.5 text-[0.8rem] uppercase">
            Devis
          </button>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-primary/30 text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 lg:hidden"
          aria-label="Navigation mobile"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="rounded-xl px-4 py-3 text-left text-sm font-medium tracking-[0.18em] text-foreground/85 uppercase transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={marbleHero}
        alt="Marbre noir aux veines d’or"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_85%)] opacity-70" />

      {/* floating golden light blobs */}
      <div className="animate-float-slow absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
      <div
        className="animate-float-slow absolute right-1/5 bottom-0 h-80 w-80 rounded-full bg-gold-deep/20 blur-[100px]"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-32 pb-24 text-center sm:px-8">
        <img
          src={logoAsset}
          alt="SERRESINA"
          className="reveal mx-auto mb-10 h-16 w-auto sm:h-20"
        />
        <p className="reveal mb-6 text-[0.75rem] font-medium tracking-[0.5em] text-primary uppercase" style={{ transitionDelay: "100ms" }}>
          Résine Époxy · Surfaces de Luxe
        </p>
        <h1
          className="reveal font-display text-4xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl"
          style={{ transitionDelay: "200ms" }}
        >
          <span className="gold-text">L’Avenir du Design</span>
          <br />
          <span className="text-foreground">en Résine Époxy</span>
        </h1>
        <p
          className="reveal mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ transitionDelay: "300ms" }}
        >
          Nous transformons vos espaces en œuvres d’art durables grâce à des résines époxy
          haute technologie, des pigments métalliques et des finitions d’exception.
        </p>
        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ transitionDelay: "400ms" }}>
          <button
            onClick={() => scrollToId("produits")}
            className="btn-ghost-gold group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm uppercase"
          >
            Explorer
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToId("devis")}
            className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm uppercase"
          >
            Demander un Devis
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* gold vein accent line */}
      <div className="animate-vein absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/8 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <div className="glass absolute -inset-3 -z-10 rounded-[2rem] rotate-2" />
          <img
            src={resinTexture}
            alt="Résine époxy noire aux pigments dorés"
            className="aspect-[4/5] w-full rounded-[1.6rem] object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
            loading="lazy"
            width={1024}
            height={1280}
          />
          <div className="glass absolute -right-4 -bottom-6 rounded-2xl px-6 py-4 sm:-right-8">
            <p className="font-display text-3xl font-bold text-primary">100%</p>
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Sur mesure</p>
          </div>
        </div>

        <div>
          <p className="reveal text-[0.75rem] font-medium tracking-[0.4em] text-primary uppercase">À Propos</p>
          <h2 className="reveal mt-4 font-display text-3xl leading-snug font-bold sm:text-4xl" style={{ transitionDelay: "100ms" }}>
            L’excellence technique,
            <br />
            <span className="gold-text">au service du design</span>
          </h2>
          <p className="reveal mt-7 leading-relaxed text-muted-foreground" style={{ transitionDelay: "200ms" }}>
            Chez <span className="font-semibold text-foreground">SERRESINA</span>, nous croyons que chaque
            surface peut devenir une œuvre d’art. Notre mission : marier la performance des résines
            époxy haute technologie à l’esthétique des finitions les plus prestigieuses.
          </p>
          <p className="reveal mt-4 leading-relaxed text-muted-foreground" style={{ transitionDelay: "300ms" }}>
            Des comptoirs de cuisine aux sols architecturaux, nos formulations offrent une résistance
            exceptionnelle, une profondeur visuelle inégalée et une durabilité pensée pour traverser
            le temps — sans jamais compromettre l’élégance.
          </p>

          <div className="reveal mt-10 grid grid-cols-3 gap-4" style={{ transitionDelay: "400ms" }}>
            {[
              { value: "Haute", label: "Résistance" },
              { value: "Zéro", label: "Compromis" },
              { value: "Sur", label: "Mesure" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-5 text-center">
                <p className="font-display text-xl font-bold text-primary sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Products ---------- */

const PRODUCTS = [
  {
    icon: Droplets,
    title: "Résine Époxy Haute Qualité",
    description:
      "Formulations haute performance, autocapillantes et sans solvant : une profondeur de verre et une résistance mécanique exceptionnelles.",
  },
  {
    icon: Sparkles,
    title: "Pigments Métalliques & Dorés",
    description:
      "Une gamme de pigments nacrés, dorés et métalliques pour créer des effets de profondeur uniques, tissés au cœur de la résine.",
  },
  {
    icon: Gem,
    title: "Finitions Effet Marbre",
    description:
      "Le luxe du marbre, la robustesse de l’époxy : des veinages réalistes réalisés à la main, uniques pour chaque projet.",
  },
  {
    icon: ShieldCheck,
    title: "Vernis Céramique Anti-rayures",
    description:
      "Protection céramique de dernière génération : résistance aux rayures, aux UV et aux taches, brillance durable.",
  },
];

function Products() {
  return (
    <section id="produits" className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold-deep/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-[0.75rem] font-medium tracking-[0.4em] text-primary uppercase">Produits</p>
          <h2 className="reveal mt-4 font-display text-3xl font-bold sm:text-4xl" style={{ transitionDelay: "100ms" }}>
            Nos <span className="gold-text">Expertises</span>
          </h2>
          <p className="reveal mt-5 text-muted-foreground" style={{ transitionDelay: "200ms" }}>
            Quatre savoir-faire d’exception pour sublimer vos surfaces.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <article
              key={product.title}
              className="glass glow-card reveal group relative flex flex-col rounded-3xl p-7"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_-6px_var(--gold)]">
                <product.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg leading-snug font-semibold text-foreground">
                {product.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-auto pt-6">
                <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent transition-all duration-500 group-hover:from-primary" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Quote form ---------- */

const PROJECT_TYPES = [
  "Comptoir / Plan de travail",
  "Sol décoratif",
  "Table sur mesure",
  "Salle de bain",
  "Mur / Œuvre d’art",
  "Autre projet",
];

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const area = Number(data.get("area"));

    if (!name || !email) {
      setError("Veuillez renseigner votre nom et votre adresse e-mail.");
      return;
    }
    if (!Number.isFinite(area) || area <= 0) {
      setError("Veuillez indiquer une surface valide en m².");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass mx-auto max-w-xl rounded-3xl p-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" strokeWidth={1.4} />
        <h3 className="mt-6 font-display text-2xl font-semibold">Demande envoyée !</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Merci pour votre confiance. Notre équipe vous recontacte sous 24 à 48 h avec un devis
          personnalisé pour votre projet.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            formRef.current?.reset();
          }}
          className="btn-ghost-gold mt-8 rounded-full px-7 py-3 text-sm uppercase"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-onyx/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-ring";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="glass mx-auto max-w-3xl rounded-3xl p-7 sm:p-10" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-2 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Nom complet *
          </label>
          <input id="q-name" name="name" type="text" required maxLength={100} placeholder="Votre nom" className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-email" className="mb-2 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
            E-mail *
          </label>
          <input id="q-email" name="email" type="email" required maxLength={255} placeholder="vous@exemple.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-phone" className="mb-2 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Téléphone
          </label>
          <input id="q-phone" name="phone" type="tel" maxLength={30} placeholder="+33 6 00 00 00 00" className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-type" className="mb-2 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Type de projet
          </label>
          <select id="q-type" name="projectType" className={inputClass} defaultValue={PROJECT_TYPES[0]}>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-onyx">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="q-area" className="mb-2 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Surface estimée (m²) *
          </label>
          <input
            id="q-area"
            name="area"
            type="number"
            min={1}
            max={10000}
            step={0.5}
            required
            placeholder="Ex. : 12"
            className={inputClass}
          />
        </div>
      </div>

      {error && (
        <p className="mt-5 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
          {error}
        </p>
      )}

      <button type="submit" className="btn-gold mt-8 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm uppercase">
        Envoyer ma demande de devis
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Réponse sous 24 à 48 h · Devis gratuit et sans engagement
      </p>
    </form>
  );
}

function Devis() {
  return (
    <section id="devis" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 opacity-25">
        <img src={marbleHero} alt="" aria-hidden className="h-full w-full object-cover" loading="lazy" width={1920} height={1024} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-[0.75rem] font-medium tracking-[0.4em] text-primary uppercase">Écran de Devis</p>
          <h2 className="reveal mt-4 font-display text-3xl font-bold sm:text-4xl" style={{ transitionDelay: "100ms" }}>
            Votre projet, <span className="gold-text">sur mesure</span>
          </h2>
          <p className="reveal mt-5 text-muted-foreground" style={{ transitionDelay: "200ms" }}>
            Décrivez-nous votre projet en quelques secondes et recevez une estimation personnalisée.
          </p>
        </div>
        <div className="reveal mt-14" style={{ transitionDelay: "300ms" }}>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-primary/15 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={logoAsset} alt="SERRESINA" className="h-12 w-auto" loading="lazy" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              L’avenir du design en résine époxy. Surfaces de luxe, durabilité d’exception.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                France — interventions sur mesure
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                contact@serresina.fr
              </li>
              <li>
                <a
                  href="https://www.instagram.com/serresinalda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  @serresinalda
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-primary/10 pt-8 text-center">
          <div className="animate-vein h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-xs tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} SERRESINA — Tous droits réservés
          </p>
          <p className="text-[11px] uppercase tracking-[0.35em] text-primary/70">
            Fait par&nbsp;:{" "}
            <span className="font-semibold text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.55)]">
              souza404
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function Index() {
  useReveal();

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Devis />
      </main>
      <Footer />
    </div>
  );
}
