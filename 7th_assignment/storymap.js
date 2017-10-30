// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1995-2017",
      text: {
        headline: "Lulu's storymap",
        text: "<p> Hello there! My name is Cheng Lulu, a New Media student in Chinese University of Hong Kong Now. Here is something about me. Luoyang, Beijing and Hong Kong are three pla-ces where I have my precious memories during these years!</p>"
      },
      media: {
        url: "http://res.cloudinary.com/smartsales/image/upload/v1486111227/website/DoeMal_JoinUs-Graphic-1400x640.png",
        credit: "Lulu",
        caption: "Journey"
      }
    }, {
      date: "1995",
      text: {
        headline: "CHILDHOOD in LUOYANG",
        text: "<p> I was born in Luoyang, Henan Province, located in the center of mainland China. Luoyang is famous for the culture heritage and beautiful views, where there are Long Men Grotto, White Horse Temple and pretty peonies. In addition, the Luoyang Banquet is the representative food around the country. Living in such a wonderful city, I had a cosy life with my family. </p>"
      },
      location: {
        name: "Life in Luoyang",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 34.620202,
        lon: 112.453926,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://www.chinadiscovery.com/assets/images/henan/1140/luoyang-longmen-grottoes-1140-5.jpg",
        type: 		"image",
        credit: "About Luoyang",
        caption: "My Hometown Luoyang."
      }
    }, {
      date: "2013",
      text: {
        headline: "UNDERGRADUATE in BEIJING",
        text: "<p> After graduating from high school, I was admitted into the University of International Business and Economics ( UIBE ) in Beijing. Being as a Business English student, I learned knowledge from language to business theories. In my spare time, I have opportunities to explore Beijing with friends, having traditional foods, understanding the histories. It is a wonderful time to study in Beijing.</p> "
      },
      location: {
        name: "My undergraduate in Beijing",
        lat: 39.904200,
        lon: 116.407396,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://www.allisonpr.com/imgs/50/334e31a4ea321e9c583ec2aa9b35ca963acfac5e/1/img.jpg",
        credit: "About Beijing",
        caption: "Four-year study in Beijing."
      }
    }, {
      date: "2017",
      text: {
        headline: "NOW in HONG KONG",
        text: "<p>Now, I am a master degree student learning New Media in Chinese University of Hong Kong. It has been 2 months since I went to Hong Kong. Learning the fresh knowledge, getting into with the brandnew city, I spend my leisure time in hiking, visiting diverse exhibitions with friends. Hopefully, I could blend into this city and culture as soon as possible.</p> "
      },
      location:{
        name: "My Graduate time in Hong Kong",
        lat: 22.416263,
        lon: 114.210932,
        zoom: 16,
        line: true
      },
      media:{
        url: "http://www.chinadiscovery.com/assets/images/hongkong/1140/hongkong-city-1140-1.jpg",
        credit: "About Hong Kong",
        caption: "Studying in Hong Kong",
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}