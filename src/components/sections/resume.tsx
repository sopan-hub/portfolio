'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="relative py-24">
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold">My Resume</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Interested in my full professional background? View my resume to
            get a comprehensive look at my skills, experience, and qualifications.
          </p>
          <Button
            variant="neu"
            size="lg"
            className="font-bold"
            asChild
          >
            <a href="https://raw.githubusercontent.com/sopan-hub/my-image-assets/fada33b59422fb108a4ab3e4a48a93cb31c0b0d9/ssdsdcsdc.png" target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-5 w-5" /> View Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
