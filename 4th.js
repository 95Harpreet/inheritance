//multilevel inheritance
class a
{
    hello()
    {
        console.log('i m in hello function')
    }
}
class b extends a               //b is child(derived) class inherit from a using extends
{
    by()
    {
        this.hello()
        console.log('i m in by function')
    }
}
class c extends b
{
    hi(){
        this.by()
        console.log('i m in hi function')

    }

    
}
const obj=new c()
obj.hi()
obj.by()
obj.hello()