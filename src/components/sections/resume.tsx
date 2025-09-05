import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="bg-secondary py-24 dark:bg-accent/20">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold">My Resume</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Interested in my full professional background? Download my resume to
            get a comprehensive look at my skills, experience, and qualifications.
          </p>
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full font-bold transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="/resume.pdf" download>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 animate-pulse bg-primary/50 opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-75" />
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </span>
              <div className="absolute -inset-1 z-0 animate-pulse rounded-full bg-primary/30 blur-xl group-hover:blur-2xl" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
