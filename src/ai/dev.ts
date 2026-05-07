
/**
 * @fileOverview Genkit development script.
 * 
 * This file is used to initialize the Genkit development environment.
 * It conditionally loads dotenv only in development to avoid build errors.
 */

async function devInit() {
  if (process.env.NODE_ENV === 'development') {
    try {
      // Dynamic import to prevent build-time type errors in production environments
      // where dotenv might not be present or needed.
      const { config } = await import('dotenv');
      config();
    } catch (e) {
      console.warn('dotenv module not found. Skipping environment configuration.');
    }
  }

  // Import flows to register them with Genkit
  await import('@/ai/flows/analyze-contact-form-messages.ts');
}

devInit();
