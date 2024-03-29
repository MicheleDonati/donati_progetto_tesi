module.exports.generateRandomIntegerNumber = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.generateRandomDecimalNumber = function(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

module.exports.generateRandomStringFromArray = function(textArray) {
    var randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

module.exports.generateRandomPoint = function (center, radius) {
    var x0 = center.lng;
    var y0 = center.lat;
    // Convert Radius from meters to degrees.
    var rd = radius/111300;

    var u = Math.random();
    var v = Math.random();

    var w = rd * Math.sqrt(u);
    var t = 2 * Math.PI * v;
    var x = w * Math.cos(t);
    var y = w * Math.sin(t);

    var xp = x/Math.cos(y0);

    // Resulting point.
    return {'lat': y+y0, 'lng': xp+x0};
}