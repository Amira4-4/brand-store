import { placeholderImage } from "../utils/images";
import { hijabCategories, niqabCategories } from "./categories";

let idCounter = 1;
const nextId = () => idCounter++;

/**
 * Builds a list of hijab products for one sub-category.
 * `names` carries just the distinguishing part of each product name so the
 * catalog stays easy to scan and extend (add a name+price+colors and you
 * have a new product — no repeated boilerplate).
 */
function buildHijabs(category, items) {
  return items.map((item, i) => ({
    id: nextId(),
    section: "hijabs",
    subcategory: category.slug,
    subcategoryName: category.name,
    name: `${category.name} - ${item.name}`,
    price: item.price,
    fabric: item.fabric,
    pattern: item.pattern,
    colors: item.colors,
    image: item.image || placeholderImage(`${category.slug}-${i}`, 600, 750),
    searchHint: `${category.searchHint} hijab scarf`,
  }));
}

function buildNiqabs(category, items) {
  return items.map((item, i) => ({
    id: nextId(),
    section: "niqabs",
    subcategory: category.slug,
    subcategoryName: category.name,
    name: `${category.name} - ${item.name}`,
    price: item.price,
    fabric: item.fabric,
    description: item.description,
    colors: item.colors,
    image: item.image || placeholderImage(`niqab-${category.slug}-${i}`, 600, 750),
    searchHint: `${category.searchHint} niqab modest fashion`,
    hasBrandBadge: true, // shows the embroidered-logo style badge overlay
  }));
}

/* =========================================================
   الأخمرة — Hijabs
   ========================================================= */
