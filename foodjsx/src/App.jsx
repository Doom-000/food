import { useState } from "react";

// ============================
// DATA เริ่มต้น (Initial Data)
// ============================
const INITIAL_MENU = [
  { id: 1, name: "ข้าวผัดกะเพรา", price: 60, category: "ข้าว", emoji: "🍳" },
  { id: 2, name: "ผัดไทยกุ้งสด", price: 80, category: "เส้น", emoji: "🍜" },
  { id: 3, name: "ต้มยำกุ้ง", price: 120, category: "ซุป", emoji: "🍲" },
  { id: 4, name: "ส้มตำไทย", price: 50, category: "ยำ", emoji: "🥗" },
  { id: 5, name: "ข้าวมันไก่", price: 55, category: "ข้าว", emoji: "🍗" },
  { id: 6, name: "แกงเขียวหวาน", price: 90, category: "แกง", emoji: "🥘" },
];

// ============================
// STYLES (CSS-in-JS)
// ============================
const styles = {
  root: {
    fontFamily: "'Sarabun', 'Noto Sans Thai', sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    color: "#f0f0f0",
    padding: "0 0 60px",
  },
  header: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#f0a500",
    letterSpacing: "0.5px",
  },
  badge: {
    background: "#f0a500",
    color: "#1a1a2e",
    borderRadius: "50px",
    padding: "4px 14px",
    fontWeight: 700,
    fontSize: "14px",
  },
  main: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "24px 16px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#f0a500",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  tabs: {
    display: "flex",
    gap: "8px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  tab: {
    padding: "8px 18px",
    borderRadius: "50px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "#ccc",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s",
  },
  tabActive: {
    background: "#f0a500",
    color: "#1a1a2e",
    border: "1px solid #f0a500",
    fontWeight: 700,
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
  },
  menuCard: {
    background: "rgba(255,255,255,0.07)",
    borderRadius: "16px",
    padding: "18px",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  menuCardHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 30px rgba(240,165,0,0.15)",
    border: "1px solid rgba(240,165,0,0.4)",
  },
  menuEmoji: {
    fontSize: "36px",
    marginBottom: "10px",
    display: "block",
  },
  menuName: {
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "4px",
  },
  menuCategory: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "10px",
  },
  menuPrice: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#f0a500",
  },
  addBtn: {
    marginTop: "12px",
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    background: "#f0a500",
    color: "#1a1a2e",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  },
  cartSection: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    padding: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },
  cartEmoji: { fontSize: "28px" },
  cartName: { flex: 1, fontSize: "15px", fontWeight: 500 },
  cartControls: { display: "flex", alignItems: "center", gap: "8px" },
  qtyBtn: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: { fontSize: "16px", fontWeight: 700, minWidth: "24px", textAlign: "center" },
  removeBtn: {
    background: "rgba(255,80,80,0.15)",
    border: "none",
    color: "#ff6b6b",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "4px 10px",
    fontSize: "12px",
  },
  cartTotal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "1px solid rgba(255,255,255,0.15)",
  },
  totalLabel: { fontSize: "16px", color: "#ccc" },
  totalPrice: { fontSize: "24px", fontWeight: 700, color: "#f0a500" },
  orderBtn: {
    marginTop: "16px",
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #f0a500, #ff6b00)",
    border: "none",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },
  emptyCart: {
    textAlign: "center",
    padding: "32px",
    color: "#555",
  },
  // Modal
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  },
  modal: {
    background: "#1e2a45",
    borderRadius: "20px",
    padding: "28px",
    width: "100%",
    maxWidth: "420px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  modalTitle: { fontSize: "18px", fontWeight: 700, marginBottom: "20px", color: "#f0a500" },
  formGroup: { marginBottom: "14px" },
  label: { fontSize: "13px", color: "#aaa", marginBottom: "6px", display: "block" },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none",
  },
  select: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    background: "#1e2a45",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: "15px",
    boxSizing: "border-box",
  },
  modalActions: { display: "flex", gap: "10px", marginTop: "20px" },
  cancelBtn: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#ccc",
    cursor: "pointer",
    fontSize: "15px",
  },
  saveBtn: {
    flex: 2,
    padding: "10px",
    borderRadius: "10px",
    background: "#f0a500",
    border: "none",
    color: "#1a1a2e",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "15px",
  },
  adminControls: {
    display: "flex",
    gap: "6px",
    marginTop: "10px",
  },
  editBtn: {
    flex: 1,
    padding: "7px",
    borderRadius: "8px",
    background: "rgba(100,180,255,0.15)",
    border: "1px solid rgba(100,180,255,0.3)",
    color: "#6ab4ff",
    cursor: "pointer",
    fontSize: "13px",
  },
  deleteBtn: {
    flex: 1,
    padding: "7px",
    borderRadius: "8px",
    background: "rgba(255,80,80,0.12)",
    border: "1px solid rgba(255,80,80,0.3)",
    color: "#ff6b6b",
    cursor: "pointer",
    fontSize: "13px",
  },
  toast: {
    position: "fixed",
    bottom: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#f0a500",
    color: "#1a1a2e",
    padding: "12px 24px",
    borderRadius: "50px",
    fontWeight: 700,
    fontSize: "15px",
    zIndex: 300,
    boxShadow: "0 4px 20px rgba(240,165,0,0.4)",
    animation: "fadeIn 0.3s ease",
  },
  adminToggle: {
    padding: "6px 14px",
    borderRadius: "50px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#ccc",
    cursor: "pointer",
    fontSize: "13px",
  },
};

