import { Item, Character } from './types'

export const base_url = 'https://sw-info-api.herokuapp.com';
export const version = '/v1';

const importImage = (name: string) => {
    return new URL(`../assets/${name}`, import.meta.url).href
}

export const characters: Record<string, Character> = {
    luke: {
        name: "Luke Skywalker",
        img: importImage('friend0.jpg'),
        url: `${base_url}${version}/peoples/1`
    },
    leia: {
        name: "Leia Organa",
        img: importImage('friend6.jpg'),
        url: `${base_url}${version}/peoples/5`
    },
    han_solo: {
        name: "Han Solo",
        img: importImage('friend5.jpg'),
        url: `${base_url}${version}/peoples/14`
    },
    c3po: {
        name: "C-3PO",
        img: importImage('friend2.jpg'),
        url: `${base_url}${version}/peoples/2`
    },
    r2d2: {
        name: "R2-D2",
        img: importImage('friend1.jpg'),
        url: `${base_url}${version}/peoples/3`
    },
    chewbacca: {
        name: "Chewbacca",
        img: importImage('friend4.jpg'),
        url: `${base_url}${version}/peoples/13`
    },
    obi_wan: {
        name: "Obi-Wan Kenobi",
        img: importImage('friend8.jpg'),
        url: `${base_url}${version}/peoples/10`
    },
    yoda: {
        name: "Yoda",
        img: importImage('friend9.jpg'),
        url: `${base_url}${version}/peoples/0`
    },
    ewok: {
        name: "Wicket Systri Warrick",
        img: importImage('friend3.jpg'),
        url: `${base_url}${version}/peoples/30`
    },
    falcon: {
        name: "Millennium Falcon",
        img: importImage('friend7.jpg'),
        url: `${base_url}${version}/transports/10`
    }
};

export const navItems: Item[] = [
    { title: 'Home', path: 'home' },
    { title: 'About me', path: 'about_me' },
    { title: 'Star wars', path: 'star_wars' },
    { title: 'Contact', path: 'contact' }
];

export const friends = Object.values(characters).map(character => character.img);

export const period_month = 30 * 24 * 60 * 60 * 1000;
export const starWarsInfo = `Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.

The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).`