export const hijabProducts = [
  ...buildHijabs(hijabCategories[0], [
    {
      name: "ليالي الأقحوان",
      price: 320,
      fabric: "شيفون كوري فاخر",
      pattern: "أزهار كريمية وردية على أرضية سوداء",
      colors: ["أسود", "كريمي", "وردي", "أخضر زيتوني"],
      image: "/images/products/chiffon-floral-black-cream.jpg",
    },
    {
      name: "نسمة التوت",
      price: 330,
      fabric: "شيفون كوري",
      pattern: "أزهار بيضاء صغيرة متناثرة على أرضية توتية",
      colors: ["توتي غامق", "أبيض", "ليلكي فاتح"],
      image: "/images/products/chiffon-floral-mauve.jpg",
    },
    {
      name: "حديقة الورد الأبيض",
      price: 340,
      fabric: "شيفون إيطالي",
      pattern: "ورود وردية بلمسة مائية على أرضية بيضاء",
      colors: ["أبيض", "وردي", "رمادي فاتح"],
      image: "/images/products/chiffon-floral-white-rose.webp",
    },
    {
      name: "سحر الليل الوردي",
      price: 350,
      fabric: "شيفون فاخر",
      pattern: "ورود وردية وحمراء وكريمية على أرضية سوداء",
      colors: ["أسود", "وردي", "أحمر", "كريمي", "بني"],
      image: "/images/products/chiffon-floral-black-rose.jpg",
    },
    {
      name: "باقة الألوان",
      price: 310,
      fabric: "شيفون منقّط بطبعة أزهار صغيرة",
      pattern: "زهور صغيرة متناثرة بنقاط دقيقة",
      colors: ["أحمر", "أبيض", "أسود", "كورال", "أزرق"],
      image: "/images/products/chiffon-floral-multicolor.jpg",
    },
    {
      name: "أقحوان السماء",
      price: 300,
      fabric: "شيفون خفيف",
      pattern: "زهور أقحوان بيضاء صغيرة على أرضية زرقاء",
      colors: ["أزرق سماوي", "أبيض", "بني"],
      image: "/images/products/chiffon-floral-blue-daisy.jpg",
    },
    {
      name: "تشكيلة الياسمين",
      price: 335,
      fabric: "شيفون فاخر متعدد الطبعات",
      pattern: "أزهار وباقات متنوعة بألوان هادئة",
      colors: ["كحلي", "أسود", "أخضر فاتح", "وردي", "أخضر زيتوني"],
      image: "/images/products/chiffon-floral-bouquet-set.jpg",
    },
    {
      name: "رقّة العاج",
      price: 325,
      fabric: "شيفون ناعم",
      pattern: "باقات وردية صغيرة على أرضية عاجية",
      colors: ["عاجي", "وردي فاتح", "أخضر"],
      image: "/images/products/chiffon-floral-ivory-pink.jpg",
    },
  ]),
  ...buildHijabs(hijabCategories[1], [
    {
      name: "تراكوتا دافئ",
      price: 260,
      fabric: "شيفون كوري",
      pattern: "سادة بدون طبعة",
      colors: ["بني محمر (تراكوتا)"],
      image: "/images/products/plain-terracotta.jpg",
    },
    {
      name: "تشكيلة الألوان الكاملة",
      price: 250,
      fabric: "شيفون سادة فاخر",
      pattern: "سادة - تشكيلة ألوان واسعة",
      colors: ["أزرق سماوي", "أخضر داكن", "أخضر زيتوني", "وردي فاتح", "ليلكي", "عنابي", "خوخي", "بيج", "بني غامق", "عاجي"],
      image: "/images/products/plain-color-rack.webp",
    },
    {
      name: "قوس قزح الهادئ",
      price: 245,
      fabric: "شيفون خفيف",
      pattern: "سادة - ألوان متعددة هادئة",
      colors: ["كريمي", "أصفر فاتح", "برتقالي", "خوخي مرجاني", "أبيض", "أزرق رمادي", "بيج غامق", "تان"],
      image: "/images/products/plain-color-row.png",
    },
  ]),
  ...buildHijabs(hijabCategories[2], [
    {
      name: "الأزهار الرمادية المطرزة",
      price: 380,
      fabric: "ديجيتال برنت مطرز بالخرز",
      pattern: "أزهار صغيرة رمادية مع تطريز جانبي بالورد والترتر",
      colors: ["رمادي فاتح", "وردي", "أزرق فاتح", "ذهبي"],
      image: "/images/products/digital-grey-embroidered.jpg",
    },
    {
      name: "حديقة الزيتون",
      price: 360,
      fabric: "ديجيتال برنت فوتوغرافي",
      pattern: "طبعة زهور بأسلوب فوتوغرافي بدرجات زيتونية",
      colors: ["زيتوني", "بيج", "بني فاتح"],
      image: "/images/products/digital-olive-floral.jpg",
    },
    {
      name: "أمواج السماء",
      price: 350,
      fabric: "ديجيتال برنت مائي",
      pattern: "طبعة مائية بتدرجات موجية زرقاء",
      colors: ["أزرق فاتح", "أبيض", "أزرق سماوي"],
      image: "/images/products/digital-blue-watercolor.jpg",
    },
  ]),
  ...buildHijabs(hijabCategories[3], [
    { name: "كريب فاخر", price: 300, fabric: "كريب تركي", pattern: "سادة بملمس مطفي", colors: ["بيج", "بني", "أبيض"] },
    { name: "كريب أنيق", price: 310, fabric: "كريب كوري", pattern: "سادة ثقيل السقطة", colors: ["كريمي", "بني غامق"] },
    { name: "كريب ليونة", price: 295, fabric: "كريب ناعم", pattern: "سادة", colors: ["عاجي", "بيج فاتح"] },
    { name: "كريب مسائي", price: 330, fabric: "كريب حريري", pattern: "سادة بلمعة راقية", colors: ["بني ذهبي", "بيج غامق"] },
  ]),
];

/* =========================================================
   النقاب — Niqabs
   ========================================================= */
