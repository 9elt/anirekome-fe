/** fake api test */
function fakeAPI(data: any, time: number = 350) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(data) }, time);
  });
}

export default async function getRecommendationsApi(values: {
  alpha_key: string,
  user: string,
  plan_to_watch: 0 | 1,
  reload?: 0 | 1,
} | any) {

  // let data = new FormData;
  // for (let name in values) { data.append(name, values[name]) }

  // const req = await fetch('http://localhost:8081/api/get_recommendations', {
  //   method: 'POST',
  //   body: data,
  // });

  // const res = req.json();

  const res = await fakeAPI({
    name: '_nelt',
    statistics: {
      list: 395,
    },
    recommendations: {
      users: [
        {
          name: 'Askdj1293asjd192sd',
          offuscated: true,
          affinity: {
            val: 85.4,
            s: 4.4,
            d: 3.1,
          },
          shared: {
            val: 98,
            list: 339,
            to: 539,
          }
        },
        {
          name: '_nelt',
          offuscated: false,
          affinity: {
            val: 73.4,
            s: 4.4,
            d: 3.1,
          },
          shared: {
            val: 98,
            list: 339,
            to: 539,
          }
        },
      ],
      anime: [
        {
          id: 28297,
          title: 'Ore Monogatari!!',
          picture: 'https://api-cdn.myanimelist.net/images/anime/13/69455l.jpg',
          genres: ['COMEDY', 'ROMANCE', 'SHOUJO'],
          score: { val: 8.4, s: 0.54, d: 0.32 },
          user: 0,
        },
        {
          id: 43969,
          title: 'Kanojo mo Kanojo',
          picture: 'https://api-cdn.myanimelist.net/images/anime/1713/117119l.jpg',
          genres: ['COMEDY', 'HAREM', 'ROMANCE', 'SCHOOL', 'SHOUNEN',],
          score: { val: 5.3, s: 0.54, d: 0.32 },
          user: 1,
        },
        {
          id: 43969,
          title: 'Midara na Ao-chan wa Benkyou ga Dekinai',
          picture: 'https://api-cdn.myanimelist.net/images/anime/1718/98214l.jpg',
          genres: ['COMEDY', 'ECCHI', 'ROMANCE', 'SHOUNEN',],
          score: { val: 7.8, s: 0.54, d: 0.32 },
          user: 0,
        },
      ]
    }
  }, 7900);

  return res;
}