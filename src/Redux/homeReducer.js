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
        id:uid(),
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
        id:uid(),
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
        id:uid(),
    },
]
}

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-HOMES": {
            return {
                ...state,homes : action.payload
            }
        }
        default: {
            return state
        }
    }
  
}