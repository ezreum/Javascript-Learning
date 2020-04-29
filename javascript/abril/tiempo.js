function tiempo() {
    var x = new Date();
    const i = {};
    document.getElementsByTagName("div")[0].innerHTML=x.toLocaleDateString();
    i.foo="a";
    console.log(i.foo);
    i.foo="b";
    console.log(i.foo);
    console.log(i);
}