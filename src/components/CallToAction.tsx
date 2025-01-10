import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email);
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated on the latest FitTrack news.",
    });
    setEmail('');
  };

  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Fitness Journey?</h2>
        <p className="mb-8 text-xl">Download FitTrack now and take the first step towards a healthier you!</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" variant="secondary">Download for iOS</Button>
          <Button size="lg" variant="secondary">Download for Android</Button>
        </div>
        <div className="mt-12">
          <h3 className="mb-4 text-2xl font-semibold">Stay Updated</h3>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-primary-foreground text-primary"
              required
            />
            <Button type="submit" variant="secondary">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;