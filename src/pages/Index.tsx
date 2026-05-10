import { Phone, MapPin, Clock, Star, ShieldCheck, Users, Stethoscope, Baby, Sparkles, Smile, Activity, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const PHONE = "+7 (495) 123-45-67";
const PHONE_HREF = "tel:+74951234567";
const ADDRESS = "Москва, ул. Примерная, д. 12";

const services = [
  { icon: Stethoscope, title: "Терапия и лечение кариеса", desc: "Лечение зубов под микроскопом, безболезненная анестезия.", price: "от 3 500 ₽" },
  { icon: Sparkles, title: "Профессиональная гигиена", desc: "Чистка Air Flow, ультразвук, полировка и фторирование.", price: "от 4 900 ₽" },
  { icon: Smile, title: "Эстетическая стоматология", desc: "Виниры, отбеливание, реставрация передних зубов.", price: "от 12 000 ₽" },
  { icon: Activity, title: "Хирургия и имплантация", desc: "Удаление, имплантаты Osstem, Straumann. Гарантия.", price: "от 25 000 ₽" },
  { icon: ShieldCheck, title: "Протезирование", desc: "Коронки, мосты, съёмные протезы. Цифровой слепок.", price: "от 18 000 ₽" },
  { icon: Baby, title: "Детская стоматология", desc: "Бережный приём с 3 лет. Лечение в игровой форме.", price: "от 2 500 ₽" },
];

const reviews = [
  { name: "Ирина М.", text: "Ходим всей семьёй уже 3 года. Врачи внимательные, ребёнок не боится — а это для нас главное.", rating: 5 },
  { name: "Алексей К.", text: "Поставили имплант — всё чётко, без боли. Цена соответствует качеству, рассказали обо всех этапах.", rating: 5 },
  { name: "Ольга П.", text: "Делала чистку и отбеливание. Аккуратно, аккуратный персонал, удобное время записи.", rating: 5 },
];

const process = [
  { step: "01", title: "Запись на приём", desc: "По телефону или через форму на сайте — подберём удобное время." },
  { step: "02", title: "Осмотр и диагностика", desc: "Бесплатная консультация, снимок, план лечения с ценами." },
  { step: "03", title: "Лечение", desc: "Согласуем все этапы заранее. Без навязанных услуг." },
  { step: "04", title: "Гарантия и контроль", desc: "Гарантия на работы. Бесплатный осмотр через 3 месяца." },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена", description: "Мы перезвоним в ближайшее время." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Smile className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-base leading-tight">Семейная Стоматология</div>
              <div className="text-xs text-muted-foreground">Клиника в Москве</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="hover:text-primary transition-colors">Врачи</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={PHONE_HREF}><Phone className="w-4 h-4 mr-2" />Позвонить</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card shadow-card text-sm mb-6">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-medium">4.9 на Яндекс.Картах</span>
              <span className="text-muted-foreground">· 5 лет работы</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Семейная стоматология,<br />которой доверяют
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Лечим взрослых и детей в одной клинике. Прозрачные цены, опытные врачи и спокойная атмосфера — без боли и давления.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base">
                <a href="#form">Записаться на приём</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <a href={PHONE_HREF}><Phone className="w-4 h-4 mr-2" />{PHONE}</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" />Бесплатная консультация</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" />Гарантия на работы</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" />Рассрочка 0%</div>
            </div>
          </div>
          <div className="relative">
            <Card className="p-6 shadow-soft">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Сегодня свободны окна</div>
                  <div className="text-sm text-muted-foreground">Запись на ближайшие дни — обычно подтверждаем за 15 минут.</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { time: "10:30", doc: "Терапия — Иванова А.В." },
                  { time: "13:00", doc: "Гигиена — Петрова М.С." },
                  { time: "16:45", doc: "Детский приём — Сидоров К.Н." },
                ].map((s) => (
                  <div key={s.time} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <div>
                      <div className="font-semibold">{s.time}</div>
                      <div className="text-xs text-muted-foreground">{s.doc}</div>
                    </div>
                    <Button asChild size="sm" variant="outline"><a href="#form">Занять</a></Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust / Reviews */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-14">
            {[
              { num: "5 лет", label: "работаем в районе" },
              { num: "4.9", label: "на Яндекс.Картах" },
              { num: "12 000+", label: "пациентов" },
              { num: "8", label: "врачей в команде" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">Отзывы пациентов</h2>
          <p className="text-muted-foreground mb-10">Реальные отзывы с Яндекс.Карт и 2ГИС</p>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 shadow-card">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div className="text-sm font-semibold">{r.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20 bg-secondary/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Услуги</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">Полный спектр стоматологической помощи для всей семьи.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="p-6 shadow-card hover:shadow-soft transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">Цена</span>
                  <span className="font-semibold text-primary">{s.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Наши врачи</h2>
          <p className="text-muted-foreground mb-10">Стаж от 8 лет, регулярное повышение квалификации.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Иванова Анна Викторовна", role: "Стоматолог-терапевт", exp: "Стаж 14 лет" },
              { name: "Петрова Мария Сергеевна", role: "Гигиенист, ортодонт", exp: "Стаж 9 лет" },
              { name: "Сидоров Кирилл Николаевич", role: "Детский стоматолог", exp: "Стаж 11 лет" },
            ].map((d) => (
              <Card key={d.name} className="p-6 shadow-card">
                <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div className="font-semibold mb-1">{d.name}</div>
                <div className="text-sm text-primary mb-1">{d.role}</div>
                <div className="text-sm text-muted-foreground">{d.exp}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Как проходит лечение</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step}>
                <div className="text-3xl font-bold text-primary mb-3">{p.step}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16 md:py-20" aria-labelledby="prices">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div id="prices">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись и расчёт стоимости</h2>
            <p className="text-muted-foreground mb-6">
              Оставьте заявку — администратор перезвонит, подберёт врача и удобное время. Назовём примерную стоимость по вашему случаю.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Бесплатная первичная консультация",
                "Подробный план лечения с ценами",
                "Без навязанных услуг",
                "Рассрочка 0% на 6 месяцев",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 rounded-xl bg-primary-soft">
              <div className="text-sm text-muted-foreground mb-1">Или позвоните напрямую</div>
              <a href={PHONE_HREF} className="text-2xl font-bold text-primary">{PHONE}</a>
            </div>
          </div>

          <Card className="p-6 md:p-8 shadow-soft">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Анна" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" type="tel" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Что беспокоит (необязательно)</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Например: чистка, болит зуб, нужен осмотр ребёнку" rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full">Отправить заявку</Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 md:py-20 bg-secondary/40">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Адрес</div>
                  <div className="text-muted-foreground">{ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Телефон</div>
                  <a href={PHONE_HREF} className="text-muted-foreground hover:text-primary">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Часы работы</div>
                  <div className="text-muted-foreground">Пн–Пт: 9:00 – 21:00<br />Сб–Вс: 10:00 – 20:00</div>
                </div>
              </div>
            </div>
          </div>
          <Card className="overflow-hidden shadow-card aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]">
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=12"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
          <div>© 2025 Семейная Стоматология. Все права защищены.</div>
          <div>Лицензия № ЛО-77-01-000000</div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
        <Button asChild size="lg" className="w-full shadow-soft">
          <a href={PHONE_HREF}><Phone className="w-4 h-4 mr-2" />Позвонить · записаться</a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
