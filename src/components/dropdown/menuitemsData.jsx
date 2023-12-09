export const menuItemsData = [
    {
        title: 'Hjem',
        url: '/',
    },
    {
        title: 'Information',
        url: '',
        submenu: [
            {
                title: 'Praktisk',
                url: 'praktisk',
            },
            {
                title: 'Året på Fusfri',
                url: 'åretpå',
                submenu: [
                    {
                        title: 'Kalender',
                        url: 'information',
                    },
                ]
            },
            {
                title: 'Friskolen',
                url:'/friskole',
            },
            {
                title: 'Dagtilbud',
                url: '',
                submenu: [
                    {
                        title: 'Børnehaven',
                        url: 'børnehave',
                    },
                    {
                        title: 'Vuggestuen',
                        url: 'vuggestue',
                    },
                ]
            },
            {
                title: 'Faciliteter',
                url: 'faciliteter',
            },
            {
                title: 'Forældreinfo.',
                url: 'forældreinfo',
            },
        ],
    },
    {
        title: 'Om Fusfri',
        url: '/om',
        submenu: [
            {
                title: 'Personale',
                url: 'personale',
            },
            {
                title: 'Værdier',
                url: 'værdier',
            },
            {
                title: 'Organisatorisk',
                url: 'organisatorisk',
            },
            {
                title: 'Om os',
                url: 'om',
            },
        ],
    },
    {
        title: 'Kontakt',
        url: '/kontakt',
        submenu: [
            {
                title: 'Kontakt info.',
                url: 'kontakt-info',
            },
            {
                title: 'Ledige Stillinger',
                url: 'ledige-stillinger',
            },
            {
                title: 'Spørgsmål?',
                url: 'spørgsmål',
            },
        ],
    },

];