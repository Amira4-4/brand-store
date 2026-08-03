import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { items, removeFromCart, updateQty, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-5 text-center">
        <SectionTitle title="سلة التسوق" />
        <p className="mb-4">سلتكِ فارغة حالياً.</p>
        <Link to="/hijabs" className="btn-brand">ابدئي التسوق</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <SectionTitle title="سلة التسوق" />

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>المنتج</th>
              <th>اللون</th>
              <th>السعر</th>
              <th>الكمية</th>
              <th>الإجمالي</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.id}-${item.color}`}>
                <td className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 56, height: 70, objectFit: "cover", borderRadius: 8 }}
                  />
                  <span>{item.name}</span>
                </td>
                <td>{item.color}</td>
                <td>{item.price} ج.م</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(item.id, item.color, Number(e.target.value))
                    }
                    style={{ width: 64 }}
                    className="form-control"
                  />
                </td>
                <td>{item.qty * item.price} ج.م</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link text-danger"
                    onClick={() => removeFromCart(item.id, item.color)}
                    aria-label="إزالة"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-4">
        <button type="button" className="btn-outline-brand" onClick={clearCart}>
          إفراغ السلة
        </button>
        <div className="text-end">
          <h4 className="brand-font">الإجمالي: {totalPrice} ج.م</h4>
          <button type="button" className="btn-brand mt-2">إتمام الطلب</button>
        </div>
      </div>
    </div>
  );
}
