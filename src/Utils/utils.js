export function validatePhoneAndEmail(phone, email) {
  // Phone validation (using a simple regex for international phone numbers)
  const phoneRegex = /^[7-9]{1}[0-9]{9}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Validate phone number
  if (!phoneRegex.test(phone) || !emailRegex.test(email)) {
    return false;
  }

  return true;
}
