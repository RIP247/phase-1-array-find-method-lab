// code your solution here
function superbowlWin (record){
if (record.find(findW) === undefined) {
        return undefined
    }
 else {
    return record.find(findW).year
 }

    
}

function findW(element) {
return element.result === "W"
}

//superbowlWin.find(record);
//onsole.log(record.year);