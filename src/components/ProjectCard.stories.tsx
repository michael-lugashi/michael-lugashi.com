import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A card component for displaying project information with an image, title, description, and action button.',
      },
    },
  },
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'URL of the project image',
    },
    title: {
      control: 'text',
      description: 'Project title',
    },
    text: {
      control: 'text',
      description: 'Project description text',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the action button',
    },
    url: {
      control: 'text',
      description: 'URL to open when button is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    imageUrl: '/src/assets/images/computer.png',
    title: 'Sample Project',
    text: 'This is a sample project description that explains what the project does and its key features. It provides enough detail to give users a good understanding of the project.',
    buttonText: 'View Project',
    url: 'https://example.com',
  },
};

// Web Development Project
export const WebDevelopment: Story = {
  args: {
    imageUrl: '/src/assets/images/computer.png',
    title: 'E-Commerce Platform',
    text: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    buttonText: 'Live Demo',
    url: 'https://github.com/example/ecommerce',
  },
};

// Mobile App Project
export const MobileApp: Story = {
  args: {
    imageUrl: '/src/assets/images/frisbee.png',
    title: 'Fitness Tracker App',
    text: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals. Built with React Native and integrated with various fitness APIs.',
    buttonText: 'Download App',
    url: 'https://play.google.com/store/apps/details?id=com.example.fitness',
  },
};

// Data Science Project
export const DataScience: Story = {
  args: {
    imageUrl: '/src/assets/images/frisbee3.png',
    title: 'Machine Learning Model',
    text: 'A predictive analytics model for customer churn prediction using Python, scikit-learn, and TensorFlow. Achieved 94% accuracy on test data.',
    buttonText: 'View Code',
    url: 'https://github.com/example/ml-churn-prediction',
  },
};

// Long Description
export const LongDescription: Story = {
  args: {
    imageUrl: '/src/assets/images/me-doodle.png',
    title: 'Complex Enterprise Solution',
    text: 'This is a comprehensive enterprise-level solution that handles multiple business processes including customer relationship management, inventory tracking, financial reporting, and employee management. The system integrates with various third-party APIs and provides real-time analytics and reporting capabilities. Built with modern technologies and following best practices for scalability and maintainability.',
    buttonText: 'Learn More',
    url: 'https://example.com/enterprise-solution',
  },
};

// Short Description
export const ShortDescription: Story = {
  args: {
    imageUrl: '/src/assets/images/computer.png',
    title: 'Simple Tool',
    text: 'A simple utility tool for developers.',
    buttonText: 'Try It',
    url: 'https://example.com/simple-tool',
  },
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    imageUrl: '/src/assets/images/frisbee.png',
    title: 'Custom Styled Project',
    text: 'This project card demonstrates custom styling capabilities.',
    buttonText: 'Explore',
    url: 'https://example.com',
    className: 'shadow-lg border-2 border-blue-500',
  },
};

// Multiple Cards Layout
export const MultipleCards: Story = {
  render: () => (
    <div className="space-y-6">
      <ProjectCard
        imageUrl="/src/assets/images/computer.png"
        title="Project Alpha"
        text="First project in the portfolio showcasing web development skills."
        buttonText="View Project"
        url="https://example.com/alpha"
      />
      <ProjectCard
        imageUrl="/src/assets/images/frisbee.png"
        title="Project Beta"
        text="Second project demonstrating mobile app development capabilities."
        buttonText="Download"
        url="https://example.com/beta"
      />
      <ProjectCard
        imageUrl="/src/assets/images/frisbee3.png"
        title="Project Gamma"
        text="Third project featuring data science and machine learning expertise."
        buttonText="View Code"
        url="https://example.com/gamma"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how multiple ProjectCard components look together in a portfolio layout.',
      },
    },
  },
};
