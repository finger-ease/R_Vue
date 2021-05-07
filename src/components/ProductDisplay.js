app.component('product-display', {
  template:
  /*html*/
  `<div>{{ name }}</div>`,
  data() {
    const getName = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data.Items[0].Item.itemName;
    }

    const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&shopCode=beams&applicationId=rba_20140612";
    getName(url)
    .then(data => {
      console.log(data);
    });

    return {
    }
  },
  methods: {
  },
  computed: {
    // name: () => {
    //   const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&shopCode=beams&applicationId=rba_20140612";
    //   const arr = [];
    //   return fetch(url).then(response => response.json())
    //   .then(json => {
    //     json.Items.forEach(item => {
    //       arr.push(item.Item.itemName);
    //     });
    //     return arr;
    //   });
    // }
  }
})