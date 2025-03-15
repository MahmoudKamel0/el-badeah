// pages/404.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>😢 الصفحة غير موجودة</h1>
      <p>عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
      <Link href="/">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          العودة إلى الصفحة الرئيسية
        </button>
      </Link>
    </div>
  );
}
