//https://kea-alt-del.dk/t7/api/products/1536
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchasebox h3").textContent =
    product.productdisplayname;
  document.querySelector(".sport").textContent =
    product.gender + " | " + product.articletype;
  document.querySelector(".price").textContent = product.price + " dkk";
  document.querySelector(".info h1").textContent = product.brandname;
  document.querySelector(".info p").textContent = product.brandbio;
  document.querySelector(".info .display").textContent =
    product.productdisplayname;
  document.querySelector(".info .color").textContent = product.basecolour;
  document.querySelector(".info .inventory").textContent = product.relid;

  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

/*{
  "id": 1536,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "basecolour": "Black",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Sports",
  "productdisplayname": "Black Net Jersey",
  "parsed": 1,
  "soldout": 1,
  "relid": 1536,
  "price": 1299,
  "discount": 28,
  "variantname": "Black Net",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Men",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p><p style=\"text-align: justify;\"><strong>Composition</strong><br />Black jersey made of 100% polyester, has short sleeves, piping from the chest to hem and embroidered branding on left chest<br /><br /><strong>Fit</strong><br />Regular<br /><br /><strong>Wash care</strong><br />Gentle machine wash in lukewarm water<br />Do not bleach<br />Tumble dry at low temperature<br />Cool iron<br />Do not dry clean<br /><br />puma, the classic Sports brand, celebrates minimalistic styles in its sport themed wear. This puma dry fit jersey is designed to wick away sweat and keep you looking your fashionable best. Pair it with an oversized jacket, a fitted pair of denims and sleek <a href='/sports-shoes?src=desc' class='seolink'>sports shoes</a>. <br /><br /><em>Model statistics</em><br />The model wears a size M with height 6' and shoulders 18\"</p>",
  "styledesc": null
}*/
