const socket = io()


const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')


//templates
const messageTemplate = document.querySelector('#template').innerHTML
const locationTemplate = document.querySelector('#locationTemplate').innerHTML
const sidebarTemplate = document.querySelector('#sidebarTemplate').innerHTML

//Options

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

const autoscroll = () => {

    const $newMessage = $messages.lastElementChild

    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

    const visibleHeight = $messages.offsetHeight

    const containerHeight = $messages.scrollHeight

    const scrollOffset = $messages.scrollTop + visibleHeight

    if(containerHeight - newMessageHeight <= scrollOffset ){

        $messages.scrollTop = $messages.scrollHeight

    }

}

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {

        username:message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('kk:mm')
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
})

socket.on('locationMessage', (message) => {
    console.log(message)
     const html = Mustache.render(locationTemplate, {

        username:message.username,
        mapsURL: message.mapsURL,
        createdAt: moment(message.createdAt).format('kk:mm')
    })
     $messages.insertAdjacentHTML('beforeend', html)
     autoscroll()
})

socket.on('roomData', ({ room, users }) => {

   const html = Mustache.render(sidebarTemplate, {
       room,
       users
   })

    document.querySelector('#sidebar').innerHTML = html

})

$messageForm.addEventListener('submit', (e) => {

    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value

    socket.emit('sendMessage', message, (error) => {

        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value=''
        $messageFormInput.focus()

        if(error){
            return console.log(error)
        }
        
        
        console.log('Message delivered.')
        //console.log('Message was sent.', message)

    })

})

$sendLocationButton.addEventListener('click', () => {
    
   if(!navigator.geolocation){
       return alert('Geolocation not supported.')
    } 
    $sendLocationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {

        socket.emit('sendLocation', {
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        }, () => {
                console.log('Location shared.')
       
            $messageFormInput.focus()
            $sendLocationButton.removeAttribute('disabled')
            
                //console.log(position)
        })

    })

})

socket.emit('join', { username, room }, (error) => {

    if(error) {
        alert(error)
        location.href = '/'
    }

})