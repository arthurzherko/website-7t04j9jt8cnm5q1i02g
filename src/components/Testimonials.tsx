import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content: "FitTrack has completely transformed my workout routine. I love how easy it is to log my exercises and track my progress!",
    avatar: "/avatars/sarah.jpg",
  },
  {
    name: "Mike Chen",
    role: "Personal Trainer",
    content: "As a trainer, I recommend FitTrack to all my clients. It's user-friendly and provides valuable insights into their fitness journey.",
    avatar: "/avatars/mike.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marathon Runner",
    content: "The goal-setting feature in FitTrack keeps me motivated and on track with my training. It's been crucial in preparing for my marathons.",
    avatar: "/avatars/emily.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Users Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex h-full flex-col justify-between">
              <CardContent className="pt-6">
                <p className="mb-4 text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center">
                <Avatar className="mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;