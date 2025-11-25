'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing job recommendations based on user skills and preferences.
 *
 * - jobRecommendation - A function that takes user skills and preferences as input and returns job recommendations.
 * - JobRecommendationInput - The input type for the jobRecommendation function.
 * - JobRecommendationOutput - The output type for the jobRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobRecommendationInputSchema = z.object({
  skills: z.array(z.string()).describe('An array of skills possessed by the user.'),
  preferences: z.string().describe('The job preferences of the user, including job types, industries, and locations.'),
});
export type JobRecommendationInput = z.infer<typeof JobRecommendationInputSchema>;

const JobRecommendationOutputSchema = z.object({
  jobRecommendations: z.array(
    z.object({
      title: z.string().describe('The title of the job.'),
      company: z.string().describe('The company offering the job.'),
      location: z.string().describe('The location of the job.'),
      description: z.string().describe('A brief description of the job.'),
      url: z.string().url().describe('The URL to the job posting.'),
    })
  ).describe('An array of job recommendations based on the user skills and preferences.'),
});
export type JobRecommendationOutput = z.infer<typeof JobRecommendationOutputSchema>;

export async function jobRecommendation(input: JobRecommendationInput): Promise<JobRecommendationOutput> {
  return jobRecommendationFlow(input);
}

const jobRecommendationPrompt = ai.definePrompt({
  name: 'jobRecommendationPrompt',
  input: {schema: JobRecommendationInputSchema},
  output: {schema: JobRecommendationOutputSchema},
  prompt: `You are a job recommendation expert. Given the following skills and preferences of a user, provide a list of job recommendations.

Skills: {{{skills}}}
Preferences: {{{preferences}}}

Return the job recommendations in a JSON format. Each job recommendation should include the title, company, location, description, and URL of the job posting.
`,
});

const jobRecommendationFlow = ai.defineFlow(
  {
    name: 'jobRecommendationFlow',
    inputSchema: JobRecommendationInputSchema,
    outputSchema: JobRecommendationOutputSchema,
  },
  async input => {
    const {output} = await jobRecommendationPrompt(input);
    return output!;
  }
);
