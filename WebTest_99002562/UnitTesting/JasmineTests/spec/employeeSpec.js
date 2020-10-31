describe('Suite  to test classses',()=> {
    let emp=null;
    


    xit('should set id',()=>{
       const emp = new employee("vinay","af@g")
       const b=emp.validationofName(emp);
        expect(true).toBe(b)
    })
    xit('should set email',()=>{
        const emp = new employee("vinay","afg")
        const e=emp.validationofEmail(emp);
         expect(true).toBe(e)
     })


     xit('should set Phone',()=>{
        const emp = new employee("vinay","afg","8296459429",500)
        const p=emp.validationofPhone(emp);
         expect(true).toBe(p)
     })

     it('should set billamount',()=>{
        const emp = new employee("vinay","afg","8296459429",600)
        const a=emp.validationofBillAmt(emp);
         expect(true).toBe(a)
     })
     
    
})






