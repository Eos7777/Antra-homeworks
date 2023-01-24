const state = {
        a: 'Apple',
        b: 'Bitcoin',
        c: 'Crunchbase',
        d: 'Deloitte',
        e: 'ElonMusk',
        f: 'Facebook',
        g: 'Google'
};

function init(state) {
        // create container
        let Container = document.createElement('div');
        document.body.appendChild(Container)

        // create two dropdown lists
        let dropdownKeys = document.createElement('select');
        let dropdownValues = document.createElement('select');

        Container.appendChild(dropdownKeys)
        Container.appendChild(dropdownValues)

        // create key list & value list
        function createLists() {
                for (let k of Object.keys(state)){
                        const optionKey = document.createElement('option')
                        const optionValue = document.createElement('option')
        
                        optionKey.innerHTML = optionKey.id = k;
                        optionValue.innerHTML = optionValue.id = state[k];
        
                        dropdownKeys.append(optionKey);
                        dropdownValues.append(optionValue);
                }
        }
        createLists();

        // event handlers
        dropdownKeys.onchange = (event) => {
                const indexNew = event.target.selectedIndex;
                dropdownValues.selectedIndex = indexNew;
        }
        dropdownValues.onchange = (event) => {
                const indexNew = event.target.selectedIndex;
                dropdownKeys.selectedIndex = indexNew;
        }
}

init(state);