import githubIcon from '../assets/images/icon-github.svg';
import frontendMentorIcon from '../assets/images/icon-frontend-mentor.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import linkedinIcon from '../assets/images/icon-linkedin.svg';
import youtubeIcon from '../assets/images/icon-youtube.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitchIcon from '../assets/images/icon-twitch.svg';
import devToIcon from '../assets/images/icon-devto.svg';
import codeWarsIcon from '../assets/images/icon-codewars.svg';
import fccIcon from '../assets/images/icon-freecodecamp.svg';
import gitLabIcon from '../assets/images/icon-gitlab.svg';
import hashnodeIcon from '../assets/images/icon-hashnode.svg';
import stackOverflowIcon from '../assets/images/icon-stack-overflow.svg';

export type PlatformOption = {
  name: string;
  label: string;
  icon: string;
};

export const platformOptions: PlatformOption[] = [
  {
    name: 'github',
    label: 'GitHub',
    icon: githubIcon,
  },
  {
    name: 'frontend mentor',
    label: 'Frontend Mentor',
    icon: frontendMentorIcon,
  },
  {
    name: 'twitter',
    label: 'Twitter',
    icon: twitterIcon,
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    icon: linkedinIcon,
  },
  {
    name: 'youtube',
    label: 'YouTube',
    icon: youtubeIcon,
  },
  {
    name: 'facebook',
    label: 'Facebook',
    icon: facebookIcon,
  },
  {
    name: 'twitch',
    label: 'Twitch',
    icon: twitchIcon,
  },
  {
    name: 'dev.to',
    label: 'Dev.to',
    icon: devToIcon,
  },
  {
    name: 'codewars',
    label: 'Codewars',
    icon: codeWarsIcon,
  },
  {
    name: 'freecodecamp',
    label: 'freeCodeCamp',
    icon: fccIcon,
  },
  {
    name: 'gitlab',
    label: 'GitLab',
    icon: gitLabIcon,
  },
  {
    name: 'hashnode',
    label: 'Hashnode',
    icon: hashnodeIcon,
  },
  {
    name: 'stack overflow',
    label: 'Stack Overflow',
    icon: stackOverflowIcon,
  },
];