export const niqabProducts = [
  ...buildNiqabs(niqabCategories[0], [
    {
      name: "الكامل الكحلي",
      price: 190,
      fabric: "شيفون مزدوج بقفازات مطابقة",
      description: "جلباب نقاب كامل بطبقات متعددة وسقطة أنيقة، بلون كحلي هادئ يناسب الاستخدام اليومي والخروج.",
      colors: ["كحلي"],
      image: "/images/products/niqab-full-navy.jpg",
    },
    {
      name: "الكامل الأسود بالفيونكة",
      price: 195,
      fabric: "شيفون فاخر",
      description: "تصميم كامل التغطية بلمسة أنيقة من الفيونكات الجانبية عند الأكمام، مع قفازات بيضاء مطابقة.",
      colors: ["أسود"],
      image: "/images/products/niqab-full-black-bows.jpg",
    },
    {
      name: "الكامل البنفسجي الفاتح",
      price: 175,
      fabric: "شيفون خفيف",
      description: "نقاب بسيط بسقطة طبيعية ناعمة، بدرجة بنفسجي فاتح هادئة مناسبة لتغيير الروتين اليومي.",
      colors: ["بنفسجي فاتح (لافندر)"],
      image: "/images/products/niqab-full-lilac.jpg",
    },
    {
      name: "الكامل العنابي الأنيق",
      price: 200,
      fabric: "كريب فاخر",
      description: "جلباب نقاب بدرجة عنابي غامق راقية، مزين بحلقة معدنية بسيطة عند خط الأنف.",
      colors: ["عنابي غامق"],
      image: "/images/products/niqab-full-maroon.jpg",
    },
    {
      name: "الكامل الترابي الدافئ",
      price: 185,
      fabric: "شيفون فاخر",
      description: "لون برتقالي محروق دافئ (ترابي)، جلباب نقاب فضفاض بسقطة مريحة للجلوس والحركة.",
      colors: ["برتقالي محروق (ترابي)"],
      image: "/images/products/niqab-full-burntorange.jpg",
    },
  ]),
  ...buildNiqabs(niqabCategories[1], [
    {
      name: "تندة الشوكولاتة",
      price: 170,
      fabric: "قماش التندا الأصلي",
      description: "نقاب بغطاء رأس مقوّى (كابوريا) يحافظ على شكله المرتب طوال اليوم، بلون بني شوكولاتة دافئ.",
      colors: ["بني غامق (شوكولاتة)"],
      image: "/images/products/niqab-tanda-brown.jpg",
    },
  ]),
  ...buildNiqabs(niqabCategories[2], [
    {
      name: "الأفغاني الأسود المسائي",
      price: 210,
      fabric: "شيفون مزدوج بطبقة سفلية شفافة",
      description: "تصميم أفغاني تقليدي بطبقات متدرجة وسقطة انسيابية، مناسب للإطلالات المسائية.",
      colors: ["أسود"],
      image: "/images/products/niqab-afghani-black-sheer.jpg",
    },
    {
      name: "الأفغاني الأسود الواسع",
      price: 220,
      fabric: "قماش أفغاني ثقيل",
      description: "تغطية موسعة بعرض كبير يمنح راحة تامة أثناء الحركة، الطراز الأفغاني الأصيل بامتداد واسع.",
      colors: ["أسود"],
      image: "/images/products/niqab-afghani-black-wide.jpg",
    },
  ]),
  ...buildNiqabs(niqabCategories[3], [
    {
      name: "المقوى الأسود العملي",
      price: 175,
      fabric: "طبقة مقواة داخلية",
      description: "غطاء رأس مقوّى يثبّت الشكل من أول ارتدائه دون الحاجة لتعديل متكرر خلال اليوم.",
      colors: ["أسود"],
      image: "/images/products/niqab-muqawa-black-tying.jpg",
    },
    {
      name: "المقوى الأسود المُهندم",
      price: 180,
      fabric: "طبقة مقواة مع طيّة دائرية أمامية",
      description: "تصميم مقوى بطيّة دائرية أنيقة أسفل الذقن تحافظ على استواء الشكل طوال اليوم.",
      colors: ["أسود"],
      image: "/images/products/niqab-muqawa-black-round.jpg",
    },
  ]),
  ...buildNiqabs(niqabCategories[4], [
    {
      name: "المطاطي الأسود المريح",
      price: 150,
      fabric: "قماش ناعم بحزام مطاطي خلف الرأس وحاشية مكشكشة",
      description: "حزام مطاطي مريح خلف الرأس مع حاشية سفلية مكشكشة، مثالي للاستخدام اليومي الطويل.",
      colors: ["أسود"],
      image: "/images/products/niqab-mataati-black.webp",
    },
  ]),
];

/* =========================================================
   سترة العروسة — Bride Collection
   ========================================================= */
