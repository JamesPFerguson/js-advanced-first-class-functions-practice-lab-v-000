// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
    console.log(driver.name)
  }
  })
}

const logDriversByRevenue = function(drivers) {
    return drivers.sort(function(a, b) a.revenue > b.revenue)
}

}

function driversByName() {

}

function totalRevenue() {

}

function averageRevenue() {

}
