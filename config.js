var config = {
    style: 'mapbox://styles/ehalas99/cki5jnkbr2uch19phfyuhf4fn',
    accessToken: 'pk.eyJ1IjoiZWhhbGFzOTkiLCJhIjoiY2toYzVpbWZ6MDNmZTJ6dDNsMjY4MGk5NSJ9.uFWk-hftI60D6fllPAN3Jg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'United States of Old Country Stores',
    subtitle: 'Concentration of Cracker Barrels across the US',
    byline: 'By Elizabeth Halasz',
    footer: 'Sources: <a href="https://news.crackerbarrel.com/newsroom/media-downloads/photos/logos">Cracker Barrel official logo</a>. <a href="https://twitter.com/MSUMapLib/status/595217773657255937">MSU Map Library Brocure.</a>',
    chapters: [
        {
            id: 'inspo-id',
            title: 'Inspiration',
            image: 'https://news.crackerbarrel.com/-/media/CrackerBarrel/About/Media-Kit/Logos/CBLogoRGB_248x248_low.jpg?h=248&w=248&la=en&hash=7DF75B380EC033D1A0283333AADCBE71B5414A97',
            description: 'The inspiration for this map and map style comes from a <a href="https://twitter.com/MSUMapLib/status/595217773657255937">1987s Cracker Barrel brocure</a> from MSUs map library. With the locations of Cracker Barrels around the country already geocoded as points (from a dataset in our google drive), all I needed to do to create a chloropleth map was to join the points with a US state layer and then style the data ranges in mapbox!',
            location: {
                center: [-111.80542, 39.59747],
                zoom: 2.94,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'data-id',
            title: 'Data Used',
            //image: './path/to/image/source.png',
            description: 'To combine my point and polygon data, I used mapshaper.org. I did a spatial join to add the count of points to state polygons and exported the new .json file to Mapbox.',
            location: {
                center: [-108.80542, 37.59747],
                zoom: 3.55,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'style-id',
            title: 'Style',
            image: 'https://pbs.twimg.com/media/CEKjaTrWgAAPBni?format=jpg&name=medium',
            description: 'To style the map, I used the color scheme from this 1987 Cracker Barrel brocure and added 2 other color stops to create a chloropleth map of the restaurant by state (in incriments of 15). I also created a custom point icon using the rocking chair loading icon from the cracker barrel webstite. Click <a href="https://api.mapbox.com/styles/v1/ehalas99/cki5jnkbr2uch19phfyuhf4fn.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZWhhbGFzOTkiLCJhIjoiY2toYzVpbWZ6MDNmZTJ6dDNsMjY4MGk5NSJ9.uFWk-hftI60D6fllPAN3Jg#4/38.77/-86.8">here</a> to explore the map!',
            location: {
                center: [-86.48126, 33.71801],
                zoom: 5.40,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
