"use strict";Object.defineProperty(exports,"__esModule",{value:true});var toJSON=function toJSON(res){if(!/^2/.test(res.status)){throw new Error(res.statusText)}else {return res.json().then(function(res){if(res.code!=0){throw new Error(res.message)}else {return res.result}})}};exports.default=toJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi90b0pTT04uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNFQUlBLElBQU0sT0FBUyxTQUFULE1BQVMsQ0FBQyxHQUFELENBQVEsQ0FDckIsR0FBSSxDQUFDLEtBQUssSUFBTCxDQUFVLElBQUksTUFBSixDQUFYLENBQXdCLENBQzFCLE1BQU0sSUFBSSxLQUFKLENBQVUsSUFBSSxVQUFKLENBQWhCLENBRDBCLEtBRXJCLENBQ0wsT0FBTyxJQUFJLElBQUosR0FBVyxJQUFYLENBQWdCLGFBQU0sQ0FDM0IsR0FBSSxJQUFJLElBQUosRUFBWSxDQUFaLENBQWUsQ0FDakIsTUFBTSxJQUFJLEtBQUosQ0FBVSxJQUFJLE9BQUosQ0FBaEIsQ0FEaUIsS0FFWixDQUNMLE9BQU8sSUFBSSxNQUFKLENBREYsQ0FIYyxDQUF2QixDQURLLENBSE0saUJBY0EiLCJmaWxlIjoidG9KU09OLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0gcmVzXG4gKiBAdGhyb3cg5aaC5p6c5LiN5pivIDJ4eCDlsLHmiqXplJlcbiAqL1xuY29uc3QgdG9KU09OID0gKHJlcyk9PiB7XG4gIGlmICghL14yLy50ZXN0KHJlcy5zdGF0dXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKHJlcz0+IHtcbiAgICAgIGlmIChyZXMuY29kZSAhPSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b0pTT047Il19