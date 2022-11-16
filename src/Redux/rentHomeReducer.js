import { uid } from "uid"

const initialState = {
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
                img :"https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-23-at-13.18.16-525x328.jpeg",
                id:uid(),
            },

            {   name: 'Belle Villa Meublée de 6 Pièces',
                project:'Riviera Golf 4',
                addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
                description:[
                    'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
                    'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
                    'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
                ],
                prices :'7500000',
                img :"https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-13-at-11.44.48-525x328.jpeg",
                id:uid(),
            },

            {   name: 'Belle Villa Meublée de 6 Pièces',
                project:'Riviera Golf 4',
                addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
                description:[
                    'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
                    'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
                    'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
                ],
                prices :'7500000',
                img :"https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-13-at-11.44.48-525x328.jpeg",
                id:uid(),
            },
            {   name: 'Belle Villa Meublée de 6 Pièces ',
                project:'Riviera Golf 4',
                addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
                description:[
                    'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
                    'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
                    'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
                ],
                prices :'5500000',
                img :"https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-23-at-13.18.16-525x328.jpeg",
                id:uid(),
                // images:["https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-23-at-13.18.16-525x328.jpeg",
                //         "https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-13-at-11.44.48-525x328.jpeg",
                //         ]
            },
        
            {   name: 'Belle Villa Meublée de 6 Pièces',
                project:'Riviera Golf 4',
                addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
                description:[
                    'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
                    'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
                    'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
                ],
                prices :'7500000',
                img :"https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-13-at-11.44.48-525x328.jpeg",
                id:uid(),
            },
        
            {   name: 'Belle Villa Meublée de 6 Pièces',
                project:'Riviera Golf 4',
                addresse: 'Belle villa meublée haut standing située à Songon  Riviera Golf 4  à proximité du lycée Blaise Pascal,',
                description:[
                    'Superbe penthouse de 3 pièces à Riviera mondial béton avec vue sur la lagune ',
                    'chambre principale autonome','salle d’eau extérieure à la seconde chambre',
                    'toilette visiteur','séjour staffé','cuisine européenne','immense terrasse et immense cour'
                ],
                prices :'7500000',
                img :"https://isis-immobilier.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-13-at-11.44.48-525x328.jpeg",
                id:uid(),
            },
            
    ],
}

export function rentHomeReducer(state = initialState, action) {
    switch (action.type) {
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