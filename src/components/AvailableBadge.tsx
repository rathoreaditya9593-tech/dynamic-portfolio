import { ArrowDown, MessageCircle, Download } from 'lucide-react';

const AvailableBadge = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    alert('Resume download would start here. Connect your actual resume PDF!');
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Available Badge */}
          <div className="relative animate-fade-up">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-foreground font-medium">Available for Work</span>
            </div>
          </div>

          {/* Action Arrows */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-4">
            {/* Get in Touch Arrow */}
            <button
              onClick={handleScrollToContact}
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <span className="text-sm font-medium">Get In Touch</span>
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </div>
              <ArrowDown size={20} className="animate-bounce" />
            </button>

            {/* Download Resume Arrow */}
            <button
              onClick={handleDownloadResume}
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300"
            >
              <span className="text-sm font-medium">Download Resume</span>
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
                <Download size={20} className="group-hover:scale-110 transition-transform" />
              </div>
              <ArrowDown size={20} className="animate-bounce" style={{ animationDelay: '0.2s' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableBadge;
