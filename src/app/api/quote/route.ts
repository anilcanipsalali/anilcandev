import {NextResponse} from 'next/server';

interface ZenQuote {
  q: string;
  a: string;
}

export async function GET() {
  try {
    const res = await fetch('https://zenquotes.io/api/random', {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`ZenQuotes API error: ${res.status}`);
    }

    const data: ZenQuote[] = await res.json();
    const { q, a } = data[0];

    return NextResponse.json({ quote: `"${q}" — ${a}` });
  } catch (error) {
    return NextResponse.json(
      { quote: '"The best way to predict the future is to create it." — Peter Drucker' },
      { status: 200 },
    );
  }
}
