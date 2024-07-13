import {describe,it,expect} from React

describe('Something truly or falsey', ()=>{
    it('truly to be truly',()=>{
        expect(true).toBe(true);
    })
    it('false to be false',()=>{
        expect(false).toBe(false);
    })
})