const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);
}

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
  copy.querySelector("p.subtle").textContent = product.brandname;
  copy.querySelector("p.gender").textContent = product.gender;
  copy.querySelector("p.price").textContent = product.price + ",-" + " DKK";

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //if betingelse til procenter
  if (product.discount) {
    copy.querySelector("article").classList.add("sale");
    copy.querySelector(".onsalebox").textContent = "-" + product.discount + "%";
  }

  //produktet er udsolgt
  if (product.soldout > 0) {
    copy.querySelector("article").classList.add("soldout");
  }

  copy
    .querySelector(".readMore")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector(".grid").appendChild(copy);
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
