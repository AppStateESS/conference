/* global $ */

const loadLocations = resource => {
  $.ajax({
    url: 'conference/Admin/Location',
    dataType: 'json',
    type: 'get',
    success: data => {
      resource.locations = data.listing
    },
    error: () => {
      resource.setMessage('Could not access server')
    }
  })
}

export default loadLocations
