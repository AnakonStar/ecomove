import {
  ArrowRight,
  Bike,
  Earth,
  Heart,
  HeartHandshake,
  Instagram,
  Leaf,
  Map,
  Share2,
  Sparkles,
  Trees,
  UserRound,
  Users,
} from "lucide-react";
import logo from "./assets/ecomove-logo.webp";

const heroImage =
  "https://public.youware.com/users-website-assets/prod/3cac6bb9-9b22-49c6-8fbe-24c6aca4d462/febadf591c2540f8b51f77bfb51c83a4.jpg";

const participateSteps = [
  {
    title: "Entre para o movimento",
    description:
      "Inscreva-se no Dia do Pedal e escolha quais causas seus quilômetros vão apoiar.",
    icon: Users,
  },
  {
    title: "Registre cada quilômetro",
    description:
      "Anote seus trajetos no nosso painel e transforme distância em impacto simbólico.",
    icon: Map,
  },
  {
    title: "Celebre a mudança",
    description:
      "Acompanhe seu impacto em tempo real e compartilhe marcos com a sua comunidade.",
    icon: Share2,
  },
];

const symbolicResults = [
  {
    label: "500 km pedalados",
    value: "= 500 árvores plantadas",
    icon: Trees,
    highlight: "🌳",
  },
  {
    label: "1.200 km registrados",
    value: "= 120 salas de aula apoiadas",
    icon: Leaf,
    highlight: "📚",
  },
  {
    label: "2.000 km celebrados",
    value: "= 200 oficinas culturais",
    icon: Earth,
    highlight: "🎭",
  },
];

const personas = [
  {
    name: "Comutadora consciente",
    description:
      "Clara transforma o trajeto diário em energia para reflorestamento urbano e inspira colegas a pedalar.",
    icon: UserRound,
    color: "from-emerald-400/20 via-emerald-200/10 to-sky-300/20",
  },
  {
    name: "Mentor da mobilidade",
    description:
      "Diego mobiliza a vizinhança com oficinas, ensinando manutenção básica e cultura do ciclismo seguro.",
    icon: HeartHandshake,
    color: "from-sky-400/20 via-emerald-200/10 to-lime-300/20",
  },
  {
    name: "Embaixadora estudantil",
    description:
      "Luana lidera desafios solidários na universidade e leva os dados simbólicos para propostas reais de impacto.",
    icon: Sparkles,
    color: "from-lime-400/20 via-emerald-200/10 to-sky-300/20",
  },
];

const galleryImages = [
  {
    src: "https://public.youware.com/users-website-assets/prod/3cac6bb9-9b22-49c6-8fbe-24c6aca4d462/d9416c6f8e5341a794687b0a823c34e8.jpg",
    alt: "Ciclistas pedalando por estrada rural envolta em neblina",
  },
  {
    src: "https://public.youware.com/users-website-assets/prod/3cac6bb9-9b22-49c6-8fbe-24c6aca4d462/e96d579849bd43408720a231f8784af6.jpg",
    alt: "Pessoa pedalando por alameda arborizada",
  },
  {
    src: "https://public.youware.com/users-website-assets/prod/3cac6bb9-9b22-49c6-8fbe-24c6aca4d462/a396f50d74b340ffbc72b171f7312ad2.jpg",
    alt: "Ciclista em curva de terra levantando poeira",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    handle: "@EcoMoveBikes",
    description:
      "Acompanhe bastidores, desafios e convites para pedais coletivos.",
    href: "https://www.instagram.com/ecomove_bikes?utm_source=qr&igsh=c2RoeWE4eWV2bDNq",
    icon: Instagram,
  },
  {
    name: "Stories ao vivo",
    handle: "Atualizações diárias",
    description:
      "Veja rotas em tempo real e participe de ativações sustentáveis.",
    href: "https://www.instagram.com/ecomove_bikes?utm_source=qr&igsh=c2RoeWE4eWV2bDNq",
    icon: Sparkles,
  },
  {
    name: "Link na bio",
    handle: "Materiais e kits",
    description:
      "Baixe apresentações, trilhas sonoras e kits para divulgar a campanha.",
    href: "https://www.instagram.com/ecomove_bikes?utm_source=qr&igsh=c2RoeWE4eWV2bDNq",
    icon: Share2,
  },
];

const testimonials = [
  {
    name: "Camila, ciclista urbana",
    quote:
      "Ir de bike para o trabalho já era bom, mas saber que meus trajetos plantam árvores deixa cada dia ainda mais especial.",
  },
  {
    name: "Ravi, ciclista de fim de semana",
    quote:
      "O marcador simbólico me mantém motivado. Cada quilômetro lembra que o progresso acontece pedal a pedal.",
  },
  {
    name: "Nina, estudante voluntária",
    quote:
      "1 Km, 1 Causa deu ao nosso campus o motivo perfeito para pedalar junto por um futuro mais verde.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header id="home" className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Ciclistas pedalando por uma trilha arborizada ao nascer do sol"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/85 to-sky-900/75" />
        <div className="relative px-6 py-8 sm:py-12 lg:py-20">
          <nav className="flex flex-wrap items-center justify-between gap-4 text-white max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logotipo EcoMove Bikes"
                className="h-12 w-12 rounded-full border border-white/30 bg-white/80 object-contain p-1"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                  EcoMove Bikes
                </p>
                <p className="font-semibold text-lg">1 Km, 1 Causa</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.2em]">
              <a className="hover:text-emerald-200 transition" href="#about">
                Sobre
              </a>
              <a
                className="hover:text-emerald-200 transition"
                href="#participate"
              >
                Participe
              </a>
              <a className="hover:text-emerald-200 transition" href="#impact">
                Impacto
              </a>
              <a
                className="hover:text-emerald-200 transition"
                href="#testimonials"
              >
                Vozes
              </a>
              <a className="hover:text-emerald-200 transition" href="#contact">
                Contato
              </a>
            </div>
          </nav>

          <div className="mx-auto grid max-w-6xl gap-10 pt-12 sm:pt-16 lg:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium tracking-[0.3em] uppercase backdrop-blur">
                Pedale pelo Planeta
                <ArrowRight className="size-4" />
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Pedale pelo planeta. Transforme quilômetros em impacto.
              </h1>
              <p className="max-w-xl text-lg text-emerald-100">
                Junte-se à EcoMove Bikes para transformar cada quilômetro em
                ações simbólicas que regeneram florestas, fortalecem comunidades
                e celebram a cultura.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#participate"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-900 shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-50"
                >
                  Comece a registrar
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#impact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:border-white"
                >
                  Conheça as causas
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
              <div className="space-y-6 rounded-2xl bg-white/90 p-6 text-emerald-900 shadow-lg shadow-emerald-900/20">
                <div className="flex items-center gap-4">
                  <Leaf className="size-12 rounded-full bg-emerald-100 p-3 text-emerald-600" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">
                      Ritmo da campanha
                    </p>
                    <p className="text-2xl font-semibold">
                      3.700 km simbolicamente comprometidos
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 text-sm text-emerald-700">
                  <p>
                    <span className="font-semibold">
                      Comunidades em destaque:
                    </span>{" "}
                    EcoVila Boqueirão, EcoVida Gonzaga, Comunidade Macuco
                  </p>
                  <p>
                    <span className="font-semibold">Causa do dia:</span>{" "}
                    Restaurar manguezais nativos em cidades costeiras.
                  </p>
                  <p>
                    <span className="font-semibold">Destaque da semana:</span>{" "}
                    150 ciclistas registraram o primeiro trajeto sustentável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-16 sm:py-20 lg:py-28">
        <section
          id="about"
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Sobre o projeto
              <Leaf className="size-4" />
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              1 Km, 1 Causa — pedaladas que viram impacto para o planeta.
            </h2>
            <p className="text-lg text-slate-600">
              A EcoMove Bikes convida ciclistas de todos os níveis a dedicar
              seus trajetos e conectá-los às causas que mais importam. Cada
              quilômetro se torna uma história de regeneração — do plantio
              simbólico de florestas ao apoio à educação e à cultura.
            </p>
            <p className="text-lg text-slate-600">
              Mesmo sendo uma campanha conceitual, a intenção é clara: mostrar
              como ações coletivas podem inspirar sustentabilidade no mundo
              real. Oferecemos narrativa, visual e motivação para imaginar um
              futuro mais limpo e justo.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 via-slate-100 to-sky-100 p-8 shadow-xl">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-200 blur-3xl" />
            <div className="absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-sky-200 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <Trees className="size-12 rounded-full bg-white p-3 text-emerald-600 shadow-inner" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">
                    Causas em foco
                  </p>
                  <p className="text-2xl font-semibold text-emerald-900">
                    Reflorestamento, justiça social, vitalidade cultural
                  </p>
                </div>
              </div>
              <ul className="grid gap-4 text-slate-700">
                <li className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm">
                  <Leaf className="mt-1 size-5 text-emerald-600" />
                  Corredores florestais simbólicos que reimaginam ecossistemas
                  prósperos.
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm">
                  <Users className="mt-1 size-5 text-emerald-600" />
                  Iniciativas comunitárias que promovem educação acessível e
                  justiça social.
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm">
                  <Earth className="mt-1 size-5 text-emerald-600" />
                  Programas culturais que honram saberes locais e patrimônios
                  sustentáveis.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="participate" className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Como participar
              <Bike className="size-4" />
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Um caminho simples do pedal ao propósito.
            </h2>
            <p className="text-lg text-slate-600">
              Siga o circuito, convide sua turma e deixe o painel simbólico
              celebrar cada quilômetro pedalado.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {participateSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-emerald-900/5 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-sky-50 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative space-y-4">
                    <Icon className="size-12 rounded-full bg-emerald-100 p-3 text-emerald-700" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="personas" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Personas EcoMove
                <UserRound className="size-4" />
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Rostos que dão sentido a cada quilômetro.
              </h2>
            </div>
            <p className="max-w-xl text-lg text-slate-600">
              Conheça quem leva a campanha adiante e como suas jornadas conectam
              bicicleta, comunidade e impacto ambiental.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((persona) => {
              const Icon = persona.icon;
              return (
                <article
                  key={persona.name}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-emerald-900/5 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 transition group-hover:opacity-100`}
                  />
                  <div className="relative space-y-4">
                    <Icon className="size-12 rounded-full bg-emerald-100 p-3 text-emerald-700" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      {persona.name}
                    </h3>
                    <p className="text-base text-slate-600">
                      {persona.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="impact" className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Resultados simbólicos
              <Earth className="size-4" />
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Resultados imaginados que acendem ações reais.
            </h2>
            <p className="text-lg text-slate-600">
              Nosso painel traduz sua quilometragem em histórias inspiradoras.
              Use os números para engajar a comunidade e criar parcerias no
              mundo real.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {symbolicResults.map((result) => {
              const Icon = result.icon;
              return (
                <article
                  key={result.label}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-sky-600 p-[1px] shadow-lg"
                >
                  <div className="rounded-[calc(1.5rem-1px)] bg-white p-8">
                    <div className="flex items-center gap-3">
                      <Icon className="size-10 rounded-full bg-emerald-100 p-2 text-emerald-700" />
                      <span className="text-2xl" aria-hidden="true">
                        {result.highlight}
                      </span>
                    </div>
                    <p className="pt-6 text-sm uppercase tracking-[0.3em] text-emerald-600">
                      {result.label}
                    </p>
                    <p className="text-2xl font-semibold text-slate-900">
                      {result.value}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="galeria" className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Galeria da campanha
              <Bike className="size-4" />
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Pedaladas reais que inspiram a jornada simbólica.
            </h2>
            <p className="text-lg text-slate-600">
              Cada clique celebra uma comunidade diversa unida pela bicicleta —
              dos dias de pedal coletivo às trilhas que criam histórias para
              contar.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="group relative overflow-hidden rounded-3xl shadow-lg shadow-emerald-900/5"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent p-4 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="testimonials" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Depoimentos
                <Heart className="size-4" />
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Vozes que pedalam junto.
              </h2>
            </div>
            <p className="max-w-xl text-lg text-slate-600">
              Ciclistas da comunidade EcoMove contam como um desafio simbólico
              gera impulso verdadeiro para um estilo de vida sustentável.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-emerald-900/5"
              >
                <p className="text-lg text-slate-700">“{testimonial.quote}”</p>
                <footer className="pt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-10">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Mantenha contato
              <Share2 className="size-4" />
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Vamos pedalar juntos nas redes?
            </h2>
            <p className="text-lg text-slate-600">
              Siga a EcoMove Bikes para receber convites de pedal, conteúdos
              educativos e chamadas para os próximos desafios simbólicos.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-emerald-900/10 transition hover:-translate-y-2 hover:shadow-emerald-900/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-sky-100/40 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative space-y-3">
                      <Icon className="size-10 rounded-full bg-emerald-100 p-2 text-emerald-700" />
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {social.name}
                        </h3>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                          {social.handle}
                        </p>
                      </div>
                      <p className="text-sm text-slate-600">
                        {social.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                        Abrir agora
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 max-w-6xl">
          <p>
            © {new Date().getFullYear()} EcoMove Bikes. Campanha conceitual para
            fins educativos.
          </p>
          <div className="flex items-center gap-4">
            <a className="hover:text-emerald-600" href="#home">
              Voltar ao topo
            </a>
            <span className="flex items-center gap-2">
              <Bike className="size-4 text-emerald-600" />
              Pedale junto pelo amanhã
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
