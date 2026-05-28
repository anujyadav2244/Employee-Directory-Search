function SearchBar({ value, onChange }) {

    return (
        <input
            type="text"
            placeholder="Search employee..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;