export const getEmailJsConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  return {
    serviceId,
    publicKey,
    templates: {
      contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID?.trim(),
      forum: import.meta.env.VITE_EMAILJS_FORUM_TEMPLATE_ID?.trim(),
      membership: import.meta.env.VITE_EMAILJS_MEMBERSHIP_TEMPLATE_ID?.trim(),
      symposium: import.meta.env.VITE_EMAILJS_SYMPOSIUM_TEMPLATE_ID?.trim(),
    },
  };
};

export const getEmailJsErrorMessage = (formName = "form") =>
  `Email service is not configured for ${formName}. Please contact the site admin.`;

export const validateEmailJsConfig = (templateId, formName = "this") => {
  const { serviceId, publicKey } = getEmailJsConfig();
  return {
    isValid: Boolean(serviceId && templateId && publicKey),
    serviceId,
    publicKey,
    templateId,
    errorMessage: getEmailJsErrorMessage(formName),
  };
};
