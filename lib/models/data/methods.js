'use strict';

module.exports.toJson = function() {
  return {
    id: this._id,
    user: this.user,
    creationDate: this.creationDate,
    os: this.os,
    version: this.version,
    ssid: this.ssid,
    location: {
      lat: this.location[0],
      lng: this.location[1]
    }
  };
};
