import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.clinicName) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    // Here you would normally save to a database or send an email
    console.log('New Demo Request:', body);

    return NextResponse.json(
      { success: true, message: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }
}
