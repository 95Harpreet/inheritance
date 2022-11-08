
const input=require('readline-sync')
class a
{
    r=null
    m=null
    k=null
    hello()
    {
        console.log('enter 1st value ')
        this.r=input.questionInt()
        console.log('enter 2nd value')
        this.m=input.questionInt()
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
const obj=new b()
obj.hello()
obj.by()