import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import MotionWrapper from "@/components/MotionWrapper";

const Contact = () => {
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

        // Simulate form submission - in production, this would send to an API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast({
            title: "Message Sent!",
            description: "We'll get back to you as soon as possible.",
        });

        setFormData({
            name: "",
            email: "",
            company: "",
            subject: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="container mx-auto px-4 lg:px-8 text-center">
                        <MotionWrapper animation="fadeIn">
                            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                Get in <span className="text-primary">Touch</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Ready to transform your regulatory workflow? Our team of experts
                                is here to help you navigate the complexities of global compliance.
                            </p>
                        </MotionWrapper>
                    </div>
                </section>

                {/* Contact Form & Info Section */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Contact Form */}
                            <MotionWrapper animation="scaleUp" delay={0.2}>
                                <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-lg">
                                    <h2 className="text-2xl font-bold text-foreground mb-6">
                                        Send Us a Message
                                    </h2>
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
                                                <Label htmlFor="company">Company</Label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    placeholder="Your Company"
                                                    value={formData.company}
                                                    onChange={handleChange}
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
                                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
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
                                        <h2 className="text-2xl font-bold text-foreground mb-6">
                                            Contact Information
                                        </h2>
                                        <p className="text-muted-foreground mb-8">
                                            Reach out to us directly or fill out the form. We typically
                                            respond within 24 business hours.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <a
                                                href="mailto:contact@resure.ch"
                                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors"
                                            >
                                                <Mail className="h-5 w-5 text-primary" />
                                            </a>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">
                                                    Email
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    contact@resure.ch
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <a
                                                href="tel:+41000000000"
                                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors"
                                            >
                                                <Phone className="h-5 w-5 text-primary" />
                                            </a>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">
                                                    Phone
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    +41 00 000 00 00
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=K%C3%BCssnacht,+Switzerland"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors"
                                            >
                                                <MapPin className="h-5 w-5 text-primary" />
                                            </a>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">
                                                    Office
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    Küssnacht, Switzerland
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Info Card */}
                                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-8">
                                        <h3 className="font-semibold text-foreground mb-2">
                                            Looking for Immediate Assistance?
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            For urgent regulatory matters, please contact us directly via
                                            phone or email. Our team is available during business hours
                                            (CET).
                                        </p>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <a href="mailto:contact@resure.ch">
                                                <Mail className="h-4 w-4 mr-2" />
                                                Email Us Directly
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </MotionWrapper>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
