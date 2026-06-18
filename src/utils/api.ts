import config from '../../config.json';

export const getProjects = async () => {
  const res = await fetch(
    `https://api.github.com/users/${config.social.github}/repos`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
};

export const getReadme = async () => {
  const res = await fetch(config.readmeUrl);
  if (!res.ok) throw new Error(`README fetch error: ${res.status}`);
  return res.text();
};

export const getWeather = async (city: string): Promise<string> => {
  try {
    const res = await fetch(`https://wttr.in/${city}?ATm`);
    if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
    return res.text();
  } catch (error) {
    return error instanceof Error
      ? error.message
      : 'Could not fetch weather data.';
  }
};

export const getQuote = async (): Promise<{ quote: string }> => {
  const res = await fetch('/api/quote');
  if (!res.ok) throw new Error(`Quote API error: ${res.status}`);
  return res.json();
};
