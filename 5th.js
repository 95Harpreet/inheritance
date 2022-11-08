//multilevel inheritance
const input=require('readline-sync')
class a
{
    r=null
    m=null
    k=null
    n=null
    hello()
    {
        console.log('enter 1st value ')
        this.r=input.questionInt()
        console.log('enter 2nd value')
        this.m=input.questionInt()
        console.log('enter 3rd value')
        this.n=input.questionInt()
    }
}
class b extends a               //b is child(derived) class inherit from a using extends
{
    by()
    {
        this.k=this.r+this.m
        console.log('sum is '+this.k)
    }
}
class c extends b                 //c is subderived class
{
    hi()
    {
        this.n=this.r+this.m+this.k
        console.log('sum is '+this.n)
    }
}
const obj=new c()
obj.hello()
obj.by()
obj.hi()