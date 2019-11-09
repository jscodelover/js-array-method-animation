export const custom_method = {
	myMap: `<p>Array.prototype.myMap = function(fn) {</p>
                <p>const result = [];</p>
                <p>for (let i = 0; i < this.length; i++) {</p>
                    <p>result.push(fn(this[i], i));</p>
                <p>}</p>
                <p> return result;</p>
            <p>}</p>;`,

	myFilter: `<p>Array.prototype.myFilter = function(fn) {</p>
                <p>const result = [];</p>
                <p>for (let i = 0; i < this.length; i++) {</p>
                    <p>if (fn(this[i], i)) result.push(this[i]);</p>
                <p>}</p>
                <p>return result;</p>
            <p>};</p>`,

	myFind: `<p>Array.prototype.myFind = function(fn) {</p>
                <p>for (let i = 0; i < this.length; i++) {</p>
                    <p>if (fn(this[i], i)) return this[i];</p>
                <p>}</p>
                <p>return undefined;</p>
            <p>};</p>`,
	myFindIndex: `<p>Array.prototype.myFindIndex = function(fn) {</p>
                    <p>for (let i = 0; i < this.length; i++) {</p>
                        <p>if (fn(this[i], i)) return i;</p>
                    <p>}</p>
                    <p>return -1;</p>
                <p>};</p>`,
	myReduce: `<p>Array.prototype.myReduce = function(fn, arg) {</p>
                    <p>let result = arg;</p>
                    <p>for (let i = 0; i < this.length; i++) {</p>
                        <p>result = fn(result, this[i], i);</p>   
                    <p>}</p>
                    <p>return result;</p>
                <p>};</p>`,
	mySome: `<p>Array.prototype.mySome = function(fn) {</p>
                <p>for (let i = 0; i < this.length; i++) {</p>
                    <p>if (fn(this[i], i)) return true;</p>
                <p>}</p>
                <p>return false;</p>
            <p>};</p>`,
	myEvery: `<p>Array.prototype.myEvery = function(fn) {</p>
                    <p>for (let i = 0; i < this.length; i++) {</p>
                        <p>if (!fn(this[i], i)) return false;</p>
                    <p>}</p>
                    <p>return true;</p>
                <p>};</p>`,
	myFrom: `<p>Array.myFrom = function(data){</p>
                <p>const result = [];</p>
                <p>for(let i = 0; i < data.length; i++)</p>
                    <p>result.push(data[i]);</p>
                <p>return result;</p>    
            <p>};</p>`
};