export const brideProducts = [
  {
    id: nextId(),
    section: "bride",
    subcategory: "white-khimar",
    subcategoryName: "خمار أبيض",
    name: "خمار العروسة المطرز باللؤلؤ",
    price: 420,
    fabric: "كريب حريري أبيض بتطريز لؤلؤي على الإكليل",
    description: "خمار طويل بسقطة ناعمة وإكليل لؤلؤي أنيق حول الوجه، يناسب ليلة العمر.",
    colors: ["أبيض"],
    image: "/images/products/bride-khimar-pearl-back.webp",
    searchHint: "white bridal hijab elegant modest bride",
  },
  {
    id: nextId(),
    section: "bride",
    subcategory: "white-niqab",
    subcategoryName: "نقاب أبيض",
    name: "نقاب العروسة بإكليل اللؤلؤ الفاخر",
    price: 250,
    fabric: "شيفون أبيض فاخر بإكليل لؤلؤي",
    description: "نقاب أبيض بإكليل لؤلؤي مطرز حول الجبهة، يظهر مع فستان الزفاف الكامل وباقة الورد البيضاء.",
    colors: ["أبيض"],
    image: "/images/products/bride-niqab-pearl-veil.webp",
  },
  {
    id: nextId(),
    section: "bride",
    subcategory: "white-niqab",
    subcategoryName: "نقاب أبيض",
    name: "نقاب العروسة اللؤلؤي",
    price: 240,
    fabric: "شيفون أبيض بإكليل لؤلؤي",
    description: "نقاب أنيق بإكليل لؤلؤي حول الجبهة، مصمم ليتناسق مع فستان الزفاف وباقة الورد.",
    colors: ["أبيض"],
    image: "/images/products/bride-niqab-pearl-bouquet.jpg",
  },
  {
    id: nextId(),
    section: "bride",
    subcategory: "white-niqab",
    subcategoryName: "نقاب أبيض",
    name: "النقاب الأبيض الكلاسيكي",
    price: 220,
    fabric: "شيفون أبيض خفيف",
    description: "جلباب نقاب أبيض كلاسيكي بسقطة طبيعية وأكمام مكشكشة، مثالي لمن تفضل البساطة في إطلالة العروس.",
    colors: ["أبيض"],
    image: "/images/products/bride-niqab-classic-white.jpg",
  },
  {
    id: nextId(),
    section: "bride",
    subcategory: "syrian-bonnet",
    subcategoryName: "بونية شامية",
    name: "بونية شامية مطرزة",
    price: 150,
    fabric: "قطن ناعم مطرز",
    description: "طراز شامي تقليدي بتطريز يدوي دقيق حول الوجه.",
    colors: ["أبيض", "كريمي"],
    image: placeholderImage("bride-syrian-bonnet", 600, 750),
    searchHint: "embroidered bonnet cap modest bridal",
  },
  {
    id: nextId(),
    section: "bride",
    subcategory: "turkish-bonnet",
    subcategoryName: "بونية تركية",
    name: "بونية تركية أنيقة",
    price: 160,
    fabric: "ساتان ناعم",
    description: "تصميم تركي عصري يمنح إطلالة مرتبة تحت الخمار أو النقاب.",
    colors: ["أبيض", "بيج فاتح"],
    image: placeholderImage("bride-turkish-bonnet", 600, 750),
    searchHint: "satin bonnet cap elegant bridal",
  },
  {
    id: nextId(),
    section: "bride",
    subcategory: "bridal-khimar",
    subcategoryName: "خمار العروسة المطرز",
    name: "خمار مطرز بخيوط ذهبية",
    price: 480,
    fabric: "كريب فاخر مطرز",
    description: "تطريز يدوي بخيوط ذهبية على الأطراف لإطلالة عروس فخمة وهادئة.",
    colors: ["عاجي", "أبيض دافئ"],
    image: placeholderImage("bride-embroidered-khimar", 600, 750),
    searchHint: "gold embroidered bridal hijab luxury",
  },
  {
    id: nextId(),
    section: "bride",
    subcategory: "bridal-niqab",
    subcategoryName: "نقاب العروسة المطرز",
    name: "نقاب العروسة بإكليل اللؤلؤ الكامل",
    price: 260,
    fabric: "شيفون فاخر بإكليل لؤلؤي",
    description: "إكليل لؤلؤي متكامل حول الجبهة مع تفاصيل ناعمة تضيف لمسة احتفالية دون الإخلال بالبساطة.",
    colors: ["أبيض"],
    image: "/images/products/bride-niqab-pearl-crown.jpg",
  },
];

export const allProducts = [...hijabProducts, ...niqabProducts, ...brideProducts];

export function getProductById(id) {
  return allProducts.find((p) => String(p.id) === String(id));
}
