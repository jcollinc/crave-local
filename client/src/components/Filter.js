function Filter ({search, setSearch}) {

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch} value={search}/>
        </div>
    )
}

export default Filter