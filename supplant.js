/*


 Src: http://javascript.crockford.com/remedial.html

 Does inline variable substitution on the String.

 Syntax:

 "String {variable} ".supplant( valuesObject );
 eg:
 var valuesObject = { items: 12 };
 var sentence = "There are {items} is a dozen".
 console.log(sentence.supplant(valuesObject);

 eg:
 console.log("There are {items} in a dozen.".supplant({items:12});
 */


if (!String.prototype.supplant) {

    String.prototype.supplant = function (o) {

        return this.replace(

            /\{([^{}]*)\}/g,

            function (a, b) {

                var r = o[b];

                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}
