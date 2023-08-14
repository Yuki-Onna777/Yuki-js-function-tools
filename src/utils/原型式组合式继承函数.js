export function Finherit(Subtype, Supertype) {
    function F() { }
    F.prototype = Supertype.prototype
    Subtype.prototype = new F()
}