export const solutionQuestions = [
    {
        title: "How bikeable is each neighborhood", 
        description: "based on infrastructure, terrain, and access to amenities?"
    }, 
    {
        title: "How walkable is each street corner", 
        description: "based on what you can reach on foot?"
    }, 
    {
        title: "How friendly is a specific route", 
        description: "for walking or biking, compared with the alternatives?"
    }
]

export const mapmodeLearnedLessons = [
    {
        title: "Turning a real-world question into math",
        description: "Defining \"bikeability\" meant deciding which factors matter, how to measure each one, and how much weight to give it. Every modeling decision changed what the map told people."
    },
    {
        title: "Geospatial data engineering",
        description: "I learned to join messy datasets from very different sources on a shared key (census tracts GEOIDs), work with shapefiles and elevation rasters, and calculate statistics across geographic zones."
    },
    {
        title: "Normalizing and Visualizing Data",
        description: "Raw scores ranged from 3 to over 2000, whicb meant nothing to a residet. Scaling them to an intuitive 0-100 range taught me that a metric is only useful if people can understand it."
    },
    {
        title: "Designing for distance",
        description: "Adding inverse-distance decay to the route-level score showed me how much realistic a model gets when it reflects how people actually experience a city. "
    },
    {
        title: "Building as a team",
        description: "Collaborating with others taught me the importance of clear communication, version control, and dividing tasks effectively to build a cohesive project."
    },
]


export const whatsNext = [
    {
        title:"Richer transit metrics", 
        description: "Use full GTFS schedules to factor in service frequency and time of day, not just stop locations."
    }, 
    {
        title:"Safety and Comfort", 
        description: "Add crash data, speed limits, and traffic volume to estimate Level of Traffic Stress, shifting the bike score from \"can you bike here?\" to \"would the average person feel comfortable biking here?\""
    }, 
    {
        title:"Sidewalk quality", 
        description: "Include sidewalk presence and condition, possibly using computer vision on street-level imagery."
    }, 
    {
        title:"15 minute neighborhoods", 
        description: "Identify areas where groceries, healthcare, schools, and parks are all a short walk or ride away."
    }, 
    {
        title:"Expansion beyond Cleveland", 
        description: "Make the pipeline configurable for all of Cuyahoga County or any other city."
    }, 
    {
        title:"Planner tools", 
        description: "Let planners simulate a new bike lane or bus stop and instantly see how scores change."
    }
]



export const keyMapsModeFeatures = [
    {
        title:"Bike Score by Census Tract", 
        description:"A 7-factor weighted model combining bike lane density, intersection density, cycling mode share, amenity access, mobility hubs, rental bike availability, and slope. Each factor is normalized and weighted, with bike lane density weighted highest at 25%, then mapped as a citywide choropleth.", 
        imageURL:"/mapsmode/bike-score-map.png"
    }, 
    {
        title:"Route-level Bike Scoring", 
        description:"Extends the tract model to individual addresses and routes. It uses an inverse-distance decay function, so nearby amenities, hubs, and bikes count more than distant ones.", 
        imageURL:"/mapsmode/bike-network.png"
    }, 
    {
        title:"Walkability Heatmap", 
        description:"Walk Scores for roughly 70,000 street corners across Cleveland, based on how many weighted points of interest are reachable within 5, 10, and 20 minutes, normalized to a 0–100 scale.", 
        imageURL:"/mapsmode/university-circle.png"
    }, 
    {
        title:"Transit Score", 
        description:"A 0–100 score built from stop proximity, route diversity, and distance to the nearest stop within 500 meters. It classifies areas as high-access, moderate-access, or transit deserts (more than 800 m from a stop).", 
        imageURL:""
    }, 
    {
        title:"Interactive Map", 
        description:"Toggle walk, bike, and transit layers, search any location, and pan, zoom, or click to see scores.", 
        imageURL:"/mapsmode/interactive-map.png"
    },
    {
        title:"Cloud Data Pipeline", 
        description:"Scheduled AWS Lambda ETL jobs ingest OpenStreetMap, GTFS, and Census data into S3. A FastAPI service behind API Gateway then serves scores and map tiles to a React + Mapbox GL frontend.", 
        imageURL:"/mapsmode/aws-architecture.png"
    }, 
]