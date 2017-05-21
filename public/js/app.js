"use strict";var _slicedToArray=function(){function o(o,e){var a=[],s=!0,r=!1,c=void 0;try{for(var t,l=o[Symbol.iterator]();!(s=(t=l.next()).done)&&(a.push(t.value),!e||a.length!==e);s=!0);}catch(o){r=!0,c=o}finally{try{!s&&l.return&&l.return()}finally{if(r)throw c}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return o(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();$(function(){function o(){44===h&&(n.text("That's half-time!"),y=!y,m.text("Play")),90===h?(clearInterval(k),m.text("Finish")):(h++,l.text(h))}function e(o){return Math.floor(Math.random()*o)}function a(){var o=document.getElementById("homeBar");b=d.averagePlayerValues("attack")+e(10),o.style.width=b+"%"}function s(){return e(d.averagePlayerValues("attack"))>=e(g.averagePlayerValues("attack"))?(n.css("background-color",d.colors[0]),n.css("color",d.colors[1]),[d,"home"]):(n.css("background-color",g.colors[0]),n.css("color",g.colors[1]),[g,"away"])}function r(o){var e=Math.floor(Math.random()*o.players.length);return o.players[e]}function c(o,e){if(e.playing){var a=null,s=null;"home"===o?(s=i.text(),a=parseFloat(s)+1,i.text(a)):(s=u.text(),a=parseFloat(s)+1,u.text(a)),n.text("Goal!!!"),$("#"+o+"Events").append("<i class='fa fa-futbol-o' style='font-size: 22px; color:white; padding-top:5px' aria-hidden='true'></i> "+h+" mins: "+e.name+" scored<br/>")}}function t(o,e){if(null===d){switch($(".home-team  .team-name").text(e),e){case"Tottenham":d=spurs,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1]);break;case"Man United":d=manUnited,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1]);break;case"Liverpool":d=liverpool,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1]);break;case"Man City":d=manCity,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1]);break;case"Everton":d=everton,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1]);break;case"Chelsea":d=chelsea,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1]);break;case"Leicester":d=leicester,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1]);break;case"Arsenal":d=arsenal,$(".home-team, #homeBar").css("background-color",d.colors[0]),$(".home-team").css("color",d.colors[1])}console.log(d)}else{switch($(".away-team .team-name").text(e),e){case"Tottenham":g=spurs,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1]);break;case"Man United":g=manUnited,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1]);break;case"Liverpool":g=liverpool,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1]);break;case"Man City":g=manCity,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1]);break;case"Everton":g=everton,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1]);break;case"Chelsea":g=chelsea,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1]);break;case"Leicester":g=leicester,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1]);break;case"Arsenal":g=arsenal,$(".away-team, .possession-bar").css("background-color",g.colors[0]),$(".away-team").css("color",g.colors[1])}console.log(g)}console.log(e)}var l=$(".changing-minutes"),n=$("#commentaryBox"),m=$(".primary-button"),i=$(".home-team .score"),u=$(".away-team .score"),h=0,y=!1,b=50,d=null,g=null,k=setInterval(function(){if(y){var t=e(100)+1,l=s(),n=_slicedToArray(l,2),m=n[0],i=n[1],u=r(m);console.log(u),t%2==0&&c(i,u),a(),o()}},200);$(".team-input").on("click",function(o){var e=o.target.innerHTML;console.log(o),null===d?(t(d,e),console.log("homeTeam now selected!"),$(".title-message").text("Home team chosen. Now chose your opponent.")):(t(g,e),console.log("awayTeam now selected!"),$("#match-setup, .info-message").hide(),$("#match-engine, .away-team, .home-team, .timer").show())}),m.on("click",function(){y=!y,y?m.text("Pause"):m.text("Play")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiJHByaW1hcnlCdXR0b24iLCJydW4iLCIkY29tbWVudGFyeUJveCIsInRleHQiLCJtYXRjaFRpbWUiLCJjbGVhckludGVydmFsIiwiJG1hdGNoVGltZSIsImdlblJhbmRvbVZhbHVlIiwidmFsdWUiLCJtb3ZlIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsInN0eWxlIiwiTWF0aCIsInJhbmRvbSIsImhvbWVUZWFtIiwiYXZlcmFnZVBsYXllclZhbHVlcyIsImNzcyIsImNvbG9ycyIsImhvbWVSYW5kb20iLCJhd2F5VGVhbSIsImF3YXlSYW5kb20iLCJ0ZWFtIiwiZmxvb3IiLCJwbGF5ZXJzIiwibGVuZ3RoIiwiZ2VuUmFuZG9tSW5kZXgiLCJnb2FsQ2hhbmNlIiwicGxheWVyIiwic2VsZWN0UGxheWVyIiwic2NvcmUiLCJnZXRTY29yZSIsInBsYXlpbmciLCIkaG9tZVNjb3JlIiwiJGF3YXlTY29yZSIsIm5hbWUiLCJzZWxlY3RvciIsInNwdXJzIiwibWFuVW5pdGVkIiwibGl2ZXJwb29sIiwibWFuQ2l0eSIsImV2ZXJ0b24iLCJjaGVsc2VhIiwibGVpY2VzdGVyIiwiYXJzZW5hbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCIsInRpbWVySUQiLCJfc2VsZWN0VGVhbSIsInNlbGVjdFRlYW0iLCJfc2VsZWN0VGVhbTIiLCJfc2xpY2VkVG9BcnJheSIsInRlYW1PYmplY3QiLCJ0ZWFtU3RyaW5nIiwiZXZlbnRWYWx1ZSIsImNob3NlblBsYXllciIsInRpbWVDb250cm9sIiwiZSIsImNvbmZpZ1RlYW0iLCJ1c2VyVGVhbSIsImhpZGUiLCJzaG93Il0sIm1hcHBpbmdzIjoibWNBQUFBLEdBQUUsV0F1RUFDLFFBQUFBLEtBRVFBLEtBQU5DLElBRkZDLEVBQUFDLEtBQUEscUJBV0lGLEdBQU9BLEVBTlhELEVBQUFHLEtBQUEsU0FVbUIsS0FBZEMsR0FOSEMsY0FBR0QsR0FDREYsRUFBZUMsS0FBZixZQUVBSCxJQUNETSxFQUFBSCxLQUFBQyxJQUtBLFFBQU1HLEdBQUFDLEdBQ0xKLE1BQUFBLE1BQUFBLE1BQUFBLEtBQUFBLFNBQUFBLEdBSUgsUUFBQUssS0FPQyxHQUFNQyxHQUFPQyxTQUFTQyxlQUFlLFVBTHZDQyxHQUFTTixFQUFBQSxvQkFBc0IsVUFBQUEsRUFBQSxJQUM3QkcsRUFBQUksTUFBUUMsTUFBV0EsRUFBS0MsSUFHMUIsUUFBU1AsS0FJUixNQUh1QkcsR0FBZUssRUFBeEJDLG9CQUFiLFlBQ2lCQSxFQUFBQSxFQUFvQkEsb0JBQTJCLFlBUzlEaEIsRUFBZWlCLElBQUksbUJBQW9CRixFQUFTRyxPQUFPLElBTDNEbEIsRUFBQWlCLElBQXNCLFFBQUFGLEVBQUFHLE9BQUEsS0FDZEMsRUFBY2QsVUFRbEJMLEVBQWVpQixJQUFJLG1CQUFvQkcsRUFBU0YsT0FBTyxJQUx6RGxCLEVBQUltQixJQUFjRSxRQUFZRCxFQUFBRixPQUFBLEtBQzVCbEIsRUFBQSxTQUlBQSxRQUFBQSxHQUFBc0IsR0FDQXRCLEdBQUFBLEdBQW1CYSxLQUFuQlUsTUFBNEJILEtBQVNGLFNBQXJDSSxFQUFBRSxRQUFBQyxPQUNBLE9BQUFILEdBQVFGLFFBQVVNLEdBU3RCLFFBQVNDLEdBQVdMLEVBQU1NLEdBTDFCLEdBQUFBLEVBQVNDLFFBQWFQLENBRXBCLEdBQUFRLEdBQVlOLEtBQ2JPLEVBQUEsSUFPZ0IsVUFBVFQsR0FMUlMsRUFBU0osRUFBaUJDLE9BQ3BCQSxFQUFPSSxXQUFTRCxHQUFBLEVBQ2xCRSxFQUFBaEMsS0FBQTZCLEtBRUFDLEVBQUlBLEVBQUo5QixPQUNBNkIsRUFBSVIsV0FBaUJTLEdBQUEsRUFDbkJBLEVBQVdFLEtBQUFBLElBRVhBLEVBQVdoQyxLQUFYZ0MsV0FFQUYsRUFBQUEsSUFBQUEsRUFBQUEsVUFBV0csT0FBWEgsMkdBQUE3QixFQUFBNkIsVUFBQUgsRUFBQU8sS0FBQUosaUJBNEhKLFFBQUloQixHQUFhTyxFQUFNYyxHQUNyQnZDLEdBQUUsT0FBQWtCLEVBQUEsQ0FFQSxPQURGbEIsRUFBQSwwQkFBQUksS0FBQW1DLEdBQ09BLEdBQ0hyQixJQUFBQSxZQUNBbEIsRUFBRXdDLE1BQ0Z4QyxFQUFFLHdCQUFrQm9CLElBQVNGLG1CQUE3QkEsRUFBQUcsT0FBQSxJQUNBckIsRUFBQSxjQUFBb0IsSUFBQSxRQUFBRixFQUFBRyxPQUFBLEdBQ0YsTUFDRUgsS0FBQUEsYUFDQWxCLEVBQUV5QyxVQUNGekMsRUFBRSx3QkFBa0JvQixJQUFTRixtQkFBN0JBLEVBQUFHLE9BQUEsSUFDQXJCLEVBQUEsY0FBQW9CLElBQUEsUUFBQUYsRUFBQUcsT0FBQSxHQUNGLE1BQ0VILEtBQUFBLFlBQ0FsQixFQUFFMEMsVUFDRjFDLEVBQUUsd0JBQWtCb0IsSUFBU0YsbUJBQTdCQSxFQUFBRyxPQUFBLElBQ0FyQixFQUFBLGNBQUFvQixJQUFBLFFBQUFGLEVBQUFHLE9BQUEsR0FDRixNQUNFSCxLQUFBQSxXQUNBbEIsRUFBRTJDLFFBQ0YzQyxFQUFFLHdCQUFrQm9CLElBQVNGLG1CQUE3QkEsRUFBQUcsT0FBQSxJQUNBckIsRUFBQSxjQUFBb0IsSUFBQSxRQUFBRixFQUFBRyxPQUFBLEdBQ0YsTUFDRUgsS0FBQUEsVUFDQWxCLEVBQUU0QyxRQUNGNUMsRUFBRSx3QkFBa0JvQixJQUFTRixtQkFBN0JBLEVBQUFHLE9BQUEsSUFDQXJCLEVBQUEsY0FBQW9CLElBQUEsUUFBQUYsRUFBQUcsT0FBQSxHQUNGLE1BQ0VILEtBQUFBLFVBQ0FsQixFQUFFNkMsUUFDRjdDLEVBQUUsd0JBQWtCb0IsSUFBU0YsbUJBQTdCQSxFQUFBRyxPQUFBLElBQ0FyQixFQUFBLGNBQUFvQixJQUFBLFFBQUFGLEVBQUFHLE9BQUEsR0FDRixNQUNFSCxLQUFBQSxZQUNBbEIsRUFBRThDLFVBQ0Y5QyxFQUFFLHdCQUFrQm9CLElBQVNGLG1CQUE3QkEsRUFBQUcsT0FBQSxJQUNBckIsRUFBQSxjQUFBb0IsSUFBQSxRQUFBRixFQUFBRyxPQUFBLEdBQ0YsTUFDRUgsS0FBQUEsVUFDQWxCLEVBQUUrQyxRQUNGL0MsRUFBRSx3QkFBa0JvQixJQUFTRixtQkFBN0JBLEVBQUFHLE9BQUEsSUFDQXJCLEVBQUEsY0FBQW9CLElBQUEsUUFBQUYsRUFBQUcsT0FBQSxJQTFDTjJCLFFBNkNPQyxJQUFBL0IsT0FBQSxDQUtILE9BSEZsQixFQUFFLHlCQUF5QkksS0FBS21DLEdBR3pCQSxHQUNIaEIsSUFBQUEsWUFDQXZCLEVBQUV3QyxNQUNGeEMsRUFBRSwrQkFBMkJ1QixJQUFBQSxtQkFBN0JBLEVBQUFGLE9BQUEsSUFDQXJCLEVBQUEsY0FBQW9CLElBQUEsUUFBQUcsRUFBQUYsT0FBQSxHQUNGLE1BQ0VFLEtBQUFBLGFBQ0F2QixFQUFFeUMsVUFDRnpDLEVBQUUsK0JBQTJCdUIsSUFBQUEsbUJBQTdCQSxFQUFBRixPQUFBLElBQ0FyQixFQUFBLGNBQUFvQixJQUFBLFFBQUFHLEVBQUFGLE9BQUEsR0FDRixNQUNFRSxLQUFBQSxZQUNBdkIsRUFBRTBDLFVBQ0YxQyxFQUFFLCtCQUEyQnVCLElBQUFBLG1CQUE3QkEsRUFBQUYsT0FBQSxJQUNBckIsRUFBQSxjQUFBb0IsSUFBQSxRQUFBRyxFQUFBRixPQUFBLEdBQ0YsTUFDRUUsS0FBQUEsV0FDQXZCLEVBQUUyQyxRQUNGM0MsRUFBRSwrQkFBMkJ1QixJQUFBQSxtQkFBN0JBLEVBQUFGLE9BQUEsSUFDQXJCLEVBQUEsY0FBQW9CLElBQUEsUUFBQUcsRUFBQUYsT0FBQSxHQUNGLE1BQ0VFLEtBQUFBLFVBQ0F2QixFQUFFNEMsUUFDRjVDLEVBQUUsK0JBQTJCdUIsSUFBQUEsbUJBQTdCQSxFQUFBRixPQUFBLElBQ0FyQixFQUFBLGNBQUFvQixJQUFBLFFBQUFHLEVBQUFGLE9BQUEsR0FDRixNQUNFRSxLQUFBQSxVQUNBdkIsRUFBRTZDLFFBQ0Y3QyxFQUFFLCtCQUEyQnVCLElBQUFBLG1CQUE3QkEsRUFBQUYsT0FBQSxJQUNBckIsRUFBQSxjQUFBb0IsSUFBQSxRQUFBRyxFQUFBRixPQUFBLEdBQ0YsTUFDRUUsS0FBQUEsWUFDQXZCLEVBQUU4QyxVQUNGOUMsRUFBRSwrQkFBMkJ1QixJQUFBQSxtQkFBN0JBLEVBQUFGLE9BQUEsSUFDQXJCLEVBQUEsY0FBQW9CLElBQUEsUUFBQUcsRUFBQUYsT0FBQSxHQUNGLE1BQ0VFLEtBQUFBLFVBQ0F2QixFQUFFK0MsUUFDRi9DLEVBQUUsK0JBQTJCdUIsSUFBQUEsbUJBQTdCQSxFQUFBRixPQUFBLElBQ0FyQixFQUFBLGNBQUFvQixJQUFBLFFBQUFHLEVBQUFGLE9BQUEsSUFHTDJCLFFBQUFDLElBQUExQixHQUdEeUIsUUFBQUMsSUFBQVYsR0FsV0YsR0FBTWhDLEdBQWFQLEVBQUUscUJBQ2ZHLEVBQWlCSCxFQUFFLGtCQUNuQkMsRUFBaUJELEVBQUUsbUJBSHpCb0MsRUFBTXBDLEVBQUEscUJBQ0FPLEVBQWVQLEVBQUEscUJBSWZxQyxFQUFBQSxFQUNObkMsR0FBQSxFQUNBWSxFQUFBLEdBS0lJLEVBQVcsS0FIWGIsRUFBQUEsS0FJQWtCLEVBQVcyQixZQUFmLFdBS0UsR0FBSWhELEVBQUssQ0FETGlELEdBQUFBLEdBQVVELEVBQXVCLEtBQUEsRUFDNUJFLEVBSTBCQyxJQUoxQkMsRUFBQUMsZUFBQUgsRUFBQSxHQUlBSSxFQUpBRixFQUFBLEdBSVlHLEVBSlpILEVBQUEsR0FFREksRUFBYWxELEVBQWVnRCxFQUlsQ1IsU0FBUUMsSUFBSVUsR0FOTEQsRUFBQSxHQUFBLEdBQUE1QixFQUlBMEIsRUFKQUcsR0F1QlBqRCxJQUNBa0QsTUFFQSxJQUlBbEQsR0FBQUEsZUFBQUEsR0FBQUEsUUFBQUEsU0FBQUEsR0FDQWtELEdBQUFBLEdBQUFBLEVBQUFBLE9BQUFBLFNBQ0RaLFNBQUFDLElBQUFZLEdBakNILE9BQWdCM0MsR0EwQ1o0QyxFQUFXNUMsRUFBVTZDLEdBTnpCZixRQUFBQyxJQUFBLDBCQVFJakQsRUFBRSxrQkFBa0JJLEtBQUssZ0RBSjNCNEMsRUFBQXpCLEVBQUF3QyxHQUNBZixRQUFJOUIsSUFBQUEsMEJBQ0Y0QyxFQUFBQSwrQkFBQUUsT0FDQWhCLEVBQUFBLGlEQUFBaUIsVUFJQUgsRUFBV3ZDLEdBQUFBLFFBQVV3QyxXQUNyQmYsR0FBQUEsRUFDQWhELEVBQUVDLEVBQUFHLEtBQUEsU0FBK0I0RCxFQUFqQzVELEtBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgoKSA9PiB7XG4gIGNvbnN0ICRtYXRjaFRpbWUgPSAkKCcuY2hhbmdpbmctbWludXRlcycpO1xuICBjb25zdCAkY29tbWVudGFyeUJveCA9ICQoJyNjb21tZW50YXJ5Qm94Jyk7XG4gIGNvbnN0ICRwcmltYXJ5QnV0dG9uID0gJCgnLnByaW1hcnktYnV0dG9uJyk7XG4gIGNvbnN0ICRob21lU2NvcmUgPSAkKCcuaG9tZS10ZWFtIC5zY29yZScpO1xuICBjb25zdCAkYXdheVNjb3JlID0gJCgnLmF3YXktdGVhbSAuc2NvcmUnKTtcbiAgLy8gY29uc3QgJGhvbWVUZWFtID0gJCgnLmhvbWUtdGVhbScpO1xuICAvLyBjb25zdCAkYXdheVRlYW0gPSAkKCcuYXdheS10ZWFtJyk7XG5cbiAgbGV0IG1hdGNoVGltZSA9IDA7XG4gIGxldCBydW4gPSBmYWxzZTtcbiAgbGV0IHdpZHRoID0gNTA7XG4gIGxldCBob21lVGVhbSA9IG51bGw7XG4gIGxldCBhd2F5VGVhbSA9IG51bGw7XG5cblxuICAvLyBNQVRDSCBMT0dJQ1xuICBjb25zdCB0aW1lcklEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHJ1bikge1xuXG4gICAgICBjb25zdCBldmVudFZhbHVlID0gZ2VuUmFuZG9tVmFsdWUoMTAwKSArIDE7XG5cbiAgICAgIGNvbnN0IFt0ZWFtT2JqZWN0LCB0ZWFtU3RyaW5nXSA9IHNlbGVjdFRlYW0oKTtcbiAgICAgIGNvbnN0IGNob3NlblBsYXllciA9IHNlbGVjdFBsYXllcih0ZWFtT2JqZWN0KTtcbiAgICAgIGNvbnNvbGUubG9nKGNob3NlblBsYXllcik7XG4gICAgICAvLyBXaG8gaGFzIHRoZSBldmVudD9cbiAgICAgIGlmIChldmVudFZhbHVlICUgMiA9PT0gMCkge1xuICAgICAgICBnb2FsQ2hhbmNlKHRlYW1TdHJpbmcsIGNob3NlblBsYXllcik7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIChldmVudFZhbHVlICUgODAgPT09IDApIHtcbiAgICAgIC8vICAgaGFuZGxlUGVuYWx0eShjaG9zZW5QbGF5ZXIsIHRlYW1TdHJpbmcpO1xuICAgICAgLy8gfVxuICAgICAgLy9cbiAgICAgIC8vIGlmIChldmVudFZhbHVlICUgOTUgPT09IDApIHtcbiAgICAgIC8vICAgc3RyYWlnaHRSZWQoY2hvc2VuUGxheWVyLCB0ZWFtU3RyaW5nKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vXG4gICAgICAvLyBpZiAoZXZlbnRWYWx1ZSAlIDEyID09PSAwKSB7XG4gICAgICAvLyAgIGhhbmRsZUZyZWVraWNrKGNob3NlblBsYXllciwgdGVhbVN0cmluZyk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoZXZlbnRWYWx1ZSAlIDIwID09PSAwKSB7XG4gICAgICAvLyAgIGhhbmRsZURpc2NpcGxpbmUoY2hvc2VuUGxheWVyLCB0ZWFtU3RyaW5nKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vXG4gICAgICAvLyBpZiAoZXZlbnRWYWx1ZSAlIDc1ID09PSAwKSB7XG4gICAgICAvLyAgIGhhbmRsZUluanVyeShjaG9zZW5QbGF5ZXIsIHRlYW1TdHJpbmcpO1xuICAgICAgLy8gfVxuICAgICAgbW92ZSgpO1xuICAgICAgdGltZUNvbnRyb2woKTtcbiAgICB9XG4gIH0sMjAwKTtcblxuICAvLyBFdmVudCBMaXN0ZW5lcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICQoJy50ZWFtLWlucHV0Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB1c2VyVGVhbSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBpZiAoaG9tZVRlYW0gPT09IG51bGwpIHtcbiAgICAgIGNvbmZpZ1RlYW0oaG9tZVRlYW0sIHVzZXJUZWFtKTtcbiAgICAgIGNvbnNvbGUubG9nKCdob21lVGVhbSBub3cgc2VsZWN0ZWQhJyk7XG4gICAgICAkKCcudGl0bGUtbWVzc2FnZScpLnRleHQoJ0hvbWUgdGVhbSBjaG9zZW4uIE5vdyBjaG9zZSB5b3VyIG9wcG9uZW50LicpO1xuICAgICAgLy8gZS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnVGVhbShhd2F5VGVhbSwgdXNlclRlYW0pO1xuICAgICAgY29uc29sZS5sb2coJ2F3YXlUZWFtIG5vdyBzZWxlY3RlZCEnKTtcbiAgICAgICQoJyNtYXRjaC1zZXR1cCwgLmluZm8tbWVzc2FnZScpLmhpZGUoKTtcbiAgICAgICQoJyNtYXRjaC1lbmdpbmUsIC5hd2F5LXRlYW0sIC5ob21lLXRlYW0sIC50aW1lcicpLnNob3coKTtcbiAgICB9XG4gIH0pO1xuXG4gICRwcmltYXJ5QnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBydW4gPSAhcnVuO1xuICAgIHJ1biA/ICRwcmltYXJ5QnV0dG9uLnRleHQoJ1BhdXNlJykgOiAkcHJpbWFyeUJ1dHRvbi50ZXh0KCdQbGF5Jyk7XG4gIH0pO1xuXG4gIC8vIEZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZnVuY3Rpb24gdGltZUNvbnRyb2woKSB7XG5cbiAgICBpZihtYXRjaFRpbWUgPT09IDQ0KSB7XG4gICAgICAkY29tbWVudGFyeUJveC50ZXh0KGBUaGF0J3MgaGFsZi10aW1lIWApO1xuICAgICAgcnVuID0gIXJ1bjtcbiAgICAgICRwcmltYXJ5QnV0dG9uLnRleHQoJ1BsYXknKTtcbiAgICB9XG5cbiAgICBpZihtYXRjaFRpbWUgPT09IDkwKSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVySUQpO1xuICAgICAgJHByaW1hcnlCdXR0b24udGV4dCgnRmluaXNoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGNoVGltZSsrO1xuICAgICAgJG1hdGNoVGltZS50ZXh0KG1hdGNoVGltZSk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBnZW5SYW5kb21WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQmFyJyk7XG4gICAgd2lkdGggPSBob21lVGVhbS5hdmVyYWdlUGxheWVyVmFsdWVzKCdhdHRhY2snKSArIGdlblJhbmRvbVZhbHVlKDEwKTtcbiAgICBlbGVtLnN0eWxlLndpZHRoID0gd2lkdGggKyAnJSc7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RUZWFtKCkge1xuICAgIGNvbnN0IGhvbWVSYW5kb20gPSAgZ2VuUmFuZG9tVmFsdWUoaG9tZVRlYW0uYXZlcmFnZVBsYXllclZhbHVlcygnYXR0YWNrJykpO1xuICAgIGNvbnN0IGF3YXlSYW5kb20gPSAgZ2VuUmFuZG9tVmFsdWUoYXdheVRlYW0uYXZlcmFnZVBsYXllclZhbHVlcygnYXR0YWNrJykpO1xuXG4gICAgaWYgKGhvbWVSYW5kb20gPj0gYXdheVJhbmRvbSkge1xuICAgICAgJGNvbW1lbnRhcnlCb3guY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgaG9tZVRlYW0uY29sb3JzWzBdKTtcbiAgICAgICRjb21tZW50YXJ5Qm94LmNzcygnY29sb3InLCBob21lVGVhbS5jb2xvcnNbMV0pO1xuICAgICAgcmV0dXJuIFtob21lVGVhbSwgJ2hvbWUnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGNvbW1lbnRhcnlCb3guY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXdheVRlYW0uY29sb3JzWzBdKTtcbiAgICAgICRjb21tZW50YXJ5Qm94LmNzcygnY29sb3InLCBhd2F5VGVhbS5jb2xvcnNbMV0pO1xuICAgICAgcmV0dXJuIFthd2F5VGVhbSwgJ2F3YXknXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RQbGF5ZXIodGVhbSkge1xuICAgIGNvbnN0IGdlblJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVhbS5wbGF5ZXJzLmxlbmd0aCk7XG4gICAgcmV0dXJuIHRlYW0ucGxheWVyc1tnZW5SYW5kb21JbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnb2FsQ2hhbmNlKHRlYW0sIHBsYXllcikge1xuICAgIGlmIChwbGF5ZXIucGxheWluZykge1xuICAgICAgLy8gUmVmYWN0b3IgdGhpc1xuICAgICAgbGV0IHNjb3JlID0gbnVsbDtcbiAgICAgIGxldCBnZXRTY29yZSA9IG51bGw7XG4gICAgICBpZiAodGVhbSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgIGdldFNjb3JlID0gJGhvbWVTY29yZS50ZXh0KCk7XG4gICAgICAgIHNjb3JlID0gcGFyc2VGbG9hdChnZXRTY29yZSkgKyAxO1xuICAgICAgICAkaG9tZVNjb3JlLnRleHQoc2NvcmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0U2NvcmUgPSAkYXdheVNjb3JlLnRleHQoKTtcbiAgICAgICAgc2NvcmUgPSBwYXJzZUZsb2F0KGdldFNjb3JlKSArIDE7XG4gICAgICAgICRhd2F5U2NvcmUudGV4dChzY29yZSk7XG4gICAgICB9XG4gICAgICAkY29tbWVudGFyeUJveC50ZXh0KGBHb2FsISEhYCk7XG5cbiAgICAgICQoYCMke3RlYW19RXZlbnRzYCkuYXBwZW5kKGA8aSBjbGFzcz0nZmEgZmEtZnV0Ym9sLW8nIHN0eWxlPSdmb250LXNpemU6IDIycHg7IGNvbG9yOndoaXRlOyBwYWRkaW5nLXRvcDo1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+ICR7bWF0Y2hUaW1lfSBtaW5zOiAke3BsYXllci5uYW1lfSBzY29yZWQ8YnIvPmApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2NpcGxpbmUocGxheWVyLCB0ZWFtKSB7XG4gICAgaWYgKHBsYXllci5zdGF0dXMpIHtcbiAgICAgIC8vIEFscmVhZHkgYm9va2VkPyBTZW5kIGhpbSBvZmYhXG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuc3RhdHVzKTtcbiAgICAgIGlmIChwbGF5ZXIuc3RhdHVzID09PSAnWWVsbG93Jykge1xuICAgICAgICAkY29tbWVudGFyeUJveC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI0ZGMDAwMCcpO1xuICAgICAgICAkY29tbWVudGFyeUJveC5jc3MoJ2NvbG9yJywgJyNGRkZGRkYnKTtcbiAgICAgICAgLy8gU3RvcmUgbWVzYWdlcyBhbmQgZGV0YWlscyBpbiBhbiBnYW1lIE9iamVjdFxuICAgICAgICAkY29tbWVudGFyeUJveC50ZXh0KGAke3BsYXllci5uYW1lfSBnZXRzIGEgcmVkIWApO1xuICAgICAgICAkKGAjJHt0ZWFtfUV2ZW50c2ApLmFwcGVuZChgPGkgY2xhc3M9J2ZhIGZhLXNxdWFyZSBldmVudC1pdGVtJyBzdHlsZT0nZm9udC1zaXplOiAyNHB4OyBjb2xvcjogcmVkOyBwYWRkaW5nLXRvcDo1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+ICR7bWF0Y2hUaW1lfSBtaW5zOiAke3BsYXllci5uYW1lfSBzZW50IG9mZjxici8+YCk7XG5cbiAgICAgICAgcGxheWVyLnN0YXR1cyA9ICdFamVjdGVkJztcbiAgICAgICAgcGxheWVyLnBsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGNvbW1lbnRhcnlCb3guY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3llbGxvdycpO1xuICAgICAgICAkY29tbWVudGFyeUJveC5jc3MoJ2NvbG9yJywgJyMwMDAwMDAnKTtcbiAgICAgICAgJGNvbW1lbnRhcnlCb3gudGV4dChgJHtwbGF5ZXIubmFtZX0gZ2V0cyBhIHllbGxvdyFgKTtcblxuICAgICAgICAvLyBTdG9yZSBtZXNhZ2VzIGFuZCBkZXRhaWxzIGluIGFuIGdhbWUgT2JqZWN0XG4gICAgICAgICQoYCMke3RlYW19RXZlbnRzYCkuYXBwZW5kKGA8aSBjbGFzcz0nZmEgZmEtc3F1YXJlIGV2ZW50LWl0ZW0nIHN0eWxlPSdmb250LXNpemU6IDI0cHg7IGNvbG9yOiB5ZWxsb3c7IHBhZGRpbmctdG9wOjVweCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT4gJHttYXRjaFRpbWV9IG1pbnM6ICR7cGxheWVyLm5hbWV9IGJvb2tlZDxici8+YCk7XG5cbiAgICAgICAgcGxheWVyLnN0YXR1cyA9ICdZZWxsb3cnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUluanVyeShwbGF5ZXIsIHRlYW0pIHtcblxuICAgIGlmIChwbGF5ZXIucGxheWluZykge1xuICAgICAgLy8gVEhFUkUgQ09VTEQgQkUgQU4gSU5KVVJZXG4gICAgICBpZiAoZ2VuUmFuZG9tVmFsdWUoMTAxKSAlIDggPT09IDApIHtcbiAgICAgICAgJGNvbW1lbnRhcnlCb3gudGV4dChgJHtwbGF5ZXIubmFtZX0gZ2V0cyB0YWtlbiBvZmYgb24gYSBzdHJldGNoZXIhYCk7XG4gICAgICAgICQoYCMke3RlYW19RXZlbnRzYCkuYXBwZW5kKGA8aSBjbGFzcz0nZmEgZmEtcGx1cycgc3R5bGU9J2ZvbnQtc2l6ZTogMjZweDsgY29sb3I6IGdyZWVuOyBwYWRkaW5nLXRvcDo1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+ICR7bWF0Y2hUaW1lfSBtaW5zOiAke3BsYXllci5uYW1lfSBpbmp1cmVkPGJyLz5gKTtcbiAgICAgICAgcGxheWVyLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb21tZW50YXJ5Qm94LnRleHQoYCR7cGxheWVyLm5hbWV9J3MgbGltcGluZywgYnV0IGhlJ2xsIGJlIG9rYXlgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGcmVla2ljayhwbGF5ZXIsIHRlYW0pIHtcblxuICAgIGlmIChwbGF5ZXIucGxheWluZykge1xuICAgICAgLy8gVEhFUkUgQ09VTEQgQkUgQU4gSU5KVVJZXG4gICAgICBpZiAoZ2VuUmFuZG9tVmFsdWUoMTAxKSAlIDUgPT09IDApIHtcblxuICAgICAgICAvLyBSZWZhY3RvciB0aGlzXG4gICAgICAgIGxldCBzY29yZSA9IG51bGw7XG4gICAgICAgIGxldCBnZXRTY29yZSA9IG51bGw7XG4gICAgICAgIGlmICh0ZWFtID09PSAnaG9tZScpIHtcbiAgICAgICAgICBnZXRTY29yZSA9ICRob21lU2NvcmUudGV4dCgpO1xuICAgICAgICAgIHNjb3JlID0gcGFyc2VGbG9hdChnZXRTY29yZSkgKyAxO1xuICAgICAgICAgICRob21lU2NvcmUudGV4dChzY29yZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2V0U2NvcmUgPSAkYXdheVNjb3JlLnRleHQoKTtcbiAgICAgICAgICBzY29yZSA9IHBhcnNlRmxvYXQoZ2V0U2NvcmUpICsgMTtcbiAgICAgICAgICAkYXdheVNjb3JlLnRleHQoc2NvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGNvbW1lbnRhcnlCb3gudGV4dChgSXQncyBhIHdvbmRlciBnb2FsISBHb2FsISEhYCk7XG4gICAgICAgICQoYCMke3RlYW19RXZlbnRzYCkuYXBwZW5kKGA8aSBjbGFzcz0nZmEgZmEtZnV0Ym9sLW8nIHN0eWxlPSdmb250LXNpemU6IDIycHg7IGNvbG9yOndoaXRlOyBwYWRkaW5nLXRvcDo1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+ICR7bWF0Y2hUaW1lfSBtaW5zOiAke3BsYXllci5uYW1lfSBzY29yZWQ8YnIvPmApO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkY29tbWVudGFyeUJveC50ZXh0KGBPaCEgJHtwbGF5ZXIubmFtZX0gaGFzIHB1dCBpdCBpbiBSb3cgWiFgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQZW5hbHR5KHBsYXllciwgdGVhbSkge1xuICAgIGlmIChwbGF5ZXIuc3RhdHVzKSB7XG4gICAgICBpZiAoZ2VuUmFuZG9tVmFsdWUoMTAxKSAlIDUgPT09IDApIHtcbiAgICAgICAgLy8gUmVmYWN0b3IgdGhpc1xuICAgICAgICBsZXQgc2NvcmUgPSBudWxsO1xuICAgICAgICBsZXQgZ2V0U2NvcmUgPSBudWxsO1xuICAgICAgICBpZiAodGVhbSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgZ2V0U2NvcmUgPSAkaG9tZVNjb3JlLnRleHQoKTtcbiAgICAgICAgICBzY29yZSA9IHBhcnNlRmxvYXQoZ2V0U2NvcmUpICsgMTtcbiAgICAgICAgICAkaG9tZVNjb3JlLnRleHQoc2NvcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdldFNjb3JlID0gJGF3YXlTY29yZS50ZXh0KCk7XG4gICAgICAgICAgc2NvcmUgPSBwYXJzZUZsb2F0KGdldFNjb3JlKSArIDE7XG4gICAgICAgICAgJGF3YXlTY29yZS50ZXh0KHNjb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRjb21tZW50YXJ5Qm94LnRleHQoYCR7cGxheWVyLm5hbWV9J3MgY2xpbmljYWwgZnJvbSB0aGUgc3BvdCEgR29hbCEhIWApO1xuXG4gICAgICAgICQoYCMke3RlYW19RXZlbnRzYCkuYXBwZW5kKGA8aSBjbGFzcz0nZmEgZmEtZnV0Ym9sLW8nIHN0eWxlPSdmb250LXNpemU6IDIycHg7IGNvbG9yOndoaXRlOyBwYWRkaW5nLXRvcDo1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+ICR7bWF0Y2hUaW1lfSBtaW5zOiAke3BsYXllci5uYW1lfSBzY29yZXMgcGVuYWx0eTxici8+YCk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb21tZW50YXJ5Qm94LnRleHQoYEhlJ3MgbWlzc2VkIGl0ISBUaGUgcHJlc3N1cmUgaGFzIGdvdCB0byBoaW1gKTtcbiAgICAgICAgJChgIyR7dGVhbX1FdmVudHNgKS5hcHBlbmQoYDxpIGNsYXNzPSdmYSBmYS1mdXRib2wtbycgc3R5bGU9J2ZvbnQtc2l6ZTogMjJweDsgY29sb3I6cmVkOyBwYWRkaW5nLXRvcDo1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+ICR7bWF0Y2hUaW1lfSBtaW5zOiAke3BsYXllci5uYW1lfSBzY29yZXMgcGVuYWx0eTxici8+YCk7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHJhaWdodFJlZChwbGF5ZXIsIHRlYW0pIHtcbiAgICBpZiAocGxheWVyLnBsYXlpbmcpIHtcbiAgICAgIHBsYXllci5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAkY29tbWVudGFyeUJveC50ZXh0KCdUaGUgcmVmZXJlZSBnaXZlcyBoaW0gYSBzdHJhaWdodCByZWQhJyk7XG4gICAgICAkKGAjJHt0ZWFtfUV2ZW50c2ApLmFwcGVuZChgPGkgY2xhc3M9J2ZhIGZhLXNxdWFyZScgc3R5bGU9J2ZvbnQtc2l6ZTogMjRweDsgY29sb3I6IHJlZDsgcGFkZGluZy10b3A6NXB4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPiAke21hdGNoVGltZX0gbWluczogJHtwbGF5ZXIubmFtZX0gc2VudCBvZmY8YnIvPmApO1xuICAgIH1cbiAgfVxuXG5cblxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlRXZlbnRNZXNzYWdlKCkge1xuICAgIC8vIFN0b3JlIG1lc2FnZXMgYW5kIGRldGFpbHMgaW4gYW4gZ2FtZSBPYmplY3RcblxuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlnVGVhbSh0ZWFtLCBzZWxlY3Rvcikge1xuICAgIGlmIChob21lVGVhbSA9PT0gbnVsbCkge1xuICAgICAgJCgnLmhvbWUtdGVhbSAgLnRlYW0tbmFtZScpLnRleHQoc2VsZWN0b3IpO1xuICAgICAgc3dpdGNoIChzZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdUb3R0ZW5oYW0nOlxuICAgICAgICAgIGhvbWVUZWFtID0gc3B1cnM7XG4gICAgICAgICAgJCgnLmhvbWUtdGVhbSwgI2hvbWVCYXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBob21lVGVhbS5jb2xvcnNbMF0pO1xuICAgICAgICAgICQoJy5ob21lLXRlYW0nKS5jc3MoJ2NvbG9yJywgaG9tZVRlYW0uY29sb3JzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWFuIFVuaXRlZCc6XG4gICAgICAgICAgaG9tZVRlYW0gPSBtYW5Vbml0ZWQ7XG4gICAgICAgICAgJCgnLmhvbWUtdGVhbSwgI2hvbWVCYXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBob21lVGVhbS5jb2xvcnNbMF0pO1xuICAgICAgICAgICQoJy5ob21lLXRlYW0nKS5jc3MoJ2NvbG9yJywgaG9tZVRlYW0uY29sb3JzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTGl2ZXJwb29sJzpcbiAgICAgICAgICBob21lVGVhbSA9IGxpdmVycG9vbDtcbiAgICAgICAgICAkKCcuaG9tZS10ZWFtLCAjaG9tZUJhcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGhvbWVUZWFtLmNvbG9yc1swXSk7XG4gICAgICAgICAgJCgnLmhvbWUtdGVhbScpLmNzcygnY29sb3InLCBob21lVGVhbS5jb2xvcnNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNYW4gQ2l0eSc6XG4gICAgICAgICAgaG9tZVRlYW0gPSBtYW5DaXR5O1xuICAgICAgICAgICQoJy5ob21lLXRlYW0sICNob21lQmFyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgaG9tZVRlYW0uY29sb3JzWzBdKTtcbiAgICAgICAgICAkKCcuaG9tZS10ZWFtJykuY3NzKCdjb2xvcicsIGhvbWVUZWFtLmNvbG9yc1sxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0V2ZXJ0b24nOlxuICAgICAgICAgIGhvbWVUZWFtID0gZXZlcnRvbjtcbiAgICAgICAgICAkKCcuaG9tZS10ZWFtLCAjaG9tZUJhcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGhvbWVUZWFtLmNvbG9yc1swXSk7XG4gICAgICAgICAgJCgnLmhvbWUtdGVhbScpLmNzcygnY29sb3InLCBob21lVGVhbS5jb2xvcnNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDaGVsc2VhJzpcbiAgICAgICAgICBob21lVGVhbSA9IGNoZWxzZWE7XG4gICAgICAgICAgJCgnLmhvbWUtdGVhbSwgI2hvbWVCYXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBob21lVGVhbS5jb2xvcnNbMF0pO1xuICAgICAgICAgICQoJy5ob21lLXRlYW0nKS5jc3MoJ2NvbG9yJywgaG9tZVRlYW0uY29sb3JzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTGVpY2VzdGVyJzpcbiAgICAgICAgICBob21lVGVhbSA9IGxlaWNlc3RlcjtcbiAgICAgICAgICAkKCcuaG9tZS10ZWFtLCAjaG9tZUJhcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGhvbWVUZWFtLmNvbG9yc1swXSk7XG4gICAgICAgICAgJCgnLmhvbWUtdGVhbScpLmNzcygnY29sb3InLCBob21lVGVhbS5jb2xvcnNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnNlbmFsJzpcbiAgICAgICAgICBob21lVGVhbSA9IGFyc2VuYWw7XG4gICAgICAgICAgJCgnLmhvbWUtdGVhbSwgI2hvbWVCYXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBob21lVGVhbS5jb2xvcnNbMF0pO1xuICAgICAgICAgICQoJy5ob21lLXRlYW0nKS5jc3MoJ2NvbG9yJywgaG9tZVRlYW0uY29sb3JzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGhvbWVUZWFtKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAkKCcuYXdheS10ZWFtIC50ZWFtLW5hbWUnKS50ZXh0KHNlbGVjdG9yKTtcblxuICAgICAgc3dpdGNoIChzZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdUb3R0ZW5oYW0nOlxuICAgICAgICAgIGF3YXlUZWFtID0gc3B1cnM7XG4gICAgICAgICAgJCgnLmF3YXktdGVhbSwgLnBvc3Nlc3Npb24tYmFyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXdheVRlYW0uY29sb3JzWzBdKTtcbiAgICAgICAgICAkKCcuYXdheS10ZWFtJykuY3NzKCdjb2xvcicsIGF3YXlUZWFtLmNvbG9yc1sxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01hbiBVbml0ZWQnOlxuICAgICAgICAgIGF3YXlUZWFtID0gbWFuVW5pdGVkO1xuICAgICAgICAgICQoJy5hd2F5LXRlYW0sIC5wb3NzZXNzaW9uLWJhcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGF3YXlUZWFtLmNvbG9yc1swXSk7XG4gICAgICAgICAgJCgnLmF3YXktdGVhbScpLmNzcygnY29sb3InLCBhd2F5VGVhbS5jb2xvcnNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdMaXZlcnBvb2wnOlxuICAgICAgICAgIGF3YXlUZWFtID0gbGl2ZXJwb29sO1xuICAgICAgICAgICQoJy5hd2F5LXRlYW0sIC5wb3NzZXNzaW9uLWJhcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGF3YXlUZWFtLmNvbG9yc1swXSk7XG4gICAgICAgICAgJCgnLmF3YXktdGVhbScpLmNzcygnY29sb3InLCBhd2F5VGVhbS5jb2xvcnNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNYW4gQ2l0eSc6XG4gICAgICAgICAgYXdheVRlYW0gPSBtYW5DaXR5O1xuICAgICAgICAgICQoJy5hd2F5LXRlYW0sIC5wb3NzZXNzaW9uLWJhcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGF3YXlUZWFtLmNvbG9yc1swXSk7XG4gICAgICAgICAgJCgnLmF3YXktdGVhbScpLmNzcygnY29sb3InLCBhd2F5VGVhbS5jb2xvcnNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFdmVydG9uJzpcbiAgICAgICAgICBhd2F5VGVhbSA9IGV2ZXJ0b247XG4gICAgICAgICAgJCgnLmF3YXktdGVhbSwgLnBvc3Nlc3Npb24tYmFyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXdheVRlYW0uY29sb3JzWzBdKTtcbiAgICAgICAgICAkKCcuYXdheS10ZWFtJykuY3NzKCdjb2xvcicsIGF3YXlUZWFtLmNvbG9yc1sxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NoZWxzZWEnOlxuICAgICAgICAgIGF3YXlUZWFtID0gY2hlbHNlYTtcbiAgICAgICAgICAkKCcuYXdheS10ZWFtLCAucG9zc2Vzc2lvbi1iYXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBhd2F5VGVhbS5jb2xvcnNbMF0pO1xuICAgICAgICAgICQoJy5hd2F5LXRlYW0nKS5jc3MoJ2NvbG9yJywgYXdheVRlYW0uY29sb3JzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTGVpY2VzdGVyJzpcbiAgICAgICAgICBhd2F5VGVhbSA9IGxlaWNlc3RlcjtcbiAgICAgICAgICAkKCcuYXdheS10ZWFtLCAucG9zc2Vzc2lvbi1iYXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBhd2F5VGVhbS5jb2xvcnNbMF0pO1xuICAgICAgICAgICQoJy5hd2F5LXRlYW0nKS5jc3MoJ2NvbG9yJywgYXdheVRlYW0uY29sb3JzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJzZW5hbCc6XG4gICAgICAgICAgYXdheVRlYW0gPSBhcnNlbmFsO1xuICAgICAgICAgICQoJy5hd2F5LXRlYW0sIC5wb3NzZXNzaW9uLWJhcicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGF3YXlUZWFtLmNvbG9yc1swXSk7XG4gICAgICAgICAgJCgnLmF3YXktdGVhbScpLmNzcygnY29sb3InLCBhd2F5VGVhbS5jb2xvcnNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYXdheVRlYW0pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yKTtcbiAgICAvLyBQYXNzIGluIHRoZSBvYmplY3QgdmFsdWVzIHRvIGhvbWVUZWFtXG4gIH1cblxufSk7XG4iXX0=
