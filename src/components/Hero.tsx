import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-6xl"
        >
          Transform Your Fitness Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-xl text-muted-foreground md:text-2xl"
        >
          Track workouts, set goals, and achieve milestones with FitTrack
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="mr-4">Download Now</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;