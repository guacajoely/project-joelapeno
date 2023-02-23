const database = [
    {id: 'twitch',
    link:'#',
    username:'Joelapeno',
    info:'Live every weekday from 9am-5pm est'
    },
    {id: 'yt',
    link:'#',
    username:'JoelaPeenYo',
    info:'Check out condensed VODs and clips of past streams!'
    },
    {id: 'twitter',
    link:'#',
    username:'Joelapenno',
    info:'Watch me yell at Elon Musk on Twitter'
    },
    {id: 'insta',
    link:'#',
    username:'JoelapenoJoe',
    info:'Mostly Pictures of my food :)'
    },
    {id: 'tiktok',
    link:'#',
    username:'Joelapeño',
    info:'Highlights and clips of past streams'
    }
]

export const getSocialArray = () => {
    
    return database.map(copyOfSingleObject => ({...copyOfSingleObject}))
}

