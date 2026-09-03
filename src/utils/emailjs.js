export const getEmailJsConfig = () => {
  const env = import.meta.env;

  const serviceId = env.VITE_EMAILJS_SERVICE_ID?.trim() || "service_5nk6uu2";
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY?.trim() || "8i6PS9YsBf7SyASeQ";

  return {
    serviceId,
    publicKey,
    templates: {
      contact: env.VITE_EMAILJS_CONTACT_TEMPLATE_ID?.trim() || "template_4030myr",
      forum: env.VITE_EMAILJS_FORUM_TEMPLATE_ID?.trim(),
      membership: env.VITE_EMAILJS_MEMBERSHIP_TEMPLATE_ID?.trim(),
      symposium: env.VITE_EMAILJS_SYMPOSIUM_TEMPLATE_ID?.trim() || "template_ij4qbmr",
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
