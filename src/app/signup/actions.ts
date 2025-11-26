"use server";

import { z } from 'zod';

const SignupSchema = z.object({
  fullName: z.string().min(3, { message: 'نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد.' }),
  email: z.string().email({ message: 'لطفا یک ایمیل معتبر وارد کنید.' }),
  password: z.string().min(6, { message: 'رمز عبور باید حداقل ۶ کاراکتر باشد.' }),
});

export type SignupState = {
  message?: string | null;
  errors?: {
    fullName?: string[];
    email?: string[];
    password?: string[];
  };
};

export async function signupAction(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const validatedFields = SignupSchema.safeParse(Object.fromEntries(formData.entries()));
  
  if (!validatedFields.success) {
    return {
      message: 'اطلاعات وارد شده نامعتبر است. لطفا خطاها را بررسی کنید.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate user creation
  // In a real app, you would interact with your database here.
  // For example: await createUser(validatedFields.data);
  console.log('Creating user:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return {
    message: `حساب کاربری شما با موفقیت ایجاد شد، ${validatedFields.data.fullName}.`,
  };
}
