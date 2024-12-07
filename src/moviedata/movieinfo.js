import { nanoid } from "@reduxjs/toolkit";

const moviesData = {
    movies: {
      "1": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6565/1732508956565-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4683/1732508914683-v",
        About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "young space colonizers come face-to-face with the ultimate horror.",
        title: "Skeleton crew",
        titleimg: "https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/3788/1732508933788-t",
        type: "recommend"
      },
      "2": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7497/1731416817497-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4725/1731416764725-v",
        About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: true,
          Drama: false,
          Horror: false,
          Mystery: false,
          Romance: false,
          Science_Fiction: false,
          Thriller: false,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "In a hilarious and chaotic twist of fate, Deadpool (Ryan Reynolds) finds himself entangled in the fabric of the multiverse. ",
        title: "DeadPool & Wolverine",
        titleimg: "https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/1375/1731416791375-t",
        type: "recommend"
      },
      "3": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1822/1731317621822-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1199/1731317591199-v",
        About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "Young space colonizers come  face-to-face with the ultiimate horror.",
        title: "Aline Romulus",
        titleimg:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/4650/1731317604650-t",
        type: "recommend"
      },
      "4": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9576/1732289849576-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5391/1732289795391-v",
          About:{
          year: "2024",
          seasson:"1",
          lag: "3 Languages",
          certif: "UA/16",
          runTime: "58min",
        },
        genre:{
          Action: false,
          Adventure: false,
          Comedy: false,
          Drama: true,
          Horror: false,
          Mystery: false,
          Romance: true,
          Science_Fiction: false,
          Thriller: false,
          War: false,
        },
        Language:{
          Hindi: true,
          English: false,
          Telugu: true,
          Tamil:true
        },
        description: "Tow families clash over societal and caste differences , spering  a sage of reverge .All",
        title: "Thukra ke mera pyaar",
        titleimg:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/1710/1732214011710-t",
        type: "recommend"
      },
      "5": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9188/1731497329188-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7571/1731497207571-v",
        About:{
          year: "2024",
          seasson:"5",
          lag: "7 Languages",
          certif: "UA/13+",
          runTime: "30min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: false,
          Thriller: false,
          War: false,
          Mthology:true,
          Animation:true,
          
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true,
          Malayalam:true,
          Gujarati:true,
          Marathi:true,

        },
        description: "Hanuman descends into  patal  loka a save the divine princes. As he navigates this mysterious world , Ahiranvan  unleashes his castaclymic plan. ",
        title: "The legend of hanuman",
        titleimg:"https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/3091/1731497343091-t",
        type: "recommend"
      },
      "6": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6106/1730982356106-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8845/1731068038845-v",
          About:{
          year: "2024",
          lag: "5 Languages",
          certif: "UA/13+",
          runTime: "2h 27m",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: false,
          Mystery: true,
          Romance: false,
          Science_Fiction: false,
          Thriller: false,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true,
          Malayalam:true,
        },
        description: "Drawn into the legacy of the 'Chiyothivilakku ' , Ajayan confronts the tangled choices of his ancestors , each revealing shadows that stretch across time. " ,
        title: "ARM",
        titleimg:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/2404/1730982342404-t",
        type: "recommend"
      },
      "7": {
        id:nanoid(),

        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8500/1729950438500-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7960/1729950367960-v",
          About:{
          year: "2024",
          lag: "1 Languages",
          certif: "U/A7+",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: false,
          Comedy: false,
          Drama: false,
          Horror: false,
          Mystery: false,
          Romance: false,
          Science_Fiction: false,
          Thriller: false,
          War: true,
          Reality:true,

        },
        Language:{
          Hindi: true,
          English: false,
          Telugu: false,
          Tamil:true
        },
        description: "Join the speactacular audio launch of Amaran  a thrilling  biographiacal action war film dfeaturing Shivakarthikayan and sai Pallavi.",
        title: "AMARAN",
        titleimg:"https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/1659/1729950401659-t",
        type: "recommend"
      },
      "8": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1113/1731323401113-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9076/1731484439076-v",
          About:{
          year: "2024",
          lag: "1 Languages",
          certif: "U/A 7+",
          runTime: "2h 38min",
        },
        genre:{
          Action: false,
          Adventure: false,
          Comedy: false,
          Drama: true,
          Horror: false,
          Mystery: false,
          Romance: false,
          Science_Fiction: false,
          Thriller: false,
          War: false,
        },
        Language:{
          Hindi: true,
          English: false,
          Telugu: false,
          Tamil:false
        },
        description: "Resilient and headStrong Vir dreams of lauching an airline  service for thecommon man . With is mission aligned , can he soarto new heights ?",
        title: "Sarfira",
        titleimg:"https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/1638/1731323411638-t",
        type: "recommend"
      },
      "9": {
        id:nanoid(),
        backgroundImg: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8909/1721799688909-i",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7587/1713534377587-v",
        About:{
          year: "2024",
          lag: "3 Languages",
          certif: "U",
          runTime: "2h 33min",
        },
        genre:{
          Action: false,
          Adventure: false,
          Comedy: false,
          Drama: true,
          Horror: false,
          Mystery: false,
          Romance: true,
          Science_Fiction: false,
          Thriller: false,
          War: false,
        },
        Language:{
          Hindi: true,
          English: false,
          Telugu: true,
          Tamil:true
        },
        description: "one a letter-delivering task , afreen learns of 20-year-old romance set amidst a war . Her request to trace the loves  makes her embrace humanity beyond borders.  ",
        titleimg:"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/7298/1721799697298-t",
        title: "Sita Ram",
        type: "recommend"
      },
      "10": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9003/1639003-v-31cc8eeb198f",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "11": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6092/1710929776092-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "12": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1064/1710950101064-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "13": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3649/1711465823649-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "14": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1327/441327-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "15": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3879/1710936653879-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "16": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3261/1710950343261-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "17": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7416/957416-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "Tsunami",
        type: "Entertainment"
      },
      "18": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4606/1724530174606-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "Comdey"
      },
      "19": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9166/1710929909166-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "Comdey"
      },
      "20": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5953/525953-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "Comdey"
      },
      "21": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8105/1118105-v-cf275eb3c3f2",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "comdey"
      },

      "22": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7309/177309-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "comdey"
      },
      "23": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7803/1712209007803-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "comdey"
      },

      "24": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/7132/1000007132/1000007132-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "comdey"
      },
      "25": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/9466/1000019466/1000019466-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "comdey"
      },
      "26": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7166/1477166-v-a1c62df76321",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "comdey"
      },
      "27": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5151/875151-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "28": {
        id:nanoid(),

        backgroundImg: "",
        cardImg:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5241/875241-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "29": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5557/675557-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "30": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5402/675402-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "31": {
        id:nanoid(),

        backgroundImg: "",
        cardImg:    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5908/1075908-v-74780cbd6355",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "32": {
        id:nanoid(),

        backgroundImg: "",
        cardImg:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5454/675454-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "33": {
        id:nanoid(),

        backgroundImg: "",
        cardImg:  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1220/871220-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },

      "34": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5450/675450-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "35": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5541/675541-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "36": {
        id:nanoid(),

        backgroundImg: "",
        cardImg:  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5231/875231-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "37": {
        id:nanoid(),

        backgroundImg: "",
        cardImg:  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5517/675517-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "38": {
        id:nanoid(),
        backgroundImg: "",
        cardImg:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4364/674364-v",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: "DisneyMovies"
      },
      "39": {
        id:nanoid(),

        backgroundImg: "",
        cardImg: "",
          About:{
          year: "2024",
          lag: "4 Languages",
          certif: "A",
          runTime: "1h 58min",
        },
        genre:{
          Action: true,
          Adventure: true,
          Comedy: false,
          Drama: false,
          Horror: true,
          Mystery: false,
          Romance: false,
          Science_Fiction: true,
          Thriller: true,
          War: false,
        },
        Language:{
          Hindi: true,
          English: true,
          Telugu: true,
          Tamil:true
        },
        description: "",
        subTitle: "",
        title: "",
        type: ""
      },
     
  }
};
  
  export default moviesData;
  