const CATEGORIES = ["ทั้งหมด", "ข้าว", "เส้น", "ซุป", "ยำ", "แกง"];
const EMOJIS = ["🍳","🍜","🍲","🥗","🍗","🥘","🍱","🍛","🥩","🥦","🍤","🦐"];

export default function App() {
  // ===== STATE =====
  const [menu, setMenu] = useState(INITIAL_MENU);
  const [cart, setCart] = useState([]);          // { ...menuItem, qty }
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [toast, setToast] = useState(null);

  // Modal state
  const [modal, setModal] = useState(null); // null | "add" | "edit"
  const [editTarget, setEditTarget] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", category: "ข้าว", emoji: "🍳" });

  // ===== TOAST HELPER =====
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  // ===== MENU CRUD =====
  // CREATE
  const handleAddMenu = () => {
    if (!form.name.trim() || !form.price) return;
    const newItem = {
      id: Date.now(),
      name: form.name.trim(),
      price: Number(form.price),
      category: form.category,
      emoji: form.emoji,
    };
    setMenu((prev) => [...prev, newItem]);
    showToast(`✅ เพิ่ม "${newItem.name}" แล้ว`);
    closeModal();
  };

  // UPDATE
  const handleEditMenu = () => {
    if (!form.name.trim() || !form.price) return;
    setMenu((prev) =>
      prev.map((item) =>
        item.id === editTarget.id
          ? { ...item, name: form.name.trim(), price: Number(form.price), category: form.category, emoji: form.emoji }
          : item
      )
    );
    // sync cart
    setCart((prev) =>
      prev.map((item) =>
        item.id === editTarget.id
          ? { ...item, name: form.name.trim(), price: Number(form.price), emoji: form.emoji }
          : item
      )
    );
    showToast(`✏️ แก้ไข "${form.name}" แล้ว`);
    closeModal();
  };

  // DELETE
  const handleDeleteMenu = (id) => {
    const item = menu.find((m) => m.id === id);
    setMenu((prev) => prev.filter((m) => m.id !== id));
    setCart((prev) => prev.filter((c) => c.id !== id));
    showToast(`🗑️ ลบ "${item?.name}" แล้ว`);
  };

  // ===== MODAL HELPERS =====
  const openAddModal = () => {
    setForm({ name: "", price: "", category: "ข้าว", emoji: "🍳" });
    setEditTarget(null);
    setModal("add");
  };

  const openEditModal = (item) => {
    setForm({ name: item.name, price: String(item.price), category: item.category, emoji: item.emoji });
    setEditTarget(item);
    setModal("edit");
  };

  const closeModal = () => {
    setModal(null);
    setEditTarget(null);
  };

  // ===== CART CRUD =====
  // ADD to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === item.id);
      if (exists) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    showToast(`🛒 เพิ่ม "${item.name}" ลงตะกร้า`);
  };

  // UPDATE qty
  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((c) => c.id === id ? { ...c, qty: c.qty + delta } : c)
        .filter((c) => c.qty > 0)
    );
  };

  // REMOVE from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  // CLEAR cart (order)
  const placeOrder = () => {
    if (cart.length === 0) return;
    showToast("🎉 สั่งอาหารสำเร็จ! กำลังเตรียมอาหาร...");
    setCart([]);
  };

  // ===== DERIVED =====
  const filteredMenu = activeCategory === "ทั้งหมด"
    ? menu
    : menu.filter((m) => m.category === activeCategory);

  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.qty * c.price, 0);

  // ===== RENDER =====
  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeIn { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }
        button:hover { opacity: 0.88; }
      `}</style>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logo}>🍽️ สั่งอาหารออนไลน์</div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button style={styles.adminToggle} onClick={() => setIsAdminMode((v) => !v)}>
            {isAdminMode ? "👤 ลูกค้า" : "⚙️ แอดมิน"}
          </button>
          <span style={styles.badge}>🛒 {totalItems}</span>
        </div>
      </header>

      <main style={styles.main}>
        {/* CATEGORY TABS */}
        <div style={styles.tabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              style={{ ...styles.tab, ...(activeCategory === cat ? styles.tabActive : {}) }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU SECTION */}
        <div style={styles.sectionTitle}>
          🍜 เมนูอาหาร
          {isAdminMode && (
            <button style={{ ...styles.saveBtn, padding: "6px 16px", borderRadius: "50px", fontSize: "13px", marginLeft: "auto" }} onClick={openAddModal}>
              + เพิ่มเมนู
            </button>
          )}
        </div>

        <div style={styles.menuGrid}>
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              style={{
                ...styles.menuCard,
                ...(hoveredCard === item.id ? styles.menuCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span style={styles.menuEmoji}>{item.emoji}</span>
              <div style={styles.menuName}>{item.name}</div>
              <div style={styles.menuCategory}>#{item.category}</div>
              <div style={styles.menuPrice}>฿{item.price}</div>

              {!isAdminMode && (
                <button style={styles.addBtn} onClick={() => addToCart(item)}>
                  + เพิ่มลงตะกร้า
                </button>
              )}

              {isAdminMode && (
                <div style={styles.adminControls}>
                  <button style={styles.editBtn} onClick={() => openEditModal(item)}>✏️ แก้ไข</button>
                  <button style={styles.deleteBtn} onClick={() => handleDeleteMenu(item.id)}>🗑️ ลบ</button>
                </div>
              )}
            </div>
          ))}
          {filteredMenu.length === 0 && (
            <div style={{ ...styles.emptyCart, gridColumn: "1/-1", color: "#666" }}>ไม่พบเมนูในหมวดนี้</div>
          )}
        </div>

        {/* CART SECTION */}
        {!isAdminMode && (
          <div style={styles.cartSection}>
            <div style={styles.sectionTitle}>🛒 ตะกร้าสินค้า</div>
            {cart.length === 0 ? (
              <div style={styles.emptyCart}>
                <div style={{ fontSize: "48px", marginBottom: "10px" }}>🧺</div>
                <div>ยังไม่มีรายการอาหาร</div>
                <div style={{ fontSize: "13px", color: "#444", marginTop: "4px" }}>เลือกเมนูด้านบนเพื่อเพิ่มลงตะกร้า</div>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} style={styles.cartItem}>
                    <span style={styles.cartEmoji}>{item.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={styles.cartName}>{item.name}</div>
                      <div style={{ fontSize: "13px", color: "#f0a500" }}>฿{item.price} × {item.qty} = ฿{item.price * item.qty}</div>
                    </div>
                    <div style={styles.cartControls}>
                      <button style={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}>−</button>
                      <span style={styles.qtyText}>{item.qty}</span>
                      <button style={styles.qtyBtn} onClick={() => updateQty(item.id, +1)}>+</button>
                      <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>ลบ</button>
                    </div>
                  </div>
                ))}

                <div style={styles.cartTotal}>
                  <span style={styles.totalLabel}>ยอดรวม ({totalItems} รายการ)</span>
                  <span style={styles.totalPrice}>฿{totalPrice}</span>
                </div>
                <button style={styles.orderBtn} onClick={placeOrder}>
                  🛵 สั่งอาหาร ฿{totalPrice}
                </button>
              </>
            )}
          </div>
        )}
      </main>

      {/* MODAL: ADD / EDIT */}
      {modal && (
        <div style={styles.overlay} onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div style={styles.modal}>
            <div style={styles.modalTitle}>
              {modal === "add" ? "➕ เพิ่มเมนูใหม่" : "✏️ แก้ไขเมนู"}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>อีโมจิ</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {EMOJIS.map((e) => (
                  <button
                    key={e}
                    style={{
                      fontSize: "22px", background: form.emoji === e ? "rgba(240,165,0,0.25)" : "transparent",
                      border: form.emoji === e ? "2px solid #f0a500" : "2px solid transparent",
                      borderRadius: "8px", padding: "4px", cursor: "pointer",
                    }}
                    onClick={() => setForm((f) => ({ ...f, emoji: e }))}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>ชื่อเมนู</label>
              <input
                style={styles.input}
                placeholder="เช่น ข้าวผัดปู"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>ราคา (บาท)</label>
              <input
                style={styles.input}
                type="number"
                placeholder="เช่น 80"
                value={form.price}
                onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>หมวดหมู่</label>
              <select
                style={styles.select}
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              >
                {["ข้าว", "เส้น", "ซุป", "ยำ", "แกง"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={styles.modalActions}>
              <button style={styles.cancelBtn} onClick={closeModal}>ยกเลิก</button>
              <button
                style={styles.saveBtn}
                onClick={modal === "add" ? handleAddMenu : handleEditMenu}
              >
                {modal === "add" ? "เพิ่มเมนู" : "บันทึก"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div style={styles.toast}>{toast}</div>}
    </div>
  );
}