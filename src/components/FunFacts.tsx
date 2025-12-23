import { Coffee, Code, Music, Gamepad2, Book, Plane } from 'lucide-react';

const funFacts = [
  { icon: Coffee, label: 'Coffee Consumed', value: '1000+', suffix: 'cups' },
  { icon: Code, label: 'Lines of Code', value: '100K+', suffix: 'written' },
  { icon: Music, label: 'Coding Playlists', value: '50+', suffix: 'hours' },
  { icon: Gamepad2, label: 'Games Played', value: '200+', suffix: 'titles' },
  { icon: Book, label: 'Books Read', value: '30+', suffix: 'tech books' },
  { icon: Plane, label: 'Cities Visited', value: '15+', suffix: 'places' },
];

const FunFacts = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Fun Facts <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A little glimpse into my life beyond the code editor
          </p>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {funFacts.map((fact, index) => (
            <div
              key={fact.label}
              className="group text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <fact.icon className="text-primary" size={24} />
              </div>
              <div className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                {fact.value}
              </div>
              <div className="text-xs text-muted-foreground">{fact.suffix}</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
