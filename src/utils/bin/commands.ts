import * as bin from './index';
import config from '../../../config.json';

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
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

export const repo = async (args: string[]): Promise<string> => {
    window.open(`${config.repo}`);
    return 'Opening Github repository...';
};

export const about = async (args: string[]): Promise<string> => {
    return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
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

export const sudo = async (args?: string[]): Promise<string> => {
    setTimeout(function () {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }, 1000);
    return `Permission denied: with great power comes great responsibility. This incident will be reported.`;
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
