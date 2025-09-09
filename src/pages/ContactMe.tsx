import { useRef, useState } from 'react';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import Card from '../components/Card';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface ContactMeProps {
  ref: React.RefObject<HTMLDivElement | null>;
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

const ContactMe: React.FC<ContactMeProps> = ({ ref }) => {
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    let firstError: keyof FormData | undefined;
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      firstError = 'name';
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
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      firstError ??= 'message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      firstError ??= 'message';
    }

    setErrors(newErrors);
    if (firstError) {
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
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      //   throw new Error('Test error');
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch {
      setSubmitStatus('error');
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
    <section className="relative max-w-4xl mx-auto laptop:px-6" ref={ref}>
      {/* Header Section */}
      <Title
        title="Let's Work Together"
        subtitle="Want to hire me? Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you and explore the possibilities together."
      />

      {/* Form background with glass effect */}
      <Card>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="space-y-8"
          noValidate
        >
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
            placeholder="Tell me more about your project, ideas, or questions..."
            required
            value={formData.message}
            onChange={(value) => handleInputChange('message', value)}
            error={errors.message}
            rows={6}
          />

          {/* Submit Button and Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
            <Button type="submit" isLoading={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message =>'}
            </Button>

            {/* Status Messages */}
            <div className="flex-1 text-center sm:text-right">
              {submitStatus === 'success' && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium animate-fade-in">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Message sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium animate-fade-in">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Failed to send message. Please try again.
                </div>
              )}
            </div>
          </div>
        </form>
      </Card>

      {/* Bottom decorative element */}
      <Footer text="Ready to start something amazing?" />
    </section>
  );
};

export default ContactMe;
