# حُرّة | Hurra Store

موقع تجارة إلكترونية كامل لأزياء الستر والأناقة، مبني بـ React + Vite.

**الشعار:** دليلكِ إلى الستر والأناقة.

## التقنيات المستخدمة

- React 19 + Vite
- React Router DOM (توجيه الصفحات)
- Bootstrap 5 (الشبكة والـ utilities)
- React Icons
- CSS3 (متغيرات تصميم مخصصة + رسوم متحركة)
- Context API (سلة التسوق + المفضلة، مع حفظ في localStorage)

## هيكل المشروع

```
src/
  assets/products/   ← ضعي هنا صور المنتجات الحقيقية عند توفرها
  components/        ← Navbar, Footer, ProductCard, CategoryCard, Hero...
  context/           ← CartContext, FavoritesContext
  data/              ← categories.js, products.js (بيانات المنتجات)
  hooks/             ← useCart, useFavorites, useScrollReveal
  layouts/           ← MainLayout (Navbar + Footer)
  pages/             ← Home, Hijabs, Niqabs, Bride, About, Contact...
  router/            ← AppRouter.jsx (تعريف كل المسارات)
  styles/            ← variables.css (نظام الألوان)، global.css
  utils/             ← images.js (مولّد الصور المؤقتة)
```

## التشغيل محلياً

```bash
npm install
npm run dev
```

ثم افتحي المتصفح على الرابط الذي يظهر (عادة `http://localhost:5173`).

### للبناء للإنتاج

```bash
npm run build
npm run preview
```

## ⚠️ ملاحظة مهمة عن الصور

جميع صور المنتجات حالياً هي **صور مؤقتة (placeholders)** من خدمة
`picsum.photos`، وليست صور منتجات حقيقية. كل منتج في
`src/data/products.js` يحمل حقل `searchHint` يقترح كلمات بحث مناسبة
لإيجاد صورة حقيقية ومجانية الحقوق من:

- https://unsplash.com
- https://pexels.com
- https://pixabay.com

لاستبدال صورة منتج:
1. حمّلي الصورة المناسبة وضعيها في `src/assets/products/`.
2. عدّلي حقل `image` الخاص بالمنتج في `src/data/products.js` ليشير
   للصورة الجديدة (`import` محلي أو رابط مباشر).

كذلك، لم يتم "تطريز" شعار حُرّة على صور نقاب حقيقية (هذا يتطلب تحرير
صور فعلي وليس توليد كود). بدلاً من ذلك تم إضافة شارة شعار أنيقة بـ CSS
تظهر على بطاقات منتجات النقاب، ويمكن إزالتها أو استبدالها بسهولة من
`ProductCard.jsx` (خاصية `hasBrandBadge`) عند توفر صور حقيقية مطرزة.

## الميزات

- تصميم متجاوب بالكامل (جوال / تابلت / لابتوب / شاشات كبيرة)
- قائمة تنقل ثابتة (Navbar) مع بحث، مفضلة، وسلة تسوق
- سلة تسوق ومفضلة تُحفظان في المتصفح (localStorage)
- تبويبات تصنيف للأخمرة والنقاب
- رسوم متحركة ناعمة عند التمرير (scroll reveal) وتأثيرات hover
- دعم كامل للغة العربية واتجاه RTL
