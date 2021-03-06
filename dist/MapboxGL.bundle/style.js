"use strict";

module.exports = {
  "version": 3,
  "sprite": "https://www.mapbox.com/mapbox-gl-styles/sprites/outdoors",
  "glyphs": "https://mapbox.s3.amazonaws.com/gl-glyphs-256/{{fontstack}}/{{range}}.pbf",
  "sources": {
    "mapbox": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-terrain-v1,mapbox.mapbox-streets-v5",
      "tileSize": 512,
      "maxZoom": 14
    }
  },
  "constants": {
    "@land": "rgb(244,239,225)",
    "@water": "#cdd",
    "@water_dark": "#185869",
    "@crop": "#eeeed4",
    "@grass": "#e6e6cc",
    "@scrub": "#dfe5c8",
    "@wood": "#cee2bd",
    "@snow": "#f4f8ff",
    "@rock": "#ddd",
    "@sand": "#ffd",
    "@cemetery": "#edf4ed",
    "@pitch": "#fff",
    "@park": "#d4e4bc",
    "@piste": "blue",
    "@school": "#e8dfe0",
    "@hospital": "#f8eee0",
    "@builtup": "#f6faff",
    "@case": "#fff",
    "@motorway": "#cda0a0",
    "@main": "#ddc0b9",
    "@street": "#fff",
    "@text": "#666",
    "@text_stroke": "rgba(255,255,255,0.8)",
    "@country_text": "#222",
    "@marine_text": "#a0bdc0",
    "@water_text": "#185869",
    "@land_night": "#017293",
    "@water_night": "#103",
    "@water_dark_night": "#003366",
    "@crop_night": "#178d96",
    "@grass_night": "#23948a",
    "@scrub_night": "#31a186",
    "@wood_night": "#45b581",
    "@park_night": "#51bd8b",
    "@snow_night": "#5ad9fe",
    "@rock_night": "#999",
    "@sand_night": "#437162",
    "@cemetery_night": "#218c96",
    "@pitch_night": "rgba(255,255,255,0.2)",
    "@school_night": "#01536a",
    "@hospital_night": "#015e7a",
    "@builtup_night": "#014b60",
    "@admin_night": "#ffb680",
    "@text_night": "#fff",
    "@text_water_night": "#2a5b8a",
    "@text_stroke_night": "#103",
    "@text2_stroke_night": "rgba(1,69,89,0.8)",
    "@case_night": "#015e7a",
    "@street_case_night": "#015b76",
    "@motorway_night": "#bbdde7",
    "@main_night": "#64b2c9",
    "@street_night": "#0186ac",
    "@contour_night": "#ffff80",
    "@river_canal_width": {
      "fn": "stops",
      "stops": [[11, 0.5], [12, 1], [14, 2], [16, 3]]
    },
    "@stream_width": {
      "fn": "stops",
      "stops": [[13, 0.25], [14, 0.5], [16, 1.5], [18, 2]]
    },
    "@motorway_width": {
      "fn": "stops",
      "stops": [[5, 0], [6, 0.5], [8, 0.8], [10, 1], [11, 1.2], [12, 2], [13, 3], [14, 4], [15, 6], [16, 9], [17, 12], [18, 14]]
    },
    "@motorway_casing_width": {
      "fn": "stops",
      "stops": [[7.5, 0.6], [8, 0.8], [10, 2.8], [11, 3], [12, 4], [13, 5], [14, 6.5], [15, 9], [16, 12], [17, 15], [18, 17]]
    },
    "@motorway_link_width": {
      "fn": "stops",
      "stops": [[12, 1.2], [14, 2], [16, 3], [18, 4]]
    },
    "@motorway_link_casing_width": {
      "fn": "stops",
      "stops": [[12, 2.8], [14, 3.5], [16, 5], [18, 6]]
    },
    "@main_width": {
      "fn": "stops",
      "stops": [[5, 1], [12, 1], [13, 1.5], [14, 2], [15, 3], [16, 6], [17, 10], [18, 12]]
    },
    "@main_casing_width": {
      "fn": "stops",
      "stops": [[9, 2.9], [12, 2.9], [13, 3.5], [14, 4], [15, 5.5], [16, 9], [17, 12], [18, 14]]
    },
    "@street_width": {
      "fn": "stops",
      "stops": [[14.5, 0], [15, 1.5], [16, 3], [17, 8]]
    },
    "@street_casing_width": {
      "fn": "stops",
      "stops": [[13, 0.4], [14, 1], [15, 2.5], [16, 4], [17, 10]]
    },
    "@street_casing_opacity": {
      "fn": "stops",
      "stops": [[14, 0], [14.5, 1]]
    },
    "@service_casing_width": {
      "fn": "stops",
      "stops": [[14, 0.5], [15, 3], [16, 3.5], [17, 4], [18, 5], [19, 6]]
    },
    "@runway_width": {
      "fn": "stops",
      "stops": [[10, 1], [11, 2], [12, 3], [13, 5], [14, 7], [15, 11], [16, 15], [17, 19], [18, 23]]
    },
    "@taxiway_width": {
      "fn": "stops",
      "stops": [[10, 0.2], [12, 0.2], [13, 1], [14, 1.5], [15, 2], [16, 3], [17, 4], [18, 5]]
    },
    "@aerialway_width": {
      "fn": "stops",
      "stops": [[13.5, 0.8], [14, 1.4], [15, 1.6], [16, 2], [17, 2.4], [18, 3]]
    },
    "@aerialway_casing_width": {
      "fn": "stops",
      "stops": [[13.5, 2], [14, 2.5], [15, 3], [16, 3.5], [17, 4], [22, 5]]
    },
    "@path_width": {
      "fn": "stops",
      "stops": [[14, 1.2], [15, 1.5], [16, 1.8]]
    },
    "@admin_l2_width": {
      "fn": "stops",
      "stops": [[2, 0.5], [3, 0.7], [4, 0.7], [5, 0.8], [6, 1], [8, 2], [10, 3]]
    },
    "@admin_l3_width": {
      "fn": "stops",
      "stops": [[6, 0.6], [8, 1], [12, 2]]
    },
    "@road_label_1_size": {
      "fn": "stops",
      "stops": [[13, 11], [14, 12], [15, 13], [16, 14], [17, 16], [18, 18]]
    },
    "@road_label_2_size": {
      "fn": "stops",
      "stops": [[13, 11], [14, 12], [16, 14], [18, 16]]
    },
    "@road_label_3_size": {
      "fn": "stops",
      "stops": [[15, 10], [16, 12], [18, 14]]
    },
    "@fence_width": {
      "fn": "stops",
      "stops": [[17, 0.6], [19, 1]]
    },
    "@hedge_width": {
      "fn": "stops",
      "stops": [[16, 0.6], [17, 1.2], [19, 1.6]]
    },
    "@barrier_line_land_width": {
      "fn": "stops",
      "stops": [[14, 0.4], [15, 0.75], [16, 1.5], [17, 3], [18, 6], [19, 12], [20, 24], [21, 48]]
    },
    "@country_label_size": {
      "fn": "stops",
      "stops": [[1, 14], [12, 24]]
    },
    "@poi_label_1-2_size": {
      "fn": "stops",
      "stops": [[15, 10], [16, 11], [17, 12]]
    },
    "@poi_label_3_size": {
      "fn": "stops",
      "stops": [[16, 10], [17, 11]]
    },
    "@hillshade_rasterize": {
        "enabled": {
            "fn": "stops",
            "stops": [[11, false], [12, true]]
        },
        "size": {
            "fn": "stops",
            "stops": [[11, 1024], [12, 512], [13, 256]]
        },
        "blur": 1
    }
  },
  "layers": [{
    "id": "background",
    "render": {
      "type": "background"
    },
    "style": {
      "background-color": "@land"
    },
    "style.night": {
      "background-color": "@land_night"
    }
  }, {
    "id": "landcover_snow",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "snow" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@snow"
    },
    "style.night": {
      "fill-color": "@snow_night"
    }
  }, {
    "id": "landcover_crop",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "crop" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@crop"
    },
    "style.night": {
      "fill-color": "@crop_night"
    }
  }, {
    "id": "landcover_grass",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "grass" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@grass",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[13, 1], [14, 0.8], [17, 0.2]]
      }
    },
    "style.night": {
      "fill-color": "@grass_night",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[13, 1], [14, 0.8], [17, 0.2]]
      }
    }
  }, {
    "id": "landcover_scrub",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "scrub" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@scrub",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[13, 1], [14, 0.8], [17, 0.2]]
      }
    },
    "style.night": {
      "fill-color": "@scrub_night",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[13, 1], [14, 0.8], [17, 0.2]]
      }
    }
  }, {
    "id": "landcover_wood",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "wood" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@wood",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[13, 1], [14, 0.8], [17, 0.2]]
      }
    },
    "style.night": {
      "fill-color": "@wood_night",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[13, 1], [14, 0.8], [17, 0.2]]
      }
    }
  }, {
    "id": "landuse_wood",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "wood" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@wood"
    },
    "style.night": {
      "fill-color": "@wood_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_school",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "school" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@school"
    },
    "style.night": {
      "fill-color": "@school_night"
    }
  }, {
    "id": "landuse_sand",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "sand" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@sand"
    },
    "style.night": {
      "fill-color": "@sand_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_pitch",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "pitch" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "rgba(255,255,255,0.5)",
      "fill-outline-color": "@pitch"
    },
    "style.night": {
      "fill-color": "@pitch_night",
      "fill-outline-color": "@pitch"
    }
  }, {
    "id": "landuse_park",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "park" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@park"
    },
    "style.night": {
      "fill-color": "@park_night"
    }
  }, {
    "id": "landuse_industrial",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "industrial" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "rgba(246,250,255,0.5)"
    },
    "style.night": {
      "fill-color": "@builtup_night"
    }
  }, {
    "id": "landuse_scrub",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "scrub" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@scrub"
    },
    "style.night": {
      "fill-color": "@scrub_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_grass",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "grass" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@grass"
    },
    "style.night": {
      "fill-color": "@grass_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_crop",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "crop" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@crop"
    },
    "style.night": {
      "fill-color": "@crop_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_rock",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "rock" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@rock"
    },
    "style.night": {
      "fill-color": "@rock_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_snow",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "snow" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@snow"
    },
    "style.night": {
      "fill-color": "@snow_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_hospital",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "hospital" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@hospital"
    },
    "style.night": {
      "fill-color": "@hospital_night"
    }
  }, {
    "id": "landuse_cemetery",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "cemetery" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@cemetery"
    },
    "style.night": {
      "fill-color": "@cemetery_night"
    }
  }, {
    "id": "overlay_wetland",
    "source": "mapbox",
    "source-layer": "landuse_overlay",
    "filter": { "class": ["wetland", "wetland_noveg"] },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "rgba(210,225,225,0.2)",
      "fill-image": "wetland_noveg_64"
    },
    "style.night": {
      "fill-color": "rgba(210,225,225,0.2)",
      "fill-image": "wetland_noveg_64"
    }
  }, {
    "id": "overlay_breakwater_pier",
    "source": "mapbox",
    "source-layer": "landuse_overlay",
    "filter": { "class": ["breakwater", "pier"] },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@land"
    },
    "style.night": {
      "fill-color": "@land_night"
    }
  }, {
    "id": "waterway_river_canal",
    "source": "mapbox",
    "source-layer": "waterway",
    "filter": { "type": ["river", "canal"] },
    "render": {
      "type": "line",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#87abaf",
      "line-width": "@river_canal_width"
    },
    "style.night": {
      "line-color": "rgb(10,20,71)",
      "line-width": "@river_canal_width"
    }
  }, {
    "id": "waterway_stream",
    "source": "mapbox",
    "source-layer": "waterway",
    "filter": { "type": "stream" },
    "render": {
      "type": "line",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#87abaf",
      "line-width": "@stream_width"
    },
    "style.night": {
      "line-color": "rgb(10,20,71)",
      "line-width": "@stream_width"
    }
  }, {
    "id": "building_shadow",
    "source": "mapbox",
    "source-layer": "building",
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "#d5d1c6",
      "fill-translate": [1, 1],
      "fill-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [17, 1]]
      },
      "fill-outline-color": "#d5d1c6"
    },
    "style.night": {
      "fill-color": "#026688",
      "fill-translate": [1, 1],
      "fill-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [17, 1]]
      },
      "fill-outline-color": "#026688"
    }
  }, {
    "id": "building",
    "ref": "building_shadow",
    "style": {
      "fill-color": "#ebe7db"
    },
    "style.night": {
      "fill-color": "#027797"
    }
  }, {
    "id": "building_wall",
    "ref": "building_shadow",
    "style": {
      "fill-color": "#ebe7db",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [17, 0.7]]
      },
      "fill-outline-color": "#d5d1c6"
    },
    "style.night": {
      "fill-color": "#027797",
      "fill-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [17, 0.7]]
      },
      "fill-outline-color": "#026688"
    }
  }, {
    "id": "hillshade_full_highlight",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "full_highlight" },
    "render": {
      "type": "fill"
    },
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#fffff3",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[15, 0.3], [16, 0.3], [17, 0.2], [18, 0.2], [19, 0.1]]
      }
    },
    "style.night": {
      "fill-color": "#fdfdad",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[14, 0.4], [15, 0.3], [17, 0.2], [18, 0.1], [19, 0.05]]
      }
    }
  }, {
    "id": "hillshade_medium_highlight",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "medium_highlight" },
    "render": {
      "type": "fill"
    },
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#ffd",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[15, 0.3], [16, 0.3], [17, 0.2], [18, 0.2], [19, 0.1]]
      }
    },
    "style.night": {
      "fill-color": "#ffe1b7",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[15, 0.3], [17, 0.2], [18, 0.15], [19, 0.05]]
      }
    }
  }, {
    "id": "hillshade_medium_shadow",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "medium_shadow" },
    "render": {
      "type": "fill"
    },
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#206",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[15, 0.08], [16, 0.075], [17, 0.05], [18, 0.05], [19, 0.025]]
      }
    },
    "style.night": {
      "fill-color": "#206",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[16, 0.3], [17, 0.2], [18, 0.1], [19, 0.05]]
      }
    }
  }, {
    "id": "hillshade_full_shadow",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "full_shadow" },
    "render": {
      "type": "fill"
    },
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#103",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[15, 0.08], [16, 0.075], [17, 0.05], [18, 0.05], [19, 0.025]]
      }
    },
    "style.night": {
      "fill-color": "#103",
      "fill-antialias": false,
      "fill-opacity": {
        "fn": "stops",
        "stops": [[16, 0.3], [17, 0.2], [18, 0.1], [19, 0.05]]
      }
    }
  }, {
    "id": "contour_line_loud",
    "source": "mapbox",
    "source-layer": "contour",
    "filter": { "index": 5 },
    "render": {
      "type": "line",
      "line-join": "round"
    },
    "style": {
      "line-color": "#008",
      "line-width": 0.9,
      "line-opacity": {
        "fn": "stops",
        "stops": [[12, 0.05], [13, 0.11]]
      }
    },
    "style.night": {
      "line-color": "@contour_night",
      "line-width": 0.9,
      "line-opacity": {
        "fn": "stops",
        "stops": [[12, 0.1], [13, 0.2]]
      }
    }
  }, {
    "id": "contour_line_regular",
    "source": "mapbox",
    "source-layer": "contour",
    "render": {
      "type": "line",
      "line-join": "round"
    },
    "style": {
      "line-color": "#008",
      "line-width": 0.5,
      "line-opacity": {
        "fn": "stops",
        "stops": [[12, 0.05], [13, 0.11]]
      }
    },
    "style.night": {
      "line-color": "@contour_night",
      "line-width": 0.5,
      "line-opacity": {
        "fn": "stops",
        "stops": [[12, 0.1], [13, 0.4]]
      }
    }
  }, {
    "id": "barrier_line_gate",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "gate" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-width": 2.5,
      "line-color": "#aab"
    },
    "style.night": {
      "line-width": 2.5,
      "line-color": "#59596f"
    }
  }, {
    "id": "barrier_line_fence",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "fence" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#aeada3",
      "line-width": "@fence_width"
    },
    "style.night": {
      "line-color": "#014b61",
      "line-width": "@fence_width"
    }
  }, {
    "id": "barrier_line_hedge",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "hedge" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#8de99b",
      "line-width": "@hedge_width"
    },
    "style.night": {
      "line-color": "#2e7a57",
      "line-width": "@hedge_width"
    }
  }, {
    "id": "barrier_line_land",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "land" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "@land",
      "line-width": "@barrier_line_land_width"
    },
    "style.night": {
      "line-color": "@land_night",
      "line-width": "@barrier_line_land_width"
    }
  }, {
    "id": "barrier_line_land_fill",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "land" },
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@land"
    },
    "style.night": {
      "fill-color": "@land_night"
    }
  }, {
    "id": "barrier_line_cliff",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "cliff" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#987",
      "line-width": 4
    },
    "style.night": {
      "line-color": "#63574b",
      "line-width": 4
    }
  }, {
    "id": "water",
    "source": "mapbox",
    "source-layer": "water",
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "@water",
      "fill-outline-color": "#a2bdc0"
    },
    "style.night": {
      "fill-color": "@water_night",
      "fill-outline-color": "@water_dark_night"
    }
  }, {
    "id": "aeroway_fill",
    "source": "mapbox",
    "source-layer": "aeroway",
    "render": {
      "type": "fill"
    },
    "style": {
      "fill-color": "#ddd"
    },
    "style.night": {
      "fill-color": "#367"
    }
  }, {
    "id": "aeroway_runway",
    "source": "mapbox",
    "source-layer": "aeroway",
    "filter": { "type": "runway" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#ddd",
      "line-width": "@runway_width"
    },
    "style.night": {
      "line-color": "#367",
      "line-width": "@runway_width"
    }
  }, {
    "id": "aeroway_taxiway",
    "source": "mapbox",
    "source-layer": "aeroway",
    "filter": { "type": "taxiway" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#ddd",
      "line-width": "@taxiway_width"
    },
    "style.night": {
      "line-color": "#367",
      "line-width": "@taxiway_width"
    }
  }, {
    "id": "tunnel_motorway_link_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "motorway_link" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "@case",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_link_casing_width"
    },
    "style.night": {
      "line-color": "@case_night",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_link_casing_width"
    }
  }, {
    "id": "tunnel_service_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "service" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-dasharray": [6, 6],
      "line-width": "@service_casing_width"
    },
    "style.night": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-dasharray": [6, 6],
      "line-width": "@service_casing_width"
    }
  }, {
    "id": "tunnel_main_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "main" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "@case",
      "line-dasharray": [6, 6],
      "line-width": "@main_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9, 0], [10, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-dasharray": [6, 6],
      "line-width": "@main_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9, 0], [10, 1]]
      }
    }
  }, {
    "id": "tunnel_street_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": ["street", "street_limited"] },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    },
    "style.night": {
      "line-color": "@street_case_night",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    }
  }, {
    "id": "tunnel_motorway_link",
    "ref": "tunnel_motorway_link_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": "@motorway_link_width"
    },
    "style.night": {
      "line-color": "#78b0c1",
      "line-width": "@motorway_link_width"
    }
  }, {
    "id": "tunnel_service",
    "ref": "tunnel_service_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": 2
    },
    "style.night": {
      "line-color": "#017ca0",
      "line-width": 2
    }
  }, {
    "id": "tunnel_street",
    "ref": "tunnel_street_casing",
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_width"
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": "@street_width"
    }
  }, {
    "id": "tunnel_main",
    "ref": "tunnel_main_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": "@main_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    },
    "style.night": {
      "line-color": "#78b0c1",
      "line-width": "@main_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    }
  }, {
    "id": "tunnel_motorway_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "motorway" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "@case",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9.5, 0], [10, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9.5, 0], [10, 1]]
      }
    }
  }, {
    "id": "tunnel_motorway",
    "ref": "tunnel_motorway_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": "@motorway_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    },
    "style.night": {
      "line-color": "#78b0c1",
      "line-width": "@motorway_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    }
  }, {
    "id": "road_path_case",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "path" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#ffd",
      "line-opacity": 0.4,
      "line-width": {
        "fn": "stops",
        "stops": [[15, 3], [16, 4]]
      }
    },
    "style.night": {
      "line-color": "@land_night",
      "line-opacity": 0.2
    }
  }, {
    "id": "road_path_footway",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "footway" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#bba",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#fff",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_path",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "path" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#987",
      "line-dasharray": [10, 4],
      "line-opacity": 0.8,
      "line-width": {
        "fn": "stops",
        "stops": [[14, 0.8], [15, 0.9], [16, 1.2]]
      }
    },
    "style.night": {
      "line-color": "#fff",
      "line-dasharray": [10, 4],
      "line-opacity": 0.8,
      "line-width": {
        "fn": "stops",
        "stops": [[14, 0.8], [15, 0.9], [16, 1.2]]
      }
    }
  }, {
    "id": "road_path_cycleway",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "cycleway" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#488",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#94e6ff",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_mtb",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "mtb" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#488",
      "line-dasharray": [12, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#94e6ff",
      "line-dasharray": [12, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_piste",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "piste" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#87b",
      "line-dasharray": [8, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#715dae",
      "line-dasharray": [8, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_steps",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "steps" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#bba",
      "line-dasharray": [10, 4],
      "line-width": 4
    },
    "style.night": {
      "line-color": "#016684",
      "line-dasharray": [10, 4],
      "line-opacity": 0.3,
      "line-width": 6
    }
  }, {
    "id": "road_major_rail",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "major_rail" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#c8c4c0",
      "line-width": 0.8
    },
    "style.night": {
      "line-color": "#c8c4c0",
      "line-width": 0.8
    }
  }, {
    "id": "road_motorway_link_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "motorway_link" },
    "render": {
      "type": "line",
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_link_casing_width"
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_link_casing_width"
    }
  }, {
    "id": "road_service_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "service" },
    "render": {
      "type": "line",
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    },
    "style.night": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    }
  }, {
    "id": "road_main_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "main" },
    "render": {
      "type": "line",
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9, 0], [10, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9, 0], [10, 1]]
      }
    }
  }, {
    "id": "road_street_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": ["street", "street_limited"] },
    "render": {
      "type": "line",
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    },
    "style.night": {
      "line-color": "@street_case_night",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    }
  }, {
    "id": "road_motorway_link",
    "ref": "road_motorway_link_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_link_width"
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_link_width"
    }
  }, {
    "id": "road_service",
    "ref": "road_service_casing",
    "style": {
      "line-color": "@street",
      "line-width": 2
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": 2
    }
  }, {
    "id": "road_street",
    "ref": "road_street_casing",
    "style": {
      "line-color": "@street",
      "line-width": "@street_width"
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": "@street_width"
    }
  }, {
    "id": "road_main",
    "ref": "road_main_casing",
    "style": {
      "line-color": "@main",
      "line-width": "@main_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    },
    "style.night": {
      "line-color": "@main_night",
      "line-width": "@main_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    }
  }, {
    "id": "road_motorway_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "motorway" },
    "render": {
      "type": "line",
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9.5, 0], [10, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9.5, 0], [10, 1]]
      }
    }
  }, {
    "id": "road_motorway",
    "ref": "road_motorway_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    }
  }, {
    "id": "road_major_rail_hatching",
    "ref": "road_major_rail",
    "style": {
      "line-color": "#c8c4c0",
      "line-dasharray": [2, 31],
      "line-width": 5
    },
    "style.night": {
      "line-color": "#c8c4c0",
      "line-dasharray": [2, 31],
      "line-width": 5
    }
  }, {
    "id": "bridge_motorway_link_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "motorway_link" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_link_casing_width"
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_link_casing_width"
    }
  }, {
    "id": "bridge_service_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "service" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    },
    "style.night": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    }
  }, {
    "id": "bridge_main_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "main" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9, 0], [10, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9, 0], [10, 1]]
      }
    }
  }, {
    "id": "bridge_street_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": ["street", "street_limited"] },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    },
    "style.night": {
      "line-color": "@street_case_night",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    }
  }, {
    "id": "bridge_motorway_link",
    "ref": "bridge_motorway_link_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_link_width"
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_link_width"
    }
  }, {
    "id": "bridge_service",
    "ref": "bridge_service_casing",
    "style": {
      "line-color": "@street",
      "line-width": 2
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": 2
    }
  }, {
    "id": "bridge_street",
    "ref": "bridge_street_casing",
    "style": {
      "line-color": "@street",
      "line-width": "@street_width"
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": "@street_width"
    }
  }, {
    "id": "bridge_main",
    "ref": "bridge_main_casing",
    "style": {
      "line-color": "@main",
      "line-width": "@main_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    },
    "style.night": {
      "line-color": "@main_night",
      "line-width": "@main_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    }
  }, {
    "id": "bridge_motorway_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "motorway" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9.5, 0], [10, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[9.5, 0], [10, 1]]
      }
    }
  }, {
    "id": "bridge_motorway",
    "ref": "bridge_motorway_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_width",
      "line-opacity": {
        "fn": "stops",
        "stops": [[6.5, 0], [7, 1]]
      }
    }
  }, {
    "id": "bridge_aerialway_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "aerialway" },
    "render": {
      "type": "line"
    },
    "style": {
      "line-color": "white",
      "line-opacity": 0.5,
      "line-width": "@aerialway_casing_width"
    },
    "style.night": {
      "line-color": "white",
      "line-opacity": 0.5,
      "line-width": "@aerialway_casing_width"
    }
  }, {
    "id": "bridge_aerialway",
    "ref": "bridge_aerialway_casing",
    "style": {
      "line-color": "#876",
      "line-opacity": 0.5,
      "line-width": "@aerialway_width"
    },
    "style.night": {
      "line-color": "#876",
      "line-opacity": 0.5,
      "line-width": "@aerialway_width"
    }
  }, {
    "id": "admin_l3",
    "source": "mapbox",
    "source-layer": "admin",
    "filter": { "admin_level": [3, 4, 5] },
    "render": {
      "type": "line",
      "line-join": "round"
    },
    "style": {
      "line-color": "#88a",
      "line-dasharray": [60, 20],
      "line-opacity": {
        "fn": "stops",
        "stops": [[4, 0], [6, 1]]
      },
      "line-width": "@admin_l3_width"
    },
    "style.night": {
      "line-color": "@admin_night",
      "line-dasharray": [60, 20],
      "line-opacity": {
        "fn": "stops",
        "stops": [[4, 0], [6, 1]]
      },
      "line-width": "@admin_l3_width"
    }
  }, {
    "id": "admin_l2",
    "source": "mapbox",
    "source-layer": "admin",
    "filter": { "admin_level": 2 },
    "render": {
      "type": "line",
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#88a",
      "line-width": "@admin_l2_width"
    },
    "style.night": {
      "line-color": "@admin_night",
      "line-width": "@admin_l2_width"
    }
  }, {
    "id": "admin_maritime_cover",
    "source": "mapbox",
    "source-layer": "admin",
    "filter": { "maritime": 1 },
    "render": {
      "type": "line",
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@water",
      "line-width": 5
    },
    "style.night": {
      "line-color": "@water_night",
      "line-width": 5
    }
  }, {
    "id": "admin_maritime",
    "ref": "admin_maritime_cover",
    "style": {
      "line-color": "#c0d6d6",
      "line-width": {
        "fn": "stops",
        "stops": [[6, 1], [8, 2], [12, 3]]
      }
    },
    "style.night": {
      "line-color": "#0a1347",
      "line-width": {
        "fn": "stops",
        "stops": [[6, 1], [8, 2], [12, 3]]
      }
    }
  }, {
    "id": "country_label_line",
    "source": "mapbox",
    "source-layer": "country_label_line",
    "render": {
      "text-max-width": 5,
      "type": "line"
    },
    "style": {
      "line-color": "@country_text",
      "line-width": 0.5,
      "line-opacity": 0.5
    },
    "style.night": {
      "line-color": "@text_night",
      "line-width": 0.5,
      "line-opacity": 0.5
    }
  }, {
    "id": "country_label",
    "source": "mapbox",
    "source-layer": "country_label",
    "filter": { "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-width": 5
    },
    "style": {
      "text-color": "@country_text",
      "text-halo-color": "rgba(255,255,255,0.5)",
      "text-halo-width": 0.5,
      "text-size": "@country_label_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.4,
      "text-size": "@country_label_size"
    }
  }, {
    "id": "marine_label_line_1",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "line", "labelrank": 1 },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 30,
      "text-max-angle": 0.5,
      "text-letter-spacing": 0.4
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 20], [4, 25], [5, 30], [22, 30]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 20], [4, 25], [5, 30], [22, 30]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_line_2",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "line", "labelrank": 2 },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 13], [4, 14], [5, 20], [6, 24], [22, 24]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 13], [4, 14], [5, 20], [6, 24], [22, 24]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_line_3",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "line", "labelrank": 3 },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 18,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 12], [4, 13], [5, 15], [6, 18], [22, 18]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 12], [4, 13], [5, 15], [6, 18], [22, 18]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_line_other",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "line", "labelrank": [4, 5, 6] },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 16,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[4, 12], [5, 14], [6, 16], [22, 16]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[4, 12], [5, 14], [6, 16], [22, 16]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_1",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "point", "labelrank": 1 },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 30,
      "text-max-width": 8,
      "text-letter-spacing": 0.4,
      "text-line-height": 2
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 20], [4, 25], [5, 30], [22, 30]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 20], [4, 25], [5, 30], [22, 30]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_2",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "point", "labelrank": 2 },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-width": 8,
      "text-letter-spacing": 0.2,
      "text-line-height": 1.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 13], [4, 14], [5, 20], [6, 24], [22, 24]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 13], [4, 14], [5, 20], [6, 24], [22, 24]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_3",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "point", "labelrank": 3 },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 18,
      "text-max-width": 8,
      "text-letter-spacing": 0.1,
      "text-line-height": 1.3
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 12], [4, 13], [5, 15], [6, 18], [22, 18]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3, 12], [4, 13], [5, 15], [6, 18], [22, 18]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_other",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "point", "labelrank": [4, 5, 6] },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 16,
      "text-max-width": 8,
      "text-letter-spacing": 0.1,
      "text-line-height": 1.2
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "fn": "stops",
        "stops": [[4, 12], [5, 14], [6, 16], [22, 16]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "fn": "stops",
        "stops": [[4, 12], [5, 14], [6, 16], [22, 16]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "state_label",
    "source": "mapbox",
    "source-layer": "state_label",
    "filter": { "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 16,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#333",
      "text-halo-width": 0.4,
      "text-halo-color": "rgba(244,239,225,0.8)",
      "text-size": {
        "fn": "stops",
        "stops": [[3.99, 0], [4, 10], [9.99, 16], [10, 0]]
      }
    },
    "style.night": {
      "text-color": "#fff",
      "text-halo-width": 0.4,
      "text-halo-color": "@land_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3.99, 0], [4, 10], [9.99, 16], [10, 0]]
      }
    }
  }, {
    "id": "place_label_city",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": "city", "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 20,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#444",
      "text-halo-width": 0.4,
      "text-halo-color": "@text_stroke",
      "text-size": {
        "fn": "stops",
        "stops": [[3.99, 0], [4, 10], [7, 14], [14.99, 20], [15, 0]]
      }
    },
    "style.night": {
      "text-color": "#fff",
      "text-halo-width": 0.4,
      "text-halo-color": "@text2_stroke_night",
      "text-size": {
        "fn": "stops",
        "stops": [[3.99, 0], [4, 10], [7, 14], [14.99, 20], [15, 0]]
      }
    }
  }, {
    "id": "place_label_town",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": "town", "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#716656",
      "text-halo-width": 0.3,
      "text-halo-color": "@text_stroke",
      "text-size": {
        "fn": "stops",
        "stops": [[9, 10], [12, 13], [14, 17], [16, 22]]
      }
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-width": 0.3,
      "text-halo-color": "@text2_stroke_night",
      "text-size": {
        "fn": "stops",
        "stops": [[9, 10], [12, 13], [14, 17], [16, 22]]
      }
    }
  }, {
    "id": "place_label_village",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": "village", "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 22,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#635644",
      "text-halo-width": 0.3,
      "text-halo-color": "@text_stroke",
      "text-size": {
        "fn": "stops",
        "stops": [[9, 8], [12, 10], [14, 14], [16, 16], [17, 20]]
      }
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-width": 0.3,
      "text-halo-color": "@text2_stroke_night",
      "text-size": {
        "fn": "stops",
        "stops": [[9, 8], [12, 10], [14, 14], [16, 16], [17, 20]]
      }
    }
  }, {
    "id": "place_label_other",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": ["hamlet", "suburb", "neighbourhood"], "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 18,
      "text-max-width": 6
    },
    "style": {
      "text-color": "#7d6c55",
      "text-halo-color": "@text_stroke",
      "text-size": {
        "fn": "stops",
        "stops": [[13, 11], [14, 12], [16, 14], [18, 18]]
      }
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3,
      "text-size": {
        "fn": "stops",
        "stops": [[13, 11], [14, 12], [16, 14], [18, 18]]
      }
    }
  }, {
    "id": "road_label_1",
    "source": "mapbox",
    "source-layer": "road_label",
    "filter": { "class": ["motorway", "main"], "$type": "line" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-padding": 2,
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 18,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "#585042",
      "text-halo-color": "@land",
      "text-halo-width": 0.6,
      "text-size": "@road_label_1_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.5,
      "text-size": "@road_label_1_size"
    }
  }, {
    "id": "road_label_2",
    "source": "mapbox",
    "source-layer": "road_label",
    "filter": { "class": ["street", "street_limited"], "$type": "line" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-padding": 2,
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 16,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "#585042",
      "text-halo-color": "@land",
      "text-halo-width": 0.6,
      "text-size": "@road_label_2_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.5,
      "text-size": "@road_label_2_size"
    }
  }, {
    "id": "road_label_3",
    "source": "mapbox",
    "source-layer": "road_label",
    "filter": { "class": ["service", "driveway", "path"], "$type": "line" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-padding": 2,
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 14,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "#585042",
      "text-halo-color": "@land",
      "text-halo-width": 0.6,
      "text-size": "@road_label_3_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.5,
      "text-size": "@road_label_3_size"
    }
  }, {
    "id": "contour_label",
    "source": "mapbox",
    "source-layer": "contour",
    "filter": { "index": [5, 10], "$type": "line" },
    "render": {
      "type": "text",
      "text-path": "curve",
      "text-field": "{{ele}} m",
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 10,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@text",
      "text-halo-color": "@land",
      "text-halo-width": 0.3,
      "text-size": 10
    },
    "style.night": {
      "text-color": "@contour_night",
      "text-halo-color": "@land_night",
      "text-halo-width": 0.3,
      "text-size": 10
    }
  }, {
    "id": "water_label",
    "source": "mapbox",
    "source-layer": "water_label",
    "filter": { "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 12,
      "text-max-width": 8
    },
    "style": {
      "text-color": "@water_dark",
      "text-halo-color": "rgba(255,255,255,0.75)"
    },
    "style.night": {
      "text-color": "@text_water_night",
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "waterway_label",
    "source": "mapbox",
    "source-layer": "waterway_label",
    "filter": { "$type": "line" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 12,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@water_dark",
      "text-halo-width": 0.4,
      "text-halo-color": "@text_stroke"
    },
    "style.night": {
      "text-color": "@text_water_night",
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "poi",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": [1, 2] },
    "render": {
      "type": "icon",
      "icon-image": "{{maki}}-12",
      "icon-size": 12
    },
    "style.night": {}
  }, {
    "id": "poi_label_1-2",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": [1, 2], "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-padding": 2,
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 12,
      "text-max-width": 10,
      "text-alignment": "center"
    },
    "style": {
      "text-color": "#444",
      "text-size": "@poi_label_1-2_size",
      "text-halo-color": "@land",
      "text-halo-width": 0.3
    },
    "style.night": {
      "text-color": "#fff",
      "text-size": "@poi_label_1-2_size",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3
    }
  }, {
    "id": "poi_3",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 3 },
    "render": {
      "type": "icon",
      "icon-image": "{{maki}}-12",
      "icon-size": 12
    },
    "style": {
      "icon-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [16.75, 1]]
      }
    },
    "style.night": {
      "icon-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [16.75, 1]]
      }
    }
  }, {
    "id": "poi_label_3",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 3, "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-padding": 2,
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 11,
      "text-max-width": 10,
      "text-alignment": "center"
    },
    "style": {
      "text-color": "#444",
      "text-size": "@poi_label_3_size",
      "text-halo-color": "@land",
      "text-halo-width": 0.3,
      "text-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [16.75, 1]]
      }
    },
    "style.night": {
      "text-color": "#fff",
      "text-size": "@poi_label_3_size",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3,
      "text-opacity": {
        "fn": "stops",
        "stops": [[16.5, 0], [16.75, 1]]
      }
    }
  }, {
    "id": "poi_4",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 4 },
    "render": {
      "type": "icon",
      "icon-image": "{{maki}}-12",
      "icon-size": 12
    },
    "style": {
      "icon-opacity": {
        "fn": "stops",
        "stops": [[18.5, 0], [18.75, 1]]
      }
    },
    "style.night": {
      "icon-opacity": {
        "fn": "stops",
        "stops": [[18.5, 0], [18.75, 1]]
      }
    }
  }, {
    "id": "poi_label_4",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 4, "$type": "point" },
    "render": {
      "type": "text",
      "text-field": "{{name_en}}",
      "text-path": "horizontal",
      "text-padding": 2,
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 10,
      "text-max-width": 10,
      "text-alignment": "center"
    },
    "style": {
      "text-color": "#444",
      "text-size": 10,
      "text-opacity": {
        "fn": "stops",
        "stops": [[18.5, 0], [18.75, 1]]
      },
      "text-halo-color": "@land",
      "text-halo-width": 0.3
    },
    "style.night": {
      "text-color": "#fff",
      "text-size": 10,
      "text-opacity": {
        "fn": "stops",
        "stops": [[18.5, 0], [18.75, 1]]
      },
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3
    }
  }, {
    "id": "poi_aerodrome",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "maki": "airport" },
    "render": {
      "type": "icon",
      "icon-image": "{{maki}}-12",
      "icon-size": 12
    },
    "style": {
      "icon-opacity": {
        "fn": "stops",
        "stops": [[13, 0], [13.25, 1]]
      }
    },
    "style.night": {
      "icon-opacity": {
        "fn": "stops",
        "stops": [[13, 0], [13.25, 1]]
      }
    }
  }]
};
