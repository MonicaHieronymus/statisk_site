fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  //appende
  document.querySelector("main").appendChild(copy);
}

/*

  <article class="smallProduct onsale">
                    <a href="produkt.html"><img src="https://kea-alt-del.dk/t7/images/webp/1000/1536.webp"
                            alt="Black Net Jersey"></a>
                    <div class="onsalebox">
                        <p>-28%</p>
                    </div>
                    <h3>Black Net Jersey</h3>
                    <p class="subtle">Tshirts | Puma</p>
                    <p class="price">
                        <span>Prev.1299</span>
                        DKK
                    </p>

                    <div class="discounted">
                        <p>Now 935,28 DKK </p>
                        <p>-28%</p>
                    </div>
                    <div class="readmore">
                        <a href="produkt.html">Read More</a>
                    </div>
                </article>

{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/
