function Circle(radius) {
  (this.radius = +radius),
    (this.area = function () {
      return this.radius ** 2 * 3.14;
    }),
    (this.perimeter = function () {
      return this.radius * 2 * 3.14;
    });
}
const circle = new Circle(5);
console.log(
  `The area equals to ${circle.area()} and the perimeter equals to ${circle.perimeter()}.`
);
