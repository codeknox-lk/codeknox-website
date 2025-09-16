// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS public key (found in EmailJS dashboard)
  PUBLIC_KEY: "ENoM09n00QXGhJF1H", // Your actual EmailJS public key
  
  // Your EmailJS service ID (found in EmailJS dashboard)
  SERVICE_ID: "service_codeknox", // You already have this!
  
  // Template IDs for different email types
  TEMPLATES: {
    // Welcome email template for new subscribers
    WELCOME: "template_7liax9r", // Your Welcome template ID
    
    // Admin notification template for new subscriptions
    ADMIN_NOTIFICATION: "template_s4f06ng", // Your Admin template ID
    
    // Contact form template - using admin template for now
    CONTACT: "template_s4f06ng" // Using admin template for contact form
  }
};

// Email templates structure
export const EMAIL_TEMPLATES = {
  welcome: {
    to_email: "{{to_email}}",
    to_name: "{{to_name}}",
    from_name: "{{from_name}}",
    message: "{{message}}",
    reply_to: "{{reply_to}}"
  },
  admin_notification: {
    to_email: "{{to_email}}",
    to_name: "{{to_name}}",
    from_name: "{{from_name}}",
    message: "{{message}}",
    reply_to: "{{reply_to}}"
  }
};
