//single level inheritance
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
        
        console.log('i m in by function')
    }
}
const obj=new b()
obj.by()
obj.hello()