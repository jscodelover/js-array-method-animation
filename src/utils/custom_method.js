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
	mySort: `<p>Array.prototype.mySort = function(compareFn) {</p>
                <p>return mergeSort(this);</p>
                <p>// Split the array into halves and merge them recursively</p> 
                <p>function mergeSort(arr) {</p>
                    <p>if (arr.length === 1) {</p>
                        <p>// return once we hit an array with a single item</p>
                        <p>return arr;</p>
                    <p>}</p>
                    <p>const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down</p>
                    <p>const left = arr.slice(0, middle); // items on the left side</p>
                    <p>const right = arr.slice(middle); // items on the right side</p>
                    <p>return merge(</p>
                        <p>mergeSort(left),</p>
                        <p>mergeSort(right)</p>
                    <p>);</p>
                <p>}</p>
                <p>// compare the arrays item by item and return the concatenated result</p>
                <p>function merge(left, right) {</p>
                    <p>let result = [];</p>
                    <p>let indexLeft = 0;</p>
                    <p>let indexRight = 0;</p>
                    <p>while (indexLeft < left.length && indexRight < right.length) {</p>
                        <p>let _left = left[indexLeft];</p>
                        <p>let _right = right[indexRight];</p>
                        <p>if (compareFn)</p>
                            <p>compareFn = composeCompareFn(compareFn(left, right));</p>
                        <p>compareFn = (l, r) => l < r</p>
                        <p>if (compareFn(_left, _right)) {</p>
                            <p>result.push(left[indexLeft]);</p>
                            <p>indexLeft++;</p>
                        <p>} else {</p>
                            <p>result.push(right[indexRight]);</p>
                            <p>indexRight++;</p>
                        <p>}</p>
                    <p>}</p>
                    <p>return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));</p>
                <p>}</p>
                <p>function composeCompareFn(compareResult) {</p>
                    <p>if (Math.sign(compareResult) == -1)</p>
                        <p>return false;</p>
                    <p>if (Math.sign(compareResult) == 1)</p>
                        <p>return true;</p>
                    <p>if (compareResult == 0)</p>
                        <p>return false;</p>
                <p>}</p>
            <p>}</p>
    `,
	myFrom: `<p>Array.myFrom = function(data){</p>
                <p>const result = [];</p>
                <p>for(let i = 0; i < data.length; i++)</p>
                    <p>result.push(data[i]);</p>
                <p>return result;</p>    
            <p>};</p>`
};
