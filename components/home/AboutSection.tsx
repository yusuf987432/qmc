
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Queen's Medical Centre
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            QMC is an independent training institution in healthcare, medical, and professional development, 
            collaborating with the University of Nottingham (UK) to provide world-class certification programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Our History</h3>
                <p className="text-gray-600">
                  Established with a vision to provide quality medical education and training 
                  in partnership with internationally recognized institutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                <p className="text-gray-600">
                  Through our partnership with the University of Nottingham, we bring 
                  world-class education standards to Nigeria and West Africa.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest academic standards through rigorous curriculum 
                  development and continuous professional development programs.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
