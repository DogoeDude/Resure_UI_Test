import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import MotionWrapper from "@/components/MotionWrapper";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
  });

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const recipient = "rsuffolk@resure-consult.com";
      const formSubmitUrl = `https://formsubmit.co/ajax/${recipient}`;

      try {
          const response = await fetch(formSubmitUrl, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
              },
              body: JSON.stringify({
                  ...formData,
                  _subject: `New Contact Form Submission: ${formData.subject}`,
                  _template: "table",
                  _captcha: "false",
              }),
          });

          if (response.ok) {
              toast({
                  title: "Message Sent Successfully!",
                  description: "Thank you for reaching out. We'll get back to you soon.",
                  variant: "default",
              });
              setFormData({
                  name: "",
                  email: "",
                  company: "",
                  subject: "",
                  message: "",
              });
          } else {
              toast({
                  title: "Submission Failed",
                  description: "There was an error sending your message. Please try again.",
                  variant: "destructive",
              });
          }
      } catch (error) {
          console.error("Error submitting form:", error);
          toast({
              title: "Error",
              description: "Something went wrong. Please check your connection and try again.",
              variant: "destructive",
          });
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <section id="contact" className="w-full relative z-10">
        {/* Hero Section */}
        <div className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4 lg:px-8 text-center">
                <MotionWrapper animation="fadeIn">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Ready to transform your regulatory workflow? Our team of experts
                        is here to help you navigate the complexities of global compliance.
                    </p>
                </MotionWrapper>
            </div>
        </div>

        {/* Contact Form & Info Section */}
        <div className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <MotionWrapper animation="scaleUp" delay={0.2}>
                        <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-lg">
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Send Us a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company *</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            placeholder="Your Company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="How can we help?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your regulatory needs..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="bg-background resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-full border-2 border-accent bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-[1.02] transition-all duration-300 h-11 text-sm font-bold shadow-md shadow-accent/20 active:scale-95"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </MotionWrapper>

                    {/* Contact Information */}
                    <MotionWrapper animation="slideRight" delay={0.4}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-6">
                                    Contact Information
                                </h3>
                                <p className="text-muted-foreground mb-8">
                                    Reach out to us directly or fill out the form. We typically
                                    respond within 24 business hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow duration-300">
                                    <a
                                        href="mailto:rsuffolk@resure-consult.com"
                                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors"
                                    >
                                        <Mail className="h-6 w-6 text-primary" />
                                    </a>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">
                                            Email
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            rsuffolk@resure-consult.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow duration-300">
                                    <a
                                        href="tel:+41000000000"
                                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors"
                                    >
                                        <Phone className="h-6 w-6 text-primary" />
                                    </a>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">
                                            Phone
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            +41 00 000 00 00
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow duration-300">
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=K%C3%BCssnacht,+Switzerland"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors"
                                    >
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </a>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">
                                            Office
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Küssnacht, Switzerland
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info Card */}
                            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-8">
                                <h4 className="font-semibold text-foreground mb-2">
                                    Looking for Immediate Assistance?
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    For urgent regulatory matters, please contact us directly via
                                    phone or email. Our team is available during business hours
                                    (CET).
                                </p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 text-xs font-bold h-10 px-5"
                                >
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=rsuffolk@resure-consult.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Mail className="h-3.5 w-3.5 mr-2" />
                                        Email Us Directly
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;
