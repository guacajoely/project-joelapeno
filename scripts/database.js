const database = [
    {id: 'twitch',
    address:'#',
    username:'Joelapeno',
    info:'Live every weekday from 9am-5pm est'
    },
    {id: 'yt',
    address:'#',
    username:'JoelaPeenYo',
    info:'Missed a stream? Watch them all on YouTube!'
    },
    {id: 'twitter',
    address:'#',
    username:'@Joelapenno',
    info:'Grab your popcorn as I complain into the Twitter ether'
    },
    {id: 'insta',
    address:'#',
    username:'@JoelapenoJoe',
    info:'Mostly Pictures of my food :)'
    },
    {id: 'tiktok',
    address:'#',
    username:'@Joelapeño',
    info:'Highlights and clips of past streams'
    }
]

export const getSocialArray = () => {
    
    return database.map(copyOfSingleObject => ({...copyOfSingleObject}))
}

