app.component('product-display', {
  template:
  /*html*/
  `<div>{{ name }}</div>`,
  data() {
    let productName;
    const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&shopCode=beams&applicationId=rba_20140612";

    fetch(url).then(response => response.json())
    .then(json => {
      productName = json.Items[0].Item.itemName;
      console.log(productName);
    });

    return {
      name: productName
    }
  },
  methods: {
  }
})