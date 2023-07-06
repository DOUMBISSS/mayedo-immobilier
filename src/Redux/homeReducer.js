import { uid } from "uid"

const initialState = {
    homes: [
        {
        name: 'Belle Villa Meublée de 6 Pièces ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        img :[
            "villa 01.jpg",
            "villa 02.jpg",
            "villa 05.jpeg",
            "villa 07.jpeg",
        ],
        id:1,
    },

    {
        name: 'Villa Duplex Haut Standing 6 Pièces – Cocody Angré',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        img :[
            "villa 21.jpeg",
            "villa 21.jpeg",
            "villa 22.jpeg",
            "villa 03.jpg",
        ],
        id:2,
    },

    {
        name: 'Villa Duplex 5 Pièces Yopougon ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        img :[
            "villa 50.jpg",
            "villa 51.jpg",
            "villa 52.jpg",
            "villa 53.jpg",
        ],
        id:3,
    },
    ],

    rentHomes: [
    {
        name: 'Belle Villa Meublée de 6 Pièces ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"Studios",
        types:"Appartement",
        img :[
            "villa 01.jpg",
            "villa 02.jpg",
            "villa 05.jpeg",
            "villa 07.jpeg",
        ],
        id:1,
    },

    {
        name: 'Belle Villa Meublée de 6 Pièces',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"2 pièces",
        types:"Appartement",
        img :[
            "villa 21.jpeg",
            "villa 21.jpeg",
            "villa 22.jpeg",
            "villa 03.jpg",
        ],
        id:2,
    },

    {
        name: 'Villa Duplex 5 Pièces Yopougon ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"3 pièces",
        types:"Appartement",
        img :[
            "villa 50.jpg",
            "villa 51.jpg",
            "villa 52.jpg",
            "villa 53.jpg",
        ],
        id:3,
    },

    {
        name: 'Belle Villa Meublée de 6 Pièces ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"4 pièces",
        types:"Villa",
        img :[
            "villa 01.jpg",
            "villa 02.jpg",
            "villa 05.jpeg",
            "villa 07.jpeg",
        ],
        id:4,
    },

    {
        name: 'Belle Villa Meublée de 6 Pièces ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"2 pièces",
        types:"Appartement",
        img :[
            "villa 42.jpg",
            "villa 40.jpg",
            "villa 41.jpg",
            "villa 43.jpg",
        ],
        id:5,
    },

    {
        name: 'Villa Duplex 5 Pièces Yopougon ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"2 pièces",
        types:"Appartement",
        img :[
            "villa 60.jpg",
            "villa 61.jpg",
            "villa 62.jpg",
            "villa 63.jpg",
        ],
        id:6,
    },
    {
        name: 'Belle Villa Meublée de 6 Pièces ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        nmbres:"4 pièces",
        types:"Villa",
        prices :'5500000',
        img :[
            "villa 01.jpg",
            "villa 02.jpg",
            "villa 05.jpeg",
            "villa 07.jpeg",
        ],
        id:7,
    },

    {
        name: 'Belle Villa Meublée de 6 Pièces ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"3 pièces",
        types:"Villa",
        img :[
            "villa 21.jpeg",
            "villa 21.jpeg",
            "villa 22.jpeg",
            "villa 03.jpg",
        ],
        id:8,
    },

    {
        name: 'Villa Duplex 5 Pièces Yopougon ',
        project:'Riviera Golf 4',
        addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
        description:[
            'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
            'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
            'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
        ],
        prices :'5500000',
        nmbres:"2 pièces",
        types:"Appartement",
        img :[
            "villa 50.jpg",
            "villa 51.jpg",
            "villa 52.jpg",
            "villa 53.jpg",
        ],
        id:9,
    },
        
    ],

}

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-HOMES": {
            return {
                ...state,homes : action.payload
            }
        }
        case "GET-RENT-HOMES": {
            return {
                ...state,rentHomes : action.payload
            }
        }
        default: {
            return state
        }
    }
  
}