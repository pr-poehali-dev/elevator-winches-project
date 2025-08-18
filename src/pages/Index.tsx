import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Лебедка подъемная ЛП-500",
      image: "/img/ebaa284a-782c-4894-bc81-81a6f1fcebf4.jpg",
      price: "125 000 ₽",
      capacity: "500 кг",
      speed: "0.3 м/с",
      features: ["Электропривод", "Автоматический тормоз", "IP54"]
    },
    {
      id: 2,
      name: "Лебедка электрическая ЛЭ-1000",
      image: "/img/18d17b9e-0071-4078-b220-f602315aad9c.jpg",
      price: "185 000 ₽",
      capacity: "1000 кг",
      speed: "0.25 м/с",
      features: ["Частотный привод", "Энкодер", "IP65"]
    },
    {
      id: 3,
      name: "Лебедка тяжелая ЛТ-2000",
      image: "/img/a7a22305-f232-4272-b632-b40b16eead0d.jpg",
      price: "295 000 ₽",
      capacity: "2000 кг",
      speed: "0.2 м/с",
      features: ["Планетарный редуктор", "Двойной тормоз", "IP67"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Cog" size={32} className="text-secondary" />
              <span className="text-2xl font-bold">Веллифт</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-secondary transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-secondary transition-colors">Каталог</a>
              <a href="#about" className="hover:text-secondary transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                Промышленные <span className="text-secondary">лифтовые</span> лебедки
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Надежное подъемное оборудование для строительства и промышленности. 
                Сертифицированное качество и гарантия безопасности.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Посмотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="lg:text-right animate-scale-in">
              <Icon name="Settings" size={300} className="text-secondary/20 mx-auto lg:ml-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Shield" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Сертифицированное качество</h3>
              <p className="text-muted-foreground">Соответствие ГОСТ и европейским стандартам безопасности</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Wrench" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Техническая поддержка</h3>
              <p className="text-muted-foreground">Полное сервисное обслуживание и запчасти</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Truck" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Быстрая доставка</h3>
              <p className="text-muted-foreground">Отгрузка в день заказа по всей России</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Каталог лебедок</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящее решение для ваших задач</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Грузоподъемность: {product.capacity}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Скорость: {product.speed}</Badge>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-secondary">{product.price}</div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Характеристики:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-secondary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О компании ЛифтТех</h2>
              <p className="text-lg text-muted-foreground">
                Более 15 лет мы специализируемся на производстве и поставке промышленного 
                подъемного оборудования. Наши лебедки используются на крупнейших 
                строительных объектах России.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={24} className="text-secondary" />
                  <div>
                    <div className="font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Выполненных проектов</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={24} className="text-secondary" />
                  <div>
                    <div className="font-bold">200+</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-secondary" />
                  <div>
                    <div className="font-bold">24/7</div>
                    <div className="text-sm text-muted-foreground">Техническая поддержка</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                  <div>
                    <div className="font-bold">85</div>
                    <div className="text-sm text-muted-foreground">Регионов поставки</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <Icon name="Zap" size={48} className="text-secondary mb-4" />
                  <h4 className="font-bold">Энергоэффективность</h4>
                  <p className="text-sm text-muted-foreground">Современные приводы с частотным управлением</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <Icon name="ShieldCheck" size={48} className="text-secondary mb-4" />
                  <h4 className="font-bold">Безопасность</h4>
                  <p className="text-sm text-muted-foreground">Многоуровневые системы защиты</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <Icon name="Cog" size={48} className="text-secondary mb-4" />
                  <h4 className="font-bold">Надежность</h4>
                  <p className="text-sm text-muted-foreground">Ресурс работы более 25 лет</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <Icon name="Settings" size={48} className="text-secondary mb-4" />
                  <h4 className="font-bold">Сервис</h4>
                  <p className="text-sm text-muted-foreground">Полный цикл обслуживания</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами для консультации</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-secondary-foreground" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-secondary">+7 (936) 313-18-16</p>
                <p className="text-muted-foreground">Звоните с 9:00 до 18:00</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-secondary-foreground" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-secondary">balmoshnovaakchach96@list.ru</p>
                <p className="text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-secondary-foreground" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">г. Москва</p>
                <p className="text-muted-foreground">Нарвская ул, д. 1а</p>
                <p className="text-muted-foreground">м. Автозаводская</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Cog" size={24} className="text-secondary" />
              <span className="font-bold">ЛифтТех</span>
            </div>
            <p className="text-primary-foreground/80">© 2024 ЛифтТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;