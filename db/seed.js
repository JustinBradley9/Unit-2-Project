const User = require('../models/User')
const Character = require('../models/Character')
const Class = require('../models/Class')
const Stats = require('../models/Stats')


User.deleteMany({})
    .then ( () => {
        return User.create({
            name: "Ryan Reynolds",
            profilePic: "https://i.pinimg.com/originals/1c/f8/51/1cf8515bce85f6f895e063b738ae6039.jpg",
            typeOfPlayer: "I play characters that focus on charisma and my inner beauty",
            characters: []
        })
        .then((userguy) => {
            const firstCharacter = Character.create({
                name: "Jason Voorhees",
                race: "Undead",
                allignment: "Chaotic Neutral",
                img: "http://img0.joyreactor.cc/pics/post/full/Jason-Voorhees-friday-the-13th-Mortal-Kombat-X-Mortal-Kombat-3574488.jpeg",
                gender: "Male",
                level: 10,
                background: "Man who kills all who enter his property to fulfill his mothers dying wish of ensuring no child ever is hurt again. By killing horny teenagers",
                class: [],
                stats: []
            }) 
            
            .then((character1) => {
                const myClass = Class.create({
                    classname: "Beserker",
                    mainweapon: "Machete",
                    offhandweapon: "Wood Cutting Axe",
                    armor: "Old moldy clothes",
                    shield: "Do I look like I need a shield",
                    accesories: "Mask"
                })
                .then((class1) => {
                    const myStats = Stats.create({
                        Strength: 17,
                        Dexterity: 4,
                        Agility: 7,
                        Constitution: 20,
                        Intellegence: 8,
                        Wisdom: 7,
                        Luck: 17,
                        Charisma: 2,
                        Faith: 20
                    }).then((statstuff) => {
                        character1.stats.push(statstuff)
                        character1.class.push(class1)
                    })

            .then(() => {
                userguy.characters.push(character1)
            })
            Promise.all([firstCharacter, myClass, myStats])
            .then(()=>{
                userguy.save()
                console.log(userguy)

            })
        })
    })
    })
})