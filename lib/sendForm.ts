// ./lib/sendForm.ts

import axios from 'axios';

// Generic form data type – flexible but not `any`
export type FormData = Record<string, string | number | boolean | null | undefined>;

export async function sendForm(data: FormData) {
  try {
    await axios.post('/api/contact', data);
    return { success: true };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return { success: false, error: err.response?.data?.message ?? err.message };
    }
    return { success: false, error: 'Failed to send. Please try again.' };
  }
}
