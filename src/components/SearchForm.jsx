const SearchForm = () => {
    const searchFormSubmit = (evt) => {
        evt.preventDefault()

        let formData = new FormData(evt.target)

        const searchInput = formData.get("search-input")

        fetch(`http://127.0.0.1:8000/search?q=${searchInput}`)  
            .then(resp => resp.text())
            .then(resp => {
                console.log(resp)
            }).catch(error => {
                console.error(error)
            })
    }

    return (
        <form className="search-form bg-gray-200 rounded-3xl py-1.5 px-5" onSubmit={searchFormSubmit}>
            <input type="text" placeholder="Search Products" name="search-input" className="border-0 outline-0 bg-transparent" />
            <button type="submit">
                <span className="material-symbols-outlined align-middle text-xl leading-none">search</span>
            </button>
        </form>
    )
}

export default SearchForm
