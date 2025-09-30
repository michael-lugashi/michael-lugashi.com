import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import Card from '../components/Card';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Send from '../assets/svgs/Send';
import useNotify from '../hooks/useNotify';
import emailConfig from '../config/email';

interface ContactMeProps {
  ref: React.RefObject<HTMLDivElement | null>;
  className?: string;
}
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactMe: React.FC<ContactMeProps> = ({ ref, className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const fieldRefs: Record<keyof FormData, React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>> = {
    name: nameRef,
    email: emailRef,
    subject: subjectRef,
    message: messageRef,
  };

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = useNotify();

  const validateForm = (): boolean => {
    let firstError: keyof FormData | undefined;
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      firstError = 'name';
    } else {
      const nameParts = formData.name.trim().split(' ');
      if (nameParts.length < 2 || nameParts.some((part) => part === '')) {
        newErrors.name = 'Please enter your first and last name';
        firstError = 'name';
      } else if (nameParts[0].length < 2 || nameParts[nameParts.length - 1].length < 2) {
        newErrors.name = 'Both first and last name must be at least 2 characters';
        firstError = 'name';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      firstError ??= 'email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      firstError ??= 'email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      firstError ??= 'subject';
    } else if (formData.subject.trim().length < 2) {
      newErrors.subject = 'Subject must be at least 2 characters long';
      firstError ??= 'subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      firstError ??= 'message';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters long';
      firstError ??= 'message';
    }

    setErrors(newErrors);
    if (firstError) {
      notify({ message: 'Please fill out all fields correctly', timeoutMs: 6000, type: 'error' });
      fieldRefs[firstError].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS not configured. Please set up your EmailJS credentials.');
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        { ...formData, time: new Date().toLocaleString() },
        emailConfig.publicKey
      );

      // Clear form on success
      setFormData({ name: '', email: '', subject: '', message: '' });
      notify({ message: "Message sent successfully! I'll get back to you soon.", timeoutMs: 6000, type: 'success' });
    } catch {
      notify({
        message: 'Failed to send message. Please try emailing me directly at michael.lugashi@gmail.com',
        timeoutMs: 6000,
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className={`relative max-w-4xl mx-auto laptop:px-6 ${className}`} ref={ref}>
      {/* Header Section */}
      <Title
        align="center"
        title="Let's Work Together"
        subtitle="Want to hire me full time? Have a project in mind? Want to collaborate on something cool? I'd love to hear from you and explore the possibilities together."
      />
      <p className="-mt-6 mb-6 text-center text-brown-s dark:text-pink-p">
        or email me at{' '}
        <a
          href="mailto:michael.lugashi@gmail.com"
          className="font-bold text-brown-p dark:text-pink-p underline underline-offset-4 decoration-2 decoration-brown-p dark:decoration-pink-p hover:no-underline hover:bg-pink-p/60 dark:hover:bg-brown-p/20 rounded px-1 transition-colors"
        >
          michael.lugashi@gmail.com
        </a>
      </p>
      <Card>
        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-8" noValidate>
          <TextField
            inputRef={nameRef}
            label="Your Name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            error={errors.name}
          />

          <TextField
            inputRef={emailRef}
            label="Email Address"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
          />

          <TextField
            inputRef={subjectRef}
            label="Subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            required
            value={formData.subject}
            onChange={(value) => handleInputChange('subject', value)}
            error={errors.subject}
          />

          <TextArea
            textareaRef={messageRef}
            label="Your Message"
            name="message"
            placeholder="Tell me more about your company, project, ideas, or questions..."
            required
            value={formData.message}
            onChange={(value) => handleInputChange('message', value)}
            error={errors.message}
            rows={6}
          />

          {/* Submit Button and Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
            <Button type="submit" isLoading={isSubmitting}>
              {isSubmitting ? (
                'Sending...'
              ) : (
                <span className="inline-flex items-center gap-2">
                  <span>Send Message</span>
                  <Send />
                </span>
              )}
            </Button>
          </div>
        </form>
      </Card>
      {/* Bottom decorative element */}
      <Footer text="Ready to start something amazing?" />
    </section>
  );
};

export default ContactMe;
