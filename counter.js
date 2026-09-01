// class counter{
//      #count=0;
//      Increment(){
//         return this.#count+=1;
//      }
//      Decrement(){
//         return this.#count-=1;
//      }
//      Reset(){
//         return this.#count=0;
//      }
//      getValue(){
//         return this.#count;
//      }

// }/

export function createCounter(){
    let count=0;
    function Increment(){
        count++;
    }
    function Decrement(){
        count--;
    }
    function Reset(){
        count=0;
    }
    function getValue(){
        return count;
    }
    return {
        Increment,
        Decrement,
        Reset,
        getValue
    };
}