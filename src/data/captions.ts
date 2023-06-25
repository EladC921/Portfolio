import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export interface IBrandIcon {
    iconName: IconDefinition;
    link: string;
}

const routes: string[] = [
    'about',
    'projects',
    'contact'
];

const barndIcons: IBrandIcon[] = [
    { iconName: faLinkedinIn, link: 'https://www.linkedin.com/in/eladc921/' },
    { iconName: faInstagram, link: 'https://www.instagram.com/eladc921/' },
    { iconName: faGithub, link: 'https://github.com/EladC921' },
]

export {
    routes,
    barndIcons
}