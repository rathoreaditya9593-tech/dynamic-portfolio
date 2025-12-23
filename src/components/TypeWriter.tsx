import { useState, useEffect } from 'react';

const roles = [
  'Node.js Specialist',
  'Frontend Developer',
  'React Developer',
  'Problem Solver',
  'Full Stack Developer'
];

const TypeWriter = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <div className="h-10 md:h-12 flex items-center justify-center">
      <span className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-foreground">
        {currentText}
        <span className="animate-pulse text-primary">|</span>
      </span>
    </div>
  );
};

export default TypeWriter;
