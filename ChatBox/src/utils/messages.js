const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()

    }
}

const generateLocationMessage = (username, mapsURL) => {
    return {
        username,
        mapsURL,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}