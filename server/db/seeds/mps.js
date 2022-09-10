exports.seed = (knex) => {
  return (
    // Deletes ALL existing entries
    knex('mps')
      .del()
      // Inserts seed entries
      .then(() => {
        return knex('mps').insert([
          {
            id: 1,
            fullName: 'Kiritapu Allan',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 2,
            fullName: 'Ginny Andersen',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 3,
            fullName: 'Jacinda Ardern',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 4,
            fullName: 'Chris Baillie',
            politicalParty: 'ACT',
            totalPropertiesOwned: 1,
          },
          {
            id: 5,
            fullName: 'Andrew Bayly',
            politicalParty: 'National',
            totalPropertiesOwned: 7,
          },
          {
            id: 6,
            fullName: 'Camilla Belich',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 7,
            fullName: 'David Bennett',
            politicalParty: 'National',
            totalPropertiesOwned: 8,
          },
          {
            id: 8,
            fullName: 'Glen Bennett',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 9,
            fullName: 'Chris Bishop',
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 10,
            fullName: 'Rachel Boyack',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 11,
            fullName: 'Simon Bridges',
            politicalParty: 'National',
            totalPropertiesOwned: 4,
          },
          {
            id: 12,
            fullName: 'Rachel Brooking',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 13,
            fullName: 'Simeon Brown',
            politicalParty: 'National',
            totalPropertiesOwned: 1,
          },
          {
            id: 14,
            fullName: 'Gerry Brownlee',
            politicalParty: 'National',
            totalPropertiesOwned: 5,
          },
          {
            id: 15,
            fullName: 'Mark Cameron',
            politicalParty: 'ACT',
            totalPropertiesOwned: 1,
          },
          {
            id: 16,
            fullName: 'Naisi Chen',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 17,
            fullName: 'Karen Chhour',
            politicalParty: 'ACT',
            totalPropertiesOwned: 1,
          },
          {
            id: 18,
            fullName: 'David Clark',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 19,
            fullName: 'Tāmati Coffey',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 20,
            fullName: 'Judith Collins',
            politicalParty: 'National',
            totalPropertiesOwned: 3,
          },
          {
            id: 21,
            fullName: 'Simon Court',
            politicalParty: 'ACT',
            totalPropertiesOwned: 3,
          },
          {
            id: 22,
            fullName: 'Liz Craig',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 23,
            fullName: 'Marama Davidson',
            politicalParty: 'Green',
            totalPropertiesOwned: 0,
          },
          {
            id: 24,
            fullName: 'Kelvin Davis',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 25,
            fullName: 'Jacqui Dean',
            politicalParty: 'National',
            totalPropertiesOwned: 5,
          },
          {
            id: 26,
            fullName: 'Matt Doocey',
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 27,
            fullName: 'Paul Eagle',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 28,
            fullName: 'Barbara Edmonds',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 29,
            fullName: 'Kris Faafoi',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 31,
            fullName: 'Julie Anne Genter',
            politicalParty: 'Green',
            totalPropertiesOwned: 1,
          },
          {
            id: 32,
            fullName: 'Golriz Ghahraman',
            politicalParty: 'Green',
            totalPropertiesOwned: 1,
          },
          {
            id: 33,
            fullName: 'Paul Goldsmith',
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 34,
            fullName: 'Nicola Grigg',
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 35,
            fullName: 'Shanan Halbert',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 36,
            fullName: 'Peeni Henare',
            politicalParty: 'Labour',
            totalPropertiesOwned: 0,
          },
          {
            id: 37,
            fullName: 'Emily Henderson',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 38,
            fullName: 'Harete Hipango',
            politicalParty: 'National',
            totalPropertiesOwned: 1,
          },
          {
            id: 39,
            fullName: 'Chris Hipkins',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 40,
            fullName: 'Willie Jackson',
            politicalParty: 'Labour',
            totalPropertiesOwned: 4,
          },
          {
            id: 41,
            fullName: 'Anahila Kanongata’a-Suisuiki',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 42,
            fullName: 'Elizabeth Kerekere',
            politicalParty: 'Green',
            totalPropertiesOwned: 1,
          },
          {
            id: 43,
            fullName: 'Barbara Kuriger',
            politicalParty: 'National',
            totalPropertiesOwned: 6,
          },
          {
            id: 44,
            fullName: 'Ingrid Leary',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 45,
            fullName: 'Anae Neru Leavasa',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 46,
            fullName: 'Melissa Lee',
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 47,
            fullName: 'Steph Lewis',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 48,
            fullName: 'Andrew Little',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 49,
            fullName: 'Jan Logie',
            politicalParty: 'Green',
            totalPropertiesOwned: 1,
          },
          {
            id: 50,
            fullName: 'Anna Lorck',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 51,
            fullName: 'Marja Lubeck',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 52,
            fullName: 'Christopher Luxon',
            politicalParty: 'National',
            totalPropertiesOwned: 7,
          },
          {
            id: 53,
            fullName: 'Jo Luxton',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 54,
            fullName: 'Nanaia Mahuta',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 55,
            fullName: 'Trevor Mallard',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 56,
            fullName: 'Kieran McAnulty',
            politicalParty: 'Labour',
            totalPropertiesOwned: 0,
          },
          {
            id: 57,
            fullName: 'Todd McClay',
            politicalParty: 'National',
            totalPropertiesOwned: 4,
          },
          {
            id: 58,
            fullName: 'James McDowall',
            politicalParty: 'ACT',
            totalPropertiesOwned: 1,
          },
          {
            id: 59,
            fullName: 'Nicole McKee',
            politicalParty: 'ACT',
            totalPropertiesOwned: 1,
          },
          {
            id: 60,
            fullName: 'Ian McKelvie',
            politicalParty: 'National',
            totalPropertiesOwned: 4,
          },
          {
            id: 61,
            fullName: 'Tracey McLellan',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 62,
            fullName: 'Ricardo Menéndez March',
            politicalParty: 'Green',
            totalPropertiesOwned: 1,
          },
          {
            id: 63,
            fullName: 'Mark Mitchell',
            politicalParty: 'National',
            totalPropertiesOwned: 7,
          },
          {
            id: 64,
            fullName: 'Joseph Mooney',
            politicalParty: 'National',
            totalPropertiesOwned: 1,
          },
          {
            id: 65,
            fullName: 'Todd Muller',
            politicalParty: 'National',
            totalPropertiesOwned: 3,
          },
          {
            id: 66,
            fullName: 'Stuart Nash',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 67,
            fullName: 'Debbie Ngarewa-Packer',
            politicalParty: 'Māori',
            totalPropertiesOwned: 1,
          },
          {
            id: 68,
            fullName: 'Terisa Ngobi',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 69,
            fullName: 'Damien O’Connor',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 70,
            fullName: 'Greg O’Connor',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 71,
            fullName: "Simon O'Connor",
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 72,
            fullName: 'Sarah Pallett',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 73,
            fullName: 'David Parker',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 74,
            fullName: 'Chris Penk',
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 75,
            fullName: 'Willow-Jean Prime',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 76,
            fullName: 'Maureen Pugh',
            politicalParty: 'National',
            totalPropertiesOwned: 3,
          },
          {
            id: 77,
            fullName: 'Priyanca Radhakrishnan',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 78,
            fullName: 'Shane Reti',
            politicalParty: 'National',
            totalPropertiesOwned: 4,
          },
          {
            id: 79,
            fullName: 'Angela Roberts',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 80,
            fullName: 'Grant Robertson',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 81,
            fullName: 'Adrian Rurawhe',
            politicalParty: 'Labour',
            totalPropertiesOwned: 6,
          },
          {
            id: 82,
            fullName: 'Deborah Russell',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 83,
            fullName: 'Eugenie Sage',
            politicalParty: 'Green',
            totalPropertiesOwned: 3,
          },
          {
            id: 84,
            fullName: 'Jenny Salesa',
            politicalParty: 'Labour',
            totalPropertiesOwned: 4,
          },
          {
            id: 85,
            fullName: 'Carmel Sepuloni',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 86,
            fullName: 'Toni Severin',
            politicalParty: 'ACT',
            totalPropertiesOwned: 4,
          },
          {
            id: 87,
            fullName: 'David Seymour',
            politicalParty: 'ACT',
            totalPropertiesOwned: 4,
          },
          {
            id: 88,
            fullName: 'Gaurav Sharma',
            politicalParty: 'Independent',
            totalPropertiesOwned: 1,
          },
          {
            id: 89,
            fullName: 'James Shaw',
            politicalParty: 'Green',
            totalPropertiesOwned: 1,
          },
          {
            id: 90,
            fullName: 'Penny Simmonds',
            politicalParty: 'National',
            totalPropertiesOwned: 6,
          },
          {
            id: 91,
            fullName: 'Scott Simpson',
            politicalParty: 'National',
            totalPropertiesOwned: 4,
          },
          {
            id: 92,
            fullName: 'Aupito William Sio',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 93,
            fullName: 'Damien Smith',
            politicalParty: 'ACT',
            totalPropertiesOwned: 0,
          },
          {
            id: 94,
            fullName: 'Stuart Smith',
            politicalParty: 'National',
            totalPropertiesOwned: 5,
          },
          {
            id: 95,
            fullName: 'Erica Stanford',
            politicalParty: 'National',
            totalPropertiesOwned: 3,
          },
          {
            id: 96,
            fullName: 'Jamie Strange',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 97,
            fullName: 'Chlöe Swarbrick',
            politicalParty: 'Green',
            totalPropertiesOwned: 1,
          },
          {
            id: 98,
            fullName: 'Jan Tinetti',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 99,
            fullName: 'Rino Tirikatene',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 100,
            fullName: 'Teanau Tuiono',
            politicalParty: 'Green',
            totalPropertiesOwned: 2,
          },
          {
            id: 101,
            fullName: 'Phil Twyford',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 102,
            fullName: 'Louise Upston',
            politicalParty: 'National',
            totalPropertiesOwned: 2,
          },
          {
            id: 103,
            fullName: 'Tangi Utikere',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 104,
            fullName: 'Tim van de Molen',
            politicalParty: 'National',
            totalPropertiesOwned: 3,
          },
          {
            id: 105,
            fullName: 'Brooke van Velden',
            politicalParty: 'ACT',
            totalPropertiesOwned: 1,
          },
          {
            id: 106,
            fullName: 'Ayesha Verrall',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 107,
            fullName: 'Rawiri Waititi',
            politicalParty: 'Māori',
            totalPropertiesOwned: 1,
          },
          {
            id: 108,
            fullName: 'Louisa Wall',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 109,
            fullName: 'Vanushi Walters',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 110,
            fullName: 'Angie Warren-Clark',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 111,
            fullName: 'Simon Watts',
            politicalParty: 'National',
            totalPropertiesOwned: 3,
          },
          {
            id: 112,
            fullName: 'Duncan Webb',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 113,
            fullName: 'Meka Whaitiri',
            politicalParty: 'Labour',
            totalPropertiesOwned: 3,
          },
          {
            id: 114,
            fullName: 'Helen White',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 115,
            fullName: 'Arena Williams',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 116,
            fullName: 'Poto Williams',
            politicalParty: 'Labour',
            totalPropertiesOwned: 2,
          },
          {
            id: 117,
            fullName: 'Nicola Willis',
            politicalParty: 'National',
            totalPropertiesOwned: 4,
          },
          {
            id: 118,
            fullName: 'Michael Wood',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 119,
            fullName: 'Michael Woodhouse',
            politicalParty: 'National',
            totalPropertiesOwned: 3,
          },
          {
            id: 120,
            fullName: 'Megan Woods',
            politicalParty: 'Labour',
            totalPropertiesOwned: 1,
          },
          {
            id: 121,
            fullName: 'Ibrahim Omer',
            politicalParty: 'Labour',
            totalPropertiesOwned: 0,
          },
        ])
      })
  )
}
