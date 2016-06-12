import _ from "lodash";
console.log(_);
import css from "andriod.scss";
class Person {
    constructor(name) {
        this.name = 'zhangmingzhi';
        this.myLike = name || 'pussy'
    }
    say() {
        console.log(` my name is ${this.name} `)
        console.log(` and i like : ${this.myLike} `)
    }
}
var me = new Person("ass");
me.say();
// import css from "./andriod.scss";
// console.log(css);
