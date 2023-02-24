const merchDB = [
    {imgid: 'hotsauce.jpg',
    address:'#',
    name:'Joelapeño Hot Sauce',
    info:'obviously I have to have my own hot sauce...',
    price:'$25'
    },
    {imgid: 'tshirt.webp',
    address:'#',
    name:'PLain White Tee',
    info:'We miss the old Kanye',
    price:'$50'
    },
    {imgid: 'hat.avif',
    address:'#',
    name:'PLain Black Hat',
    info:'Standout in the crowd with this least conspicuous accessory',
    price:'$30'
    }
]

export const getMerchArray = () => {
    
    return merchDB.map(copyOfSingleObject => ({...copyOfSingleObject}))
}

