
// courtesy of http://codereview.stackexchange.com/questions/79384/quickly-filter-an-object-by-keys#answer-79390
// (with some edits)
function filterByKeys(obj, keep) 
{
    var result = {};
    for (var i = 0; i < keep.length; i++) 
    {
        var key = keep[i];
        if (typeof obj[key] !== 'undefined') 
        {
            result[key] = obj[key];
        }
    }
    
    return result;
};

module.exports = filterByKeys;
