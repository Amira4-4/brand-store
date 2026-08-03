import "./CategoryTabs.css";

export default function CategoryTabs({ tabs, activeSlug, onChange }) {
  return (
    <div className="category-tabs" role="tablist">
      <button
        type="button"
        className={`category-tabs__tab ${activeSlug === "all" ? "is-active" : ""}`}
        onClick={() => onChange("all")}
        role="tab"
      >
        الكل
      </button>
      {tabs.map((tab) => (
        <button
          key={tab.slug}
          type="button"
          className={`category-tabs__tab ${activeSlug === tab.slug ? "is-active" : ""}`}
          onClick={() => onChange(tab.slug)}
          role="tab"
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
