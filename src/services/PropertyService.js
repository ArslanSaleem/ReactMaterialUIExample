const KEYS = {
    properties: 'properties',
    propertyId: 'propertyId'
}


export function storeProperty (data) {
    let properties = getProperties();
    const p_id = generatePropertyId ();
    data.id = p_id;
    properties.push(data);
    localStorage.setItem(KEYS.properties, JSON.stringify(properties));
}

export function getProperties () {
    if (localStorage.getItem(KEYS.properties) == null)
        localStorage.setItem(KEYS.properties, JSON.stringify([]))

    return JSON.parse(localStorage.getItem(KEYS.properties));
}

export function generatePropertyId() {
    if (localStorage.getItem(KEYS.propertyId) == null)
        localStorage.setItem(KEYS.propertyId, '0')
    var id = parseInt(localStorage.getItem(KEYS.propertyId))
    localStorage.setItem(KEYS.propertyId, (++id).toString())
    return id;
}