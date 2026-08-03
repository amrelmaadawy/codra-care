"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';

const formSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون حرفين على الأقل'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().min(8, 'رقم الهاتف يجب أن يكون 8 أرقام على الأقل'),
  clinicName: z.string().min(2, 'اسم العيادة مطلوب'),
});

type FormData = z.infer<typeof formSchema>;

export default function BookDemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccessMsg(result.message);
        reset();
      } else {
        setErrorMsg(result.error || 'حدث خطأ ما');
      }
    } catch (err) {
      setErrorMsg('تعذر الاتصال بالخادم');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successMsg) {
    return (
      <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">تم الإرسال بنجاح!</h3>
        <p className="text-foreground/70">{successMsg}</p>
        <Button onClick={() => setSuccessMsg('')} variant="outline" className="mt-6">
          إرسال طلب آخر
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {errorMsg}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">الاسم الكامل</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 bg-neutral/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="د. أحمد محمد"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">البريد الإلكتروني</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 bg-neutral/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="dr.ahmed@example.com"
          dir="ltr"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">رقم الهاتف</label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 bg-neutral/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="0500000000"
          dir="ltr"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="clinicName" className="block text-sm font-medium text-foreground/80 mb-1">اسم العيادة</label>
        <input
          id="clinicName"
          type="text"
          {...register('clinicName')}
          className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 bg-neutral/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="عيادة الأمل"
        />
        {errors.clinicName && <p className="text-red-500 text-xs mt-1">{errors.clinicName.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg mt-4">
        {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الحجز'}
      </Button>
      
      <p className="text-xs text-center text-foreground/50 mt-4">
        بإرسالك لهذا النموذج، أنت توافق على سياسة الخصوصية الخاصة بنا.
      </p>
    </form>
  );
}
