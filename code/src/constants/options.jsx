export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc: 'A sole traveles in exploration',
        icon: '✈︎',
        people: '1'
    },
    {
        id:2,
        title:'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id:3,
        title:'A Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '𖠋𖠋',
        people: '5 to 10 People'
    },
]
export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
    },
    {
        id:2,
        title:'Moderate',
        desc: 'Keep cost on average side',
        icon: '💰',
    },
    {
        id:3,
        title:'Luxury',
        desc: 'Dont worry about cost',
        icon: '💸',
    },
]

export const AI_PROMPT="Generate Travel for Location: {location} based off of the TravelList: {SelectTravelsList} and BudgetOptions: {SelectBudgetOptions}"