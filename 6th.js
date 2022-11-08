//heirarchical inheritance
const input=require('readline-sync')
class a
{
    father=null
    child1st=null
    child2nd=null
    
    hello()
    {
        console.log('enter father name ')
        this.father=input.question()
    }
}
class b extends a               //b is child(derived) class inherit from a using extends
{
    by()
    {
        console.log('enter child1st name ')
        this.child1st=input.question()
    }
    }

class c extends a               //c is subderived class
{
    hi()
    {
        console.log('enter child2nd name ')
        this.child2nd=input.question()
    }
    
}

const obj=new b()

obj.hello()
obj.by()

const ob=new c()
ob.hello()
ob.hi()

