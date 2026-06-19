import * as bin from './index';
import config from '../../../config.json';
import themes from '../../../themes.json';

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(', ');
    var c = '';
    for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
        if (i % 7 === 0) {
            c += Object.keys(bin).sort()[i - 1] + '\n';
        } else {
            c += Object.keys(bin).sort()[i - 1] + ' ';
        }
    }
    return `Welcome! Here are all the available commands:
\n${c}\n
[Tab]: Trigger completion.
[Ctrl+L] /clear /cls: Clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

export const repo = async (args: string[]): Promise<string> => {
    window.open(`${config.repo}`);
    return 'Opening Github repository...';
};

export const about = async (args: string[]): Promise<string> => {
    return `Hi, I am ${config.name}. 
Midlevel Software Engineer @ QNB Sigorta based in Istanbul, Türkiye.

<b>Summary:</b>
Accomplished Software Engineering graduate from Üsküdar University with a minor in 
Computer Engineering. A dedicated and passionate developer, consistently striving for 
excellence in software development with a strong track record of successfully 
executing diverse projects.

<b>Experience:</b>
- QNB Sigorta (April 2022 - Present)
  * Midlevel Software Engineer
  * Junior Software Engineer
  * Software Development Intern

<b>Education:</b>
- Üsküdar Üniversitesi (Sep 2018 - Jun 2023)
  * Bachelor's degree, Software Engineering
  * Minor, Computer Engineering

Type 'sumfetch' for a short summary.
Type 'resume' to view my full resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
    window.open(`${config.resume_url}`);
    return 'Opening resume...';
};

export const email = async (args: string[]): Promise<string> => {
    window.open(`mailto:${config.email}`);
    return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
    window.open(`https://github.com/${config.social.github}/`);
    return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
    return 'Opening linkedin...';
};

export const google = async (args: string[]): Promise<string> => {
    window.open(`https://google.com/search?q=${args.join(' ')}`);
    return `Searching google for ${args.join(' ')}...`;
};

export const echo = async (args: string[]): Promise<string> => {
    return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
    return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
    return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
    return `unfortunately, i cannot afford more directories. If you want to help, you can hire me :).`;
};

export const date = async (args: string[]): Promise<string> => {
    return new Date().toString();
};

export const zulal = async (args: string[]): Promise<string> => {
    return `
<div class="text-red-500 dark:text-red-400">
  <pre class="m-0 p-0 leading-tight">   ****     ****
  ******   ******
 ******** ********
 *****************
  ***************
   *************
    ***********
     *********
      *******
       *****
        ***
         *</pre>
  <p class="mt-2 mb-0 font-bold text-lg">Zülal'im, hayatımın anlamı, seni çok seviyorum! ❤️</p>
</div>
  `.trim();
};

export const coffee = async (args: string[]): Promise<string> => {
    return `
<div class="mt-2 text-yellow-700 dark:text-yellow-400">
  <pre>
      )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|  
( C|/\\/\\/\\/\\/|
 '-./\\/\\/\\/\\/|
   '_________'
    '-------'
  </pre>
  <p class="mt-2 italic">A nice hot cup of coffee... Enjoy! ☕</p>
</div>
  `;
};

export const theme = async (args: string[]): Promise<string> => {
    const availableThemes = Object.keys(themes);
    if (args.length === 0) {
        return `Usage: theme [theme_name]\nAvailable themes: ${availableThemes.join(', ')}`;
    }

    const themeName = args[0];
    const themeObj = (themes as Record<string, any>)[themeName];

    if (!themeObj) {
        return `Theme '${themeName}' not found. Available themes: ${availableThemes.join(', ')}`;
    }

    try {
        const root = document.documentElement;
        for (const [k, v] of Object.entries(themeObj.light)) {
            root.style.setProperty('--theme-light-' + k, v as string);
        }
        for (const [k, v] of Object.entries(themeObj.dark)) {
            root.style.setProperty('--theme-dark-' + k, v as string);
        }
        localStorage.setItem('theme', themeName);
        return `Theme successfully changed to '${themeName}'.`;
    } catch (e) {
        return `Failed to set theme: ${(e as Error).message}`;
    }
};

export const banner = (args?: string[]): string => {
    return `
 █████╗ ███╗   ██╗██╗██╗      ██████╗ █████╗ ███╗   ██╗    ██╗██████╗ ███████╗ █████╗ ██╗      █████╗ ██╗     ██╗
██╔══██╗████╗  ██║██║██║     ██╔════╝██╔══██╗████╗  ██║    ██║██╔══██╗██╔════╝██╔══██╗██║     ██╔══██╗██║     ██║ 
███████║██╔██╗ ██║██║██║     ██║     ███████║██╔██╗ ██║    ██║██████╔╝███████╗███████║██║     ███████║██║     ██║
██╔══██║██║╚██╗██║██║██║     ██║     ██╔══██║██║╚██╗██║    ██║██╔═══╝ ╚════██║██╔══██║██║     ██╔══██║██║     ██║
██║  ██║██║ ╚████║██║███████╗╚██████╗██║  ██║██║ ╚████║    ██║██║     ███████║██║  ██║███████╗██║  ██║███████╗██║ 
╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

export const ascii = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return "Usage: ascii [text]\nExample: ascii hello";
    }
    const text = args.join(' ');
    try {
        const response = await fetch(`/api/ascii?text=${encodeURIComponent(text)}`);
        const art = await response.text();
        return `<pre>${art}</pre>`;
    } catch (e) {
        return `Failed to fetch ascii art. Please try again later.`;
    }
};

export const mode = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return "Usage: mode [light | dark]\nExample: mode dark";
    }

    const newMode = args[0].toLowerCase();
    if (newMode === 'dark' || newMode === 'light') {
        localStorage.setItem('mode', newMode);
        const html = document.documentElement;
        if (newMode === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        return `Mode successfully changed to ${newMode}.`;
    }
    
    return `Invalid mode '${args[0]}'. Please specify 'light' or 'dark'.`;
};
