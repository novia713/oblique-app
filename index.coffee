



_randomNum = (max,min=0) ->
  return Math.floor(Math.random() * (max - min) + min)



readTextFile = (file) ->

    rawFile = new XMLHttpRequest()
    rawFile.open "GET", file, false
    rawFile.onreadystatechange = () ->
        if (rawFile.readyState is 4)
          if (rawFile.status is 200 or rawFile.status is 0)

            allText = rawFile.responseText
            line = allText.split("\n")[_randomNum 1, 568]
            #console.log line
            document.getElementById("num").innerHTML = line.split(",")[0]
            document.getElementById("section").innerHTML = line.split(",")[1]
            #TODO: strip commas
            document.getElementById("container").innerHTML = line.split(",")[2]




    rawFile.send(null);






$ ->
  readTextFile "./obliquestrategies.csv"
  $(".s12").click ->
    readTextFile "./obliquestrategies.csv"
