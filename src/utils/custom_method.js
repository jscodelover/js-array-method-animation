export const custom_method = {
	myMap: `<p>Array.prototype.myMap = function(fn){</p> 
                <p>for(let i=0; i < this.length; i++ ){</p>
                    <p>fn(this[i]);</p>
                <p>}</p>
            <p>}</p>
            <p>[1,2,3].myMap((i) => console.log(i*2));</p>`
};
