export interface Character {
    id: string;
    nameKey: string;
    descKey: string;
    image: string;
    color: string;
}

export const CHARACTERS: Character[] = [
    {
        id: 'leonardo',
        nameKey: 'leonardo',
        descKey: 'leonardo_desc',
        image: 'https://i.pinimg.com/736x/b7/0d/2a/b70d2ab52cfa8216500fb9ff2792e48d.jpg',
        color: '#2196F3'
    },

    {
        id: 'raphael',
        nameKey: 'raphael',
        descKey: 'raphael_desc',
        image: 'https://i.pinimg.com/736x/ff/6f/88/ff6f887986f2c101d42ae8fe7f3a6eb1.jpg',
        color: '#F44336'
    },

    {
        id: 'donatello',
        nameKey: 'donatello',
        descKey: 'donatello_desc',
        image: 'https://i.pinimg.com/736x/cb/59/05/cb5905d158e96a33114ebbeb567554dd.jpg',
        color: '#9C27B0'
    },

    {
        id: 'michelangelo',
        nameKey: 'michelangelo',
        descKey: 'michelangelo_desc',
        image: 'https://i.pinimg.com/736x/28/69/34/286934841beee0dee941d4c638e119a5.jpg',
        color: '#FFC107'
    }
]