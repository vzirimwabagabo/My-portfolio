import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, roleCategory } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message).' },
        { status: 400 }
      );
    }

    // Console log submission for server runtime verification
    console.log(`[Contact Submission] From: ${name} (${email}), Role: ${roleCategory}, Subject: ${subject}`);

    // If CallMeBot WhatsApp API credentials are set in environment variables, dispatch WhatsApp alert to recipient
    const phone = process.env.CALLMEBOT_PHONE;
    const apiKey = process.env.CALLMEBOT_API_KEY;

    if (phone && apiKey) {
      const whatsappText = `📌 *New Portfolio Message*\n\n*Name:* ${name}\n*Email:* ${email}\n*Role:* ${roleCategory}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
      const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(
        phone
      )}&text=${encodeURIComponent(whatsappText)}&apikey=${encodeURIComponent(apiKey)}`;

      try {
        await fetch(callmebotUrl);
        console.log('[WhatsApp Notification] Sent via CallMeBot');
      } catch (waErr) {
        console.error('[WhatsApp Notification Error]', waErr);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal server error processing message.' },
      { status: 500 }
    );
  }
}
