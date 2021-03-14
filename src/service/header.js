export const Header = () => {
    const header = {
        'Content-Type': 'application/json',
        'Authorization-Token': token()
    }
    return header
}

export const HeaderNonToken = () => {
    const header = {
        'Content-Type': 'application/json',
    }
    return header
}

export const HeaderMultipart = () => {
    const header = {
        'Content-Type': "multipart/form-data",
        'Authorization-Token': token()
    }
    return header
}