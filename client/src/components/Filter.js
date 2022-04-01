function Filter ({search, setSearch}) {

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return(
        <div>
            <input 
                id="filter"
                className="login-input" 
                type="text" 
                placeholder="Search" 
                onChange={handleSearch} 
                value={search}
            />
        </div>
    )
}

export default Filter