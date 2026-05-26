import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sidpk93@gmail.com",
    href: "mailto:sidpk93@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+61 451 480 823",
    href: "tel:+61451480823",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Melbourne, Australia",
    href: "#",
  },
];

const ownerEmail = "sidpk93@gmail.com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (!submitStatus.type) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSubmitStatus({ type: null, message: "" });
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [submitStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: "Sid Priyanjitha",
          to_email: ownerEmail,
          name: formData.name,
          from_name: formData.name,
          user_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="px-5 py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-[40px] bg-secondary text-secondary-foreground">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <span className="section-label text-highlight">Contact</span>
              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Have a product idea, role, or build that needs a frontend?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-secondary-foreground/70">
                Send the details and I will respond with the next practical
                step. Short brief, rough idea, or clear spec are all welcome.
              </p>

              <div className="mt-10 space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-3xl border border-secondary-foreground/10 bg-secondary-foreground/6 p-4 transition-colors hover:bg-secondary-foreground/10"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-highlight text-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.14em] text-secondary-foreground/55">
                        {item.label}
                      </div>
                      <div className="font-bold">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card p-5 text-foreground md:p-8 lg:p-10">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({ ...formData, message: event.target.value })
                    }
                    placeholder="Tell me what you want to build"
                    className="w-full resize-none rounded-2xl border border-border bg-surface px-4 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </Button>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 rounded-2xl p-4 ${
                      submitStatus.type === "success"
                        ? "border border-green-500/20 bg-green-500/10 text-green-700"
                        : "border border-red-500/20 bg-red-500/10 text-red-700"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5 shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 shrink-0" />
                    )}
                    <p className="text-sm font-bold">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
