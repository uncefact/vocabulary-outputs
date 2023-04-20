const search = {
    mapping: JSON.parse(localStorage.getItem('mapping')),
    container: document.getElementById('js-search-results'),
    dataSet: document.getElementById('js-search-dataset').value,
    async postData(searchQuery) {
        url = 'https://test.uncefact.org/search' + '?' + new URLSearchParams({
            q: searchQuery,
            size: 1000,
            fq: search.dataSet,
            sort: 'type asc'
        })

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    },

    init() {
        const self = this;

        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);
        const searchQuery = urlParams.get('q');

        document.getElementById('js-search-field').value = searchQuery;


        this.postData(searchQuery).then((data) => {
            const values = data.hits.hit;

            let options = {
                valueNames: ['field.label', 'field.type', 'field.comment'],
                item: function (values) {
                    const key = values.id.split('_');
                    return `<tr><td class='search-results__label'><a href="${self.getUrlById(key[1])}">${key[1]}</a></td><td class='search-results__type'>${values.fields.type}</td><td class='search-results__comment'>${values.fields.comment}</td></tr>`;
                },
                page: 20,
                searchClass: 'js-search-filter',
                pagination: {
                    innerWindow: 2,
                    outerWindow: 1
                },
            };

            document.getElementById('js-search-loader').style.display = 'none';

            const searchResultsList = new List('search-list', options, values);

            const noResultsContainer = document.getElementById('js-no-results');
            const tableResultsContainer = document.getElementById('js-table-results');

            if (searchResultsList.update().matchingItems.length) {
                tableResultsContainer.style.display = 'table';
            }

            searchResultsList.on('searchComplete', function () {
                if (searchResultsList.update().matchingItems.length === 0) {
                    noResultsContainer.style.display = 'block';
                    tableResultsContainer.style.display = 'none';
                } else {
                    noResultsContainer.style.display = 'none';
                    tableResultsContainer.style.display = 'table';
                }
            });

            const typeFilter = document.getElementById('item_type');

            typeFilter.addEventListener("change", function (event) {
                const selectedFilter = event.target.value;
                searchResultsList.filter(function (item) {
                    if (selectedFilter === 'all') {
                        return true;
                    } else {
                        return item.values().fields.type === selectedFilter;
                    }
                });

                if (searchResultsList.matchingItems.length === 0) {
                    noResultsContainer.style.display = 'block';
                    tableResultsContainer.style.display = 'none';
                } else {
                    noResultsContainer.style.display = 'none';
                    tableResultsContainer.style.display = 'table';
                }
            });
        });
    },

    getUrlById(id) {
        const key = id.split(':');
        if (this.mapping[key[0]] === undefined) {
            return 'javascript:void(0);';
        }

        return this.mapping[key[0]] + key[1];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    search.init();
});
