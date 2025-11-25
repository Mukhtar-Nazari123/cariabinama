"use server";

import { jobRecommendation, type JobRecommendationInput, type JobRecommendationOutput } from '@/ai/flows/job-recommendation';
import { z } from 'zod';

const FormSchema = z.object({
  skills: z.string().min(3, { message: 'حداقل یک مهارت با ۳ کاراکتر وارد کنید.' }),
  preferences: z.string().min(10, { message: 'لطفا ترجیحات خود را با جزئیات بیشتری بیان کنید (حداقل ۱۰ کاراکتر).' }),
});

export type RecommendationState = {
  message?: string | null;
  errors?: {
    skills?: string[];
    preferences?: string[];
  };
  data?: JobRecommendationOutput['jobRecommendations'] | null;
};

export async function getJobRecommendations(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const validatedFields = FormSchema.safeParse({
    skills: formData.get('skills'),
    preferences: formData.get('preferences'),
  });

  if (!validatedFields.success) {
    return {
      message: 'ورودی نامعتبر است. لطفا فیلدها را بررسی کنید.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const skillsArray = validatedFields.data.skills.split(/[,،]/).map(s => s.trim()).filter(Boolean);
  
  if (skillsArray.length === 0) {
    return {
      message: "ورودی نامعتبر",
      errors: { skills: ["لطفاً حداقل یک مهارت را وارد کنید."] },
    };
  }


  const input: JobRecommendationInput = {
    skills: skillsArray,
    preferences: validatedFields.data.preferences,
  };

  try {
    const result = await jobRecommendation(input);
    if (!result || !result.jobRecommendations || result.jobRecommendations.length === 0) {
      return { message: 'متاسفانه توصیه‌ای مطابق با مشخصات شما یافت نشد. لطفا مهارت‌ها و ترجیحات خود را تغییر دهید.' };
    }
    return {
      message: 'توصیه‌ها با موفقیت دریافت شد.',
      data: result.jobRecommendations,
    };
  } catch (error) {
    console.error('Error getting job recommendations:', error);
    return {
      message: 'خطایی در دریافت توصیه‌ها از سرویس هوش مصنوعی رخ داد. لطفا بعدا تلاش کنید.',
    };
  }
}
