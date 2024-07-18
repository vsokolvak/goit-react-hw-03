import style from "./SearchBox.module.css";

function SearchBox({ value, onInput }) {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(el) => onInput(el.target.value)}
      />
    </div>
  );
}

export default SearchBox;