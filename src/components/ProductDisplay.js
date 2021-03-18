app.component('product-display', {
  template:
  /*html*/
  `<button v-on:click="insertName">{{ name }}</button >`,
  data() {
    return {
      name: "aaa"
    }
  },
  methods: {
    insertName() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&shopCode=beams&applicationId=rba_20140612", true);
      xhr.responseType = "json";

      xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
          console.log(this.response.Items[0].Item.itemName);
        }
      }
      xhr.send();
    }
  }
})