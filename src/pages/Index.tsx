import { Phone, MapPin, Clock, Star, Shield, Heart, Smile, Baby, Sparkles, Stethoscope, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import clinicHero from "@/assets/clinic-hero.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const PHONE = "+7 (495) 123-45-67";
const PHONE_TEL = "+74951234567";
const ADDRESS = "Москва, ул. Примерная, д. 12";

const services = [
  { icon: Stethoscope, title: "Консультация и осмотр", price: "Бесплатно при лечении", desc: "Полная диагностика, план лечения, ответы на вопросы." },
  { icon: Sparkles, title: "Профессиональная гигиена", price: "от 4 500 ₽", desc: "Ультразвук, Air Flow, полировка, фторирование." },
  { icon: Smile, title: "Лечение кариеса", price: "от 3 900 ₽", desc: "Современные материалы, лечение под микроскопом." },
  { icon: Shield, title: "Имплантация", price: "от 35 000 ₽", desc: "Импланты Straumann, Osstem, Nobel. Гарантия." },
  { icon: Heart, title: "Протезирование", price: "от 18 000 ₽", desc: "Коронки, виниры, съёмные и несъёмные протезы." },
  { icon: Baby, title: "Детская стоматология", price: "от 2 500 ₽", desc: "Лечение без страха, врач находит подход к ребёнку." },
];

const reviews = [
  { name: "Анна К.", text: "Привела сюда всю семью — и мужа, и двоих детей. Спокойно, без давления, всё объясняют. Цены адекватные.", rating: 5 },
  { name: "Дмитрий С.", text: "Лечил кариес у Игоря Сергеевича. Всё аккуратно, без боли, дали гарантию. Рекомендую.", rating: 5 },
  { name: "Марина Л.", text: "Долго боялась стоматологов. Здесь нашли подход, теперь хожу только сюда. Чисто, современное оборудование.", rating: 5 },
  { name: "Екатерина П.", text: "Дочка 6 лет — обычно слёзы и истерика. С Анной Викторовной всё прошло спокойно, ребёнок просится ещё.", rating: 5 },
];

const doctors = [
  { name: "Анна Викторовна Смирнова", role: "Терапевт, детский стоматолог", exp: "12 лет опыта", img: doctor1 },
  { name: "Игорь Сергеевич Орлов", role: "Хирург-имплантолог", exp: "15 лет опыта", img: doctor2 },
  { name: "Мария Александровна Лебедева", role: "Ортодонт, гигиенист", exp: "9 лет опыта", img: doctor3 },
];

const process = [
  { step: "01", title: "Запись по телефону или онлайн", desc: "Подберём удобное время в течение дня." },
  { step: "02", title: "Бесплатная консультация", desc: "Осмотр, снимок, понятный план лечения с ценами." },
  { step: "03", title: "Лечение без боли", desc: "Современная анестезия, спокойная атмосфера." },
  { step: "04", title: "Гарантия и наблюдение", desc: "Гарантия на работы, контрольный визит бесплатно." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Smile className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Семейная Стоматология</div>
              <div className="hidden text-xs text-muted-foreground sm:block">Москва · с 2020 года</div>
            </div>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="hidden items-center gap-2 text-sm font-medium text-foreground hover:text-primary md:flex">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#zapis">Записаться</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <div className="container grid gap-10 py-12 md:grid-cols-2 md:py-20 md:gap-12 items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
              <Star className="h-3.5 w-3.5 fill-primary" /> 4,9 на Яндекс Картах · 180+ отзывов
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Семейная стоматология <br />в Москве — спокойно, без боли и переплат
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Принимаем взрослых и детей. Лечим, ставим импланты, делаем чистку. Бесплатная консультация и понятный план лечения с ценами на первом приёме.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#zapis">Записаться на приём</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary-soft">
                <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-4 w-4" /> {PHONE}</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
              <div><div className="text-2xl font-semibold text-primary">5</div><div className="text-muted-foreground">лет в районе</div></div>
              <div><div className="text-2xl font-semibold text-primary">12+</div><div className="text-muted-foreground">врачей</div></div>
              <div><div className="text-2xl font-semibold text-primary">2 года</div><div className="text-muted-foreground">гарантия</div></div>
            </div>
          </div>
          <div className="relative">
            <img src={clinicHero} alt="Интерьер семейной стоматологии в Москве" width={1536} height={1024}
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" style={{ aspectRatio: "4/3" }} />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-card p-4 shadow-[var(--shadow-card)] md:block">
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Работаем 7 дней в неделю
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Пн–Вс · 09:00 — 21:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="container grid gap-6 py-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: Star, title: "4,9 на Яндексе", sub: "180+ отзывов от пациентов" },
            { icon: Shield, title: "Лицензия и гарантия", sub: "Все работы — с гарантией до 2 лет" },
            { icon: Heart, title: "Семейный формат", sub: "Скидки семьям и постоянным пациентам" },
            { icon: Clock, title: "Быстрая запись", sub: "Перезваниваем за 15 минут" },
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-wider text-primary">Услуги и цены</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Что мы делаем</h2>
            <p className="mt-3 text-muted-foreground">Полный цикл лечения для всей семьи. Окончательная стоимость — после осмотра, без скрытых доплат.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">Цена</span>
                  <span className="font-semibold text-primary">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="vrachi" className="bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-wider text-primary">Команда</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Наши врачи</h2>
            <p className="mt-3 text-muted-foreground">Опытные специалисты, регулярно проходят обучение. Каждый врач принимает и взрослых, и детей.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {doctors.map((d, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
                <img src={d.img} alt={d.name} loading="lazy" width={640} height={800} className="aspect-[4/5] w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold">{d.name}</h3>
                  <div className="mt-1 text-sm text-primary">{d.role}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{d.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="otzyvy" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-wider text-primary">Отзывы</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Что говорят пациенты</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold">4,9</span>
              <span className="text-sm text-muted-foreground">на Яндекс Картах</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-3 text-foreground/90">«{r.text}»</p>
                <div className="mt-4 text-sm text-muted-foreground">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-wider text-primary">Как это работает</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">От записи до результата</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl bg-card p-6">
                <div className="text-sm font-semibold text-primary">{p.step}</div>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Contacts */}
      <section id="zapis" className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Записаться на приём</h2>
            <p className="mt-2 text-muted-foreground">Оставьте телефон — администратор перезвонит в течение 15 минут, подберёт удобное время и врача.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Телефон</label>
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Что беспокоит (необязательно)</label>
                <Textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Например: чистка, болит зуб, для ребёнка 7 лет" rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-xl font-semibold">Контакты</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-muted-foreground">{ADDRESS}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <a href={`tel:${PHONE_TEL}`} className="text-muted-foreground hover:text-primary">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Часы работы</div>
                    <div className="text-muted-foreground">Пн–Вс · 09:00 — 21:00</div>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-4 w-4" /> Позвонить сейчас</a>
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <iframe
                title="Карта"
                src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=14"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Семейная Стоматология · Москва</div>
          <div>Лицензия № ЛО-77-01-000000 от 01.01.2020</div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <a href={`tel:${PHONE_TEL}`} className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] md:hidden" aria-label="Позвонить">